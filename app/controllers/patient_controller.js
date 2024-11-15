const patients = require("../models/patients");
const { buildFilter } = require("../filterHelper");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

const generateToken = (patient) => {
  return jwt.sign(
    { id: patient._id, email: patient.email, name: patient.name },
    JWT_SECRET,
    { expiresIn: "1h" } // Token expires in 1 hour
  );
};

// LOGIN a patient
const login_patient = async (ctx) => {
  try {
    const { email, password } = ctx.request.body;

    // Validate input
    if (!email || !password) {
      ctx.status = 400;
      ctx.body = { error: "Email and password are required" };
      return;
    }

    // Find the patient by email
    const patient = await patients.findOne({ email });
    if (!patient) {
      ctx.status = 401;
      ctx.body = { error: "Invalid email or password" };
      return;
    }

    // Verify the password
    const isPasswordValid = await argon2.verify(patient.password, password);
    if (!isPasswordValid) {
      ctx.status = 401;
      ctx.body = { error: "Invalid email or password" };
      return;
    }

    // Generate a JWT token
    const token = generateToken(patient);

    // Set the token in a cookie
    ctx.cookies.set("auth_token", token, {
      httpOnly: true, // Cookie is not accessible via JavaScript
      secure: process.env.NODE_ENV === "production", // Cookie is only sent over HTTPS in production
      sameSite: "strict", // Prevent CSRF attacks by only allowing same-origin requests
      maxAge: 3600000, // Cookie expires in 1 hour
    });

    // Send success response
    ctx.status = 200;
    ctx.body = {
      message: "Login successful",
      patient: {
        id: patient._id,
        name: patient.name,
        email: patient.email,
      },
    };
  } catch (error) {
    console.error("❌ Error logging in:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

// GET all patients or filter patients
const get_patients = async (ctx) => {
  try {
    const { id } = ctx.params;
    const { fields } = ctx.query;

    const selectFields = fields ? fields.split(",").join(" ") : "";

    // Fetch by ID
    if (id) {
      const patient = await patients.findById(id).select(selectFields);

      if (!patient) {
        ctx.status = 404;
        ctx.body = { error: "Patient not found" };
        return;
      }

      ctx.status = 200;
      ctx.body = fields
        ? Object.fromEntries(
            Object.entries(patient.toObject()).filter(([key]) =>
              fields.split(",").includes(key)
            )
          )
        : patient;
      return;
    }

    // Fetch all or filtered results
    const filter = buildFilter(ctx.query, ["name", "email"]);
    const allEntries = await patients.find(filter).select(selectFields);

    ctx.status = 200;
    ctx.body = {
      count: allEntries.length,
      patients: allEntries.map((patient) =>
        fields
          ? Object.fromEntries(
              Object.entries(patient.toObject()).filter(([key]) =>
                fields.split(",").includes(key)
              )
            )
          : patient
      ),
    };
  } catch (error) {
    console.error("❌ Error retrieving patients:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};
// POST a new patient (Registration)
const post_patients = async (ctx) => {
  try {
    const { name, email, password } = ctx.request.body;

    if (!name || !email || !password) {
      ctx.status = 400;
      ctx.body = { error: "Missing required fields" };
      return;
    }

    // Check if the email already exists
    const existingPatient = await patients.findOne({ email });
    if (existingPatient) {
      ctx.status = 400;
      ctx.body = { error: "Email is already registered" };
      return;
    }

    // Hash the password using Argon2
    const hashedPassword = await argon2.hash(password);

    const patient = new patients({ name, email, password: hashedPassword });
    await patient.save();

    ctx.status = 201;
    ctx.body = {
      message: "Patient created successfully",
      patient: {
        id: patient._id,
        name: patient.name,
        email: patient.email,
      },
    };
  } catch (error) {
    console.error("❌ Error creating patient:", error.message);
    ctx.status = error.code === 11000 ? 400 : 500;
    ctx.body = { error: "Patient creation failed" };
  }
};

// UPDATE a patient
const update_patient = async (ctx) => {
  try {
    const { id } = ctx.params;
    const updateData = ctx.request.body;

    if (!updateData || Object.keys(updateData).length === 0) {
      ctx.status = 400;
      ctx.body = { error: "No data provided for update" };
      return;
    }

    const updatedPatient = await patients.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedPatient) {
      ctx.status = 404;
      ctx.body = { error: "Patient not found" };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      message: "Patient updated successfully",
      patient: updatedPatient,
    };
  } catch (error) {
    console.error("❌ Error updating patient:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

// DELETE a patient
const delete_patient = async (ctx) => {
  try {
    const { id } = ctx.params;

    const deletedPatient = await patients.findByIdAndDelete(id);
    if (!deletedPatient) {
      ctx.status = 404;
      ctx.body = { error: "Patient not found" };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      message: "Patient deleted successfully",
      patient: deletedPatient,
    };
  } catch (error) {
    console.error("❌ Error deleting patient:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

module.exports = {
  login_patient,
  get_patients,
  post_patients,
  update_patient,
  delete_patient,
};

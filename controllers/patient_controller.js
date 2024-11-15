const patients = require("../models/patients.js");

// GET all patients
const get_patients = async (ctx) => {
  try {
    const allEntries = await patients.find({});
    if (!allEntries.length) {
      ctx.status = 404;
      ctx.body = { message: "No patients found 👥" };
      return;
    }
    ctx.status = 200;
    ctx.body = allEntries;
  } catch (error) {
    console.error("❌ Error getting patients:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

// LOGIN
const login_patient = async (ctx) => {
  try {
    const { email, password } = ctx.request.body;

    const patient = await patients.findOne({ email, password });
    if (!patient) {
      ctx.status = 401;
      ctx.body = { error: "Invalid credentials" };
      return;
    }

    ctx.status = 200;
    ctx.body = { message: "Login successful 👤", patient };
  } catch (error) {
    console.error("❌ Login error:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

// CREATE a new patient
const post_patients = async (ctx) => {
  try {
    const data = ctx.request.body;
    const patient = new patients(data);
    await patient.save();
    ctx.status = 201;
    ctx.body = { message: "Patient created successfully 👤", patient };
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
    const data = ctx.request.body;

    const updatedPatient = await patients.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updatedPatient) {
      ctx.status = 404;
      ctx.body = { message: "Patient not found 👤" };
      return;
    }

    ctx.status = 200;
    ctx.body = { message: "Patient updated successfully 👤", updatedPatient };
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

    const deleted = await patients.findByIdAndDelete(id);
    if (!deleted) {
      ctx.status = 404;
      ctx.body = { message: "Patient not found 👤" };
      return;
    }

    ctx.status = 200;
    ctx.body = { message: "Patient deleted successfully 👤" };
  } catch (error) {
    console.error("❌ Error deleting patient:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

module.exports = {
  get_patients,
  login_patient,
  post_patients,
  update_patient,
  delete_patient,
};

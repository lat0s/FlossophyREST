const patients = require("../models/patients");
const { buildFilter } = require("../filterHelper");

// GET all patients or filter patients
const get_patients = async (ctx) => {
  try {
    const { id } = ctx.params;

    // Fetch by ID
    if (id) {
      const patient = await patients.findById(id);
      if (!patient) {
        ctx.status = 404;
        ctx.body = { error: "Patient not found" };
        return;
      }
      ctx.status = 200;
      ctx.body = patient;
      return;
    }

    // Fetch all or filtered results
    const filter = buildFilter(ctx.query, ["name", "email"]);
    const allEntries = await patients.find(filter);
    ctx.status = 200;
    ctx.body = {
      count: allEntries.length,
      patients: allEntries,
    };
  } catch (error) {
    console.error("❌ Error retrieving patients:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

// POST a new patient
const post_patients = async (ctx) => {
  try {
    const { name, email, password } = ctx.request.body;

    if (!name || !email || !password) {
      ctx.status = 400;
      ctx.body = { error: "Missing required fields" };
      return;
    }

    const patient = new patients({ name, email, password });
    await patient.save();

    ctx.status = 201;
    ctx.body = {
      message: "Patient created successfully",
      patient,
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
  get_patients,
  post_patients,
  update_patient,
  delete_patient,
};

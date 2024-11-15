const clinics = require("../models/clinics.js");
const patients = require("../models/patients.js");
const { buildFilter } = require("../filterHelper");

// GET all clinics
const get_clinics = async (ctx) => {
  try {
    const { id } = ctx.params;

    if (id) {
      const clinic = await clinics.findById(id).populate("dentists");
      if (!clinic) {
        ctx.status = 404;
        ctx.body = { message: "Clinic not found 🏥" };
        return;
      }
      ctx.status = 200;
      ctx.body = clinic;
      return;
    }

    const filter = buildFilter(ctx.query, [
      "name",
      "address",
      "lng",
      "lat",
      "dentists",
    ]);
    const allEntries = await clinics.find(filter);
    if (!allEntries.length) {
      ctx.status = 404;
      ctx.body = { message: "No clinics found 🏥" };
      return;
    }
    ctx.status = 200;
    ctx.body = allEntries;
  } catch (error) {
    console.error("❌ Error retrieving clinics:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

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
    console.error("❌ Error retrieving patients:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

// POST a new clinic
const post_clinics = async (ctx) => {
  try {
    const data = ctx.request.body;
    const clinic = new clinics(data);
    await clinic.save();
    ctx.status = 201;
    ctx.body = { message: "Clinic created successfully 🏥", clinic };
  } catch (error) {
    console.error("❌ Error creating clinic:", error.message);
    ctx.status = error.code === 11000 ? 400 : 500;
    ctx.body = { error: "Clinic creation failed" };
  }
};

// PUT (Update) a clinic
const update_clinic = async (ctx) => {
  try {
    const { id } = ctx.params;
    const data = ctx.request.body;

    const updatedClinic = await clinics.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updatedClinic) {
      ctx.status = 404;
      ctx.body = { message: "Clinic not found 🏥" };
      return;
    }

    ctx.status = 200;
    ctx.body = { message: "Clinic updated successfully 🏥", updatedClinic };
  } catch (error) {
    console.error("❌ Error updating clinic:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

// DELETE a clinic
const delete_clinic = async (ctx) => {
  try {
    const { id } = ctx.params;

    const deleted = await clinics.findByIdAndDelete(id);
    if (!deleted) {
      ctx.status = 404;
      ctx.body = { message: "Clinic not found 🏥" };
      return;
    }

    ctx.status = 200;
    ctx.body = { message: "Clinic deleted successfully 🏥" };
  } catch (error) {
    console.error("❌ Error deleting clinic:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

module.exports = {
  get_clinics,
  get_patients,
  post_clinics,
  update_clinic,
  delete_clinic,
};

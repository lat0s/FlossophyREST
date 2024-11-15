const dentists = require("../models/dentists");
const clinics = require("../models/clinics");
const { buildFilter } = require("../filterHelper");
// GET all dentists

const get_dentists = async (ctx) => {
  try {
    const { id } = ctx.params;

    if (id) {
      const dentist = await dentists
        .findById(id)
        .populate("clinic appointments");
      if (!dentist) {
        ctx.status = 404;
        ctx.body = { message: "Dentist not found 🦷" };
        return;
      }
      ctx.status = 200;
      ctx.body = dentist;
      return;
    }

    const filter = buildFilter(ctx.query, [
      "name",
      "position",
      "email",
      "clinic",
    ]);
    const allEntries = await dentists.find(filter);
    if (!allEntries.length) {
      ctx.status = 404;
      ctx.body = { message: "No dentists found 🦷" };
      return;
    }
    ctx.status = 200;
    ctx.body = allEntries;
  } catch (error) {
    console.error("❌ Error getting dentists:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};
// POST a new dentist
const post_dentist = async (ctx) => {
  try {
    const data = ctx.request.body;
    const dentist = new dentists(data);
    await dentist.save();

    for (const clinicId of data.clinic || []) {
      const clinic = await clinics.findById(clinicId);
      if (clinic) {
        clinic.dentists.push(dentist._id);
        await clinic.save();
      }
    }

    ctx.status = 201;
    ctx.body = { message: "Dentist created successfully 🦷", dentist };
  } catch (error) {
    console.error("❌ Error creating dentist:", error.message);
    ctx.status = error.code === 11000 ? 400 : 500;
    ctx.body = { error: "Dentist creation failed" };
  }
};

// UPDATE a dentist
const update_dentist = async (ctx) => {
  try {
    const { id } = ctx.params;
    const data = ctx.request.body;

    const updatedDentist = await dentists.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updatedDentist) {
      ctx.status = 404;
      ctx.body = { message: "Dentist not found 🦷" };
      return;
    }

    ctx.status = 200;
    ctx.body = { message: "Dentist updated successfully 🦷", updatedDentist };
  } catch (error) {
    console.error("❌ Error updating dentist:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

// DELETE a dentist
const delete_dentist = async (ctx) => {
  try {
    const { id } = ctx.params;

    const deleted = await dentists.findByIdAndDelete(id);
    if (!deleted) {
      ctx.status = 404;
      ctx.body = { message: "Dentist not found 🦷" };
      return;
    }

    ctx.status = 200;
    ctx.body = { message: "Dentist deleted successfully 🦷" };
  } catch (error) {
    console.error("❌ Error deleting dentist:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

module.exports = {
  get_dentists,
  post_dentist,
  update_dentist,
  delete_dentist,
};

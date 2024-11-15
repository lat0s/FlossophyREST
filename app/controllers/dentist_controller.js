const dentists = require("../models/dentists");
const clinics = require("../models/clinics");
const { buildFilter } = require("../filterHelper");

// GET all dentists or filter dentists
const get_dentists = async (ctx) => {
  try {
    const { id } = ctx.params;

    // Fetch by ID
    if (id) {
      const dentist = await dentists.findById(id).populate("clinic");
      if (!dentist) {
        ctx.status = 404;
        ctx.body = { error: "Dentist not found" };
        return;
      }
      ctx.status = 200;
      ctx.body = dentist;
      return;
    }

    // Fetch all or filtered results
    const filter = buildFilter(ctx.query, [
      "name",
      "position",
      "email",
      "clinic",
    ]);
    const allEntries = await dentists.find(filter).populate("clinic");
    ctx.status = 200;
    ctx.body = {
      count: allEntries.length,
      dentists: allEntries,
    };
  } catch (error) {
    console.error("❌ Error retrieving dentists:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

// POST a new dentist
const post_dentist = async (ctx) => {
  try {
    const { name, position, email, password, clinic } = ctx.request.body;

    if (!name || !position || !email || !password) {
      ctx.status = 400;
      ctx.body = { error: "Missing required fields" };
      return;
    }

    const dentist = new dentists({ name, position, email, password, clinic });
    await dentist.save();

    if (clinic) {
      for (const clinicId of clinic) {
        const clinicEntry = await clinics.findById(clinicId);
        if (clinicEntry) {
          clinicEntry.dentists.push(dentist._id);
          await clinicEntry.save();
        }
      }
    }

    ctx.status = 201;
    ctx.body = {
      message: "Dentist created successfully",
      dentist,
    };
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
    const updateData = ctx.request.body;

    if (!updateData || Object.keys(updateData).length === 0) {
      ctx.status = 400;
      ctx.body = { error: "No data provided for update" };
      return;
    }

    const updatedDentist = await dentists.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedDentist) {
      ctx.status = 404;
      ctx.body = { error: "Dentist not found" };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      message: "Dentist updated successfully",
      dentist: updatedDentist,
    };
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

    const deletedDentist = await dentists.findByIdAndDelete(id);
    if (!deletedDentist) {
      ctx.status = 404;
      ctx.body = { error: "Dentist not found" };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      message: "Dentist deleted successfully",
      dentist: deletedDentist,
    };
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

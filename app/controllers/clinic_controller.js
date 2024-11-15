const clinics = require("../models/clinics");
const patients = require("../models/patients");
const { buildFilter } = require("../filterHelper");

// GET all clinics or filter clinics
const get_clinics = async (ctx) => {
  try {
    const { id } = ctx.params;
    const { fields } = ctx.query;

    const selectFields = fields ? fields.split(",").join(" ") : "";

    // Fetch by ID
    if (id) {
      const clinic = await clinics
        .findById(id)
        .select(selectFields)
        .populate("dentists");

      if (!clinic) {
        ctx.status = 404;
        ctx.body = { error: "Clinic not found" };
        return;
      }

      ctx.status = 200;
      ctx.body = fields
        ? Object.fromEntries(
            Object.entries(clinic.toObject()).filter(([key]) =>
              fields.split(",").includes(key)
            )
          )
        : clinic;
      return;
    }

    // Fetch all or filtered results
    const filter = buildFilter(ctx.query, [
      "name",
      "address",
      "lng",
      "lat",
      "dentists",
    ]);
    const allEntries = await clinics
      .find(filter)
      .select(selectFields)
      .populate("dentists");

    ctx.status = 200;
    ctx.body = {
      count: allEntries.length,
      clinics: allEntries.map((clinic) =>
        fields
          ? Object.fromEntries(
              Object.entries(clinic.toObject()).filter(([key]) =>
                fields.split(",").includes(key)
              )
            )
          : clinic
      ),
    };
  } catch (error) {
    console.error("❌ Error retrieving clinics:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

// POST a new clinic
const post_clinics = async (ctx) => {
  try {
    const { name, address, lng, lat, openinghours } = ctx.request.body;

    // Validate required fields
    if (!name || !address || !lng || !lat) {
      ctx.status = 400;
      ctx.body = { error: "Missing required fields" };
      return;
    }

    const clinic = new clinics({ name, address, lng, lat, openinghours });
    await clinic.save();

    ctx.status = 201;
    ctx.body = {
      message: "Clinic created successfully",
      clinic,
    };
  } catch (error) {
    console.error("❌ Error creating clinic:", error.message);
    ctx.status = error.code === 11000 ? 400 : 500;
    ctx.body = { error: "Clinic creation failed" };
  }
};

// UPDATE a clinic
const update_clinic = async (ctx) => {
  try {
    const { id } = ctx.params;
    const updateData = ctx.request.body;

    if (!updateData || Object.keys(updateData).length === 0) {
      ctx.status = 400;
      ctx.body = { error: "No data provided for update" };
      return;
    }

    const updatedClinic = await clinics
      .findByIdAndUpdate(id, updateData, { new: true })
      .populate("dentists");
    if (!updatedClinic) {
      ctx.status = 404;
      ctx.body = { error: "Clinic not found" };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      message: "Clinic updated successfully",
      clinic: updatedClinic,
    };
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

    const deletedClinic = await clinics.findByIdAndDelete(id);
    if (!deletedClinic) {
      ctx.status = 404;
      ctx.body = { error: "Clinic not found" };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      message: "Clinic deleted successfully",
      clinic: deletedClinic,
    };
  } catch (error) {
    console.error("❌ Error deleting clinic:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

module.exports = {
  get_clinics,
  post_clinics,
  update_clinic,
  delete_clinic,
};

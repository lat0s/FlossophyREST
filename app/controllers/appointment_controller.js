const dentists = require("../models/dentists.js");
const appointments = require("../models/appointments.js");
const { buildFilter } = require("../filterHelper");

// GET all appointments or filter appointments
const get_appointments = async (ctx) => {
  try {
    const { id } = ctx.params;
    const { fields } = ctx.query;

    const selectFields = fields ? fields.split(",").join(" ") : "";

    // Fetch by ID
    if (id) {
      const appointment = await appointments
        .findById(id)
        .select(selectFields)
        .populate("dentist clinic patient");

      if (!appointment) {
        ctx.status = 404;
        ctx.body = { error: "Appointment not found" };
        return;
      }

      ctx.status = 200;
      ctx.body = fields
        ? Object.fromEntries(
            Object.entries(appointment.toObject()).filter(([key]) =>
              fields.split(",").includes(key)
            )
          )
        : appointment;
      return;
    }

    // Fetch all or filtered results
    const filter = buildFilter(ctx.query, [
      "date",
      "time",
      "status",
      "dentist",
      "clinic",
      "patient",
    ]);
    const allEntries = await appointments
      .find(filter)
      .select(selectFields)
      .populate("dentist clinic patient");

    ctx.status = 200;
    ctx.body = {
      count: allEntries.length,
      appointments: allEntries.map((appointment) =>
        fields
          ? Object.fromEntries(
              Object.entries(appointment.toObject()).filter(([key]) =>
                fields.split(",").includes(key)
              )
            )
          : appointment
      ),
    };
  } catch (error) {
    console.error("❌ Error getting appointments:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

// POST a new appointment
const post_appointment = async (ctx) => {
  try {
    const { date, time, status, dentist, clinic, patient } = ctx.request.body;

    // Validate required fields
    if (!date || !time || !status || !dentist || !clinic) {
      ctx.status = 400;
      ctx.body = { error: "Missing required fields" };
      return;
    }

    const dentistExists = await dentists.findById(dentist);
    if (!dentistExists) {
      ctx.status = 404;
      ctx.body = { error: "Dentist not found" };
      return;
    }

    const appointment = new appointments({
      date,
      time,
      status,
      dentist,
      clinic,
      patient: patient || null,
    });

    await appointment.save();
    dentistExists.appointments.push(appointment._id);
    await dentistExists.save();

    ctx.status = 201;
    ctx.body = {
      message: "Appointment created successfully",
      appointment,
    };
  } catch (error) {
    console.error("❌ Error creating appointment:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

// UPDATE an appointment
const update_appointment = async (ctx) => {
  try {
    const { id } = ctx.params;
    const updateData = ctx.request.body;

    // Validate presence of update fields
    if (!updateData || Object.keys(updateData).length === 0) {
      ctx.status = 400;
      ctx.body = { error: "No data provided for update" };
      return;
    }

    const updatedAppointment = await appointments
      .findByIdAndUpdate(id, updateData, { new: true })
      .populate("dentist clinic patient");

    if (!updatedAppointment) {
      ctx.status = 404;
      ctx.body = { error: "Appointment not found" };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      message: "Appointment updated successfully",
      appointment: updatedAppointment,
    };
  } catch (error) {
    console.error("❌ Error updating appointment:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

// DELETE an appointment
const delete_appointments = async (ctx) => {
  try {
    const { id } = ctx.params;

    const deletedAppointment = await appointments.findByIdAndDelete(id);
    if (!deletedAppointment) {
      ctx.status = 404;
      ctx.body = { error: "Appointment not found" };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      message: "Appointment deleted successfully",
      appointment: deletedAppointment,
    };
  } catch (error) {
    console.error("❌ Error deleting appointment:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

module.exports = {
  get_appointments,
  post_appointment,
  update_appointment,
  delete_appointments,
};

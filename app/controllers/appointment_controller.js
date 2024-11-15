const dentists = require("../models/dentists.js");
const appointments = require("../models/appointments.js");

// GET all appointments
const get_appointments = async (ctx) => {
  try {
    const allEntries = await appointments.find({});
    if (!allEntries.length) {
      ctx.status = 404;
      ctx.body = { message: "No appointments found 📅" };
      return;
    }
    ctx.status = 200;
    ctx.body = allEntries;
  } catch (error) {
    console.error("❌ Error getting appointments:", error.message);
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
};

// POST a new appointment
const post_appointment = async (ctx) => {
  try {
    const data = ctx.request.body;
    const appointment = new appointments(data);
    await appointment.save();

    const dentist = await dentists.findById(data.dentist);
    if (!dentist) {
      ctx.status = 404;
      ctx.body = { message: "Dentist not found 🦷" };
      return;
    }

    dentist.appointments.push(appointment._id);
    await dentist.save();

    ctx.status = 201;
    ctx.body = { message: "Appointment created successfully 📅", appointment };
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
    const data = ctx.request.body;

    const updatedAppointment = await appointments.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updatedAppointment) {
      ctx.status = 404;
      ctx.body = { message: "Appointment not found 📅" };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      message: "Appointment updated successfully 📅",
      updatedAppointment,
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

    const deleted = await appointments.findByIdAndDelete(id);
    if (!deleted) {
      ctx.status = 404;
      ctx.body = { message: "Appointment not found 📅" };
      return;
    }

    ctx.status = 200;
    ctx.body = { message: "Appointment deleted successfully 📅" };
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

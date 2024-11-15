const Router = require("koa-router");
const { sendEmail } = require("../smtp");

const router = new Router();

// Endpoint to send appointment emails
router.post("/send-email", async (ctx) => {
  const {
    patientEmail,
    dentistEmail,
    patientName,
    clinicName,
    dentistName,
    time,
    date,
    type,
  } = ctx.request.body;

  // Validate request body
  if (
    !patientEmail ||
    !dentistEmail ||
    !patientName ||
    !clinicName ||
    !dentistName ||
    !time ||
    !date ||
    !type
  ) {
    ctx.status = 400;
    ctx.body = { error: "Missing required fields" };
    return;
  }

  try {
    await sendEmail(
      patientEmail,
      dentistEmail,
      patientName,
      clinicName,
      dentistName,
      time,
      date,
      type
    );
    ctx.status = 200;
    ctx.body = { message: "Emails sent successfully" };
  } catch (error) {
    console.error("Error sending emails:", error);
    ctx.status = 500;
    ctx.body = { error: "Failed to send emails" };
  }
});

module.exports = router;

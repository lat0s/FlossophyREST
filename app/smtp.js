const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables from .env

// Function to send email
async function sendEmail(
  patientEmail,
  dentistEmail,
  patientName,
  clinicName,
  dentistName,
  time,
  date,
  type
) {
  try {
    let subject, bodyPatient, bodyDentist;

    if (type === "book") {
      subject = "Appointment Confirmation";
      bodyPatient = `Dear ${patientName},\n\nYour appointment at ${clinicName} with Dr. ${dentistName} has been successfully booked for ${date} at ${time}.\n\nThank you,\n${clinicName} Team`;
      bodyDentist = `Dear Dr. ${dentistName},\n\nAn appointment with ${patientName} at ${clinicName} has been booked for ${date} at ${time}.\n\nThank you,\n${clinicName} Team`;
    } else if (type === "cancel") {
      subject = "Appointment Cancellation";
      bodyPatient = `Dear ${patientName},\n\nYour appointment at ${clinicName} with Dr. ${dentistName} on ${date} at ${time} has been cancelled.\n\nThank you,\n${clinicName} Team`;
      bodyDentist = `Dear Dr. ${dentistName},\n\nThe appointment with ${patientName} at ${clinicName} on ${date} at ${time} has been cancelled.\n\nThank you,\n${clinicName} Team`;
    } else {
      throw new Error("Invalid email type");
    }

    let transporter = nodemailer.createTransport({
      //THESE WORK FOR GMAIL AT LEAST!!!!
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email to the patient
    let patientMailOptions = {
      from: process.env.EMAIL_FROM,
      to: patientEmail,
      subject: subject,
      text: bodyPatient,
    };

    let patientInfo = await transporter.sendMail(patientMailOptions);
    console.log("Patient email sent: ", patientInfo.messageId);

    // Send email to the dentist
    let dentistMailOptions = {
      from: process.env.EMAIL_FROM,
      to: dentistEmail,
      subject: subject,
      text: bodyDentist,
    };

    let dentistInfo = await transporter.sendMail(dentistMailOptions);
    console.log("Dentist email sent: ", dentistInfo.messageId);

    return { patient: patientInfo.messageId, dentist: dentistInfo.messageId };
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
}

module.exports = { sendEmail };

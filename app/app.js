const Koa = require("koa");
const Router = require("koa-router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("koa-bodyparser");
const helmet = require("koa-helmet");
const logger = require("koa-logger");

const dentistRouter = require("./routers/dentist_router");
const appointmentRouter = require("./routers/appointment_router");
const clinicRouter = require("./routers/clinic_router");
const patientRouter = require("./routers/patient_router");
const emailRouter = require("./routers/email_router");

dotenv.config();

const app = new Koa();
const router = new Router();

// Middleware
app.use(helmet()); // Adds security headers
app.use(logger()); // Logs requests and responses
app.use(bodyParser()); // Parses JSON requests

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI;

// Updated MongoDB Connection
mongoose
  .connect(mongoURI, { dbName: "flossophy" }) // Specify the database name
  .then(() => console.log("✅ Successfully connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

// Health Check
router.get("/", async (ctx) => {
  ctx.status = 200;
  ctx.body = { message: "API is running 🚀" };
});

// Use Routers
app.use(dentistRouter.routes()).use(dentistRouter.allowedMethods());
app.use(appointmentRouter.routes()).use(appointmentRouter.allowedMethods());
app.use(clinicRouter.routes()).use(clinicRouter.allowedMethods());
app.use(patientRouter.routes()).use(patientRouter.allowedMethods());
app.use(emailRouter.routes()).use(emailRouter.allowedMethods());

// Global Error Handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error("❌ Error:", err.message);
    ctx.status = err.status || 500;
    ctx.body = { error: err.message || "Internal Server Error" };
  }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

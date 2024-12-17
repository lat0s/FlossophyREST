const Router = require("koa-router");
const {
  get_appointments,
  post_appointment,
  update_appointment,
  delete_appointments,
} = require("../controllers/appointment_controller");

const router = new Router({ prefix: "/appointment" });

// Define routes
router.get("/", get_appointments); // Get all or filtered appointments
router.get("/:id", get_appointments); // Get a specific appointment by ID
router.post("/", post_appointment); // Create a new appointment
router.patch("/:id", update_appointment); // Update an appointment by ID
router.delete("/:id", delete_appointments); // Delete an appointment by ID

module.exports = router;

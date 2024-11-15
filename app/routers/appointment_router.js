const Router = require("koa-router");
const {
  get_appointments,
  post_appointment,
  update_appointment,
  delete_appointments,
} = require("../controllers/appointment_controller");

const router = new Router({ prefix: "/appointments" });

// Define routes
router.get("/", get_appointments);
router.post("/", post_appointment);
router.put("/:id", update_appointment);
router.delete("/:id", delete_appointments);

module.exports = router;

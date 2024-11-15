const Router = require("koa-router");
const {
  get_patients,
  login_patient,
  post_patients,
  update_patient,
  delete_patient,
} = require("../controllers/patient_controller");

const router = new Router({ prefix: "/patients" });

// Define routes
router.get("/", get_patients);
router.post("/login", login_patient); // Login endpoint
router.post("/", post_patients);
router.put("/:id", update_patient);
router.delete("/:id", delete_patient);

module.exports = router;

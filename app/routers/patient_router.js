const Router = require("koa-router");
const {
  get_patients,
  login_patient,
  post_patients,
  update_patient,
  delete_patient,
} = require("../controllers/patient_controller");

const router = new Router({ prefix: "/patient" });

// Define routes
router.get("/", get_patients); // Get all or filtered patients
router.get("/:id", get_patients); // Get a specific patient by ID
router.post("/login", login_patient); // Login endpoint
router.post("/", post_patients); // Create a new patient
router.put("/:id", update_patient); // Update a patient by ID
router.delete("/:id", delete_patient); // Delete a patient by ID

module.exports = router;

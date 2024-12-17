const Router = require("koa-router");
const {
  get_patients,
  post_patients,
  update_patient,
  delete_patient,
  login_patient,
} = require("../controllers/patient_controller");

const router = new Router({ prefix: "/patient" });

// Define routes
router.get("/", get_patients); // Get all or filtered patients
router.get("/:id", get_patients); // Get a specific patient by ID
router.post("/", post_patients); // Create a new patient
router.post("/login", login_patient); // Login a patient
router.patch("/:id", update_patient); // Update a patient by ID
router.delete("/:id", delete_patient); // Delete a patient by ID

module.exports = router;

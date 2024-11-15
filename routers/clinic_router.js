const Router = require("koa-router");
const {
  get_clinics,
  get_patients,
  post_clinics,
  update_clinic,
  delete_clinic,
} = require("../controllers/clinic_controller");

const router = new Router({ prefix: "/clinics" });

// Define routes
router.get("/", get_clinics);
router.get("/patients", get_patients); // Extra endpoint for patients within clinics
router.post("/", post_clinics);
router.put("/:id", update_clinic);
router.delete("/:id", delete_clinic);

module.exports = router;

const Router = require("koa-router");
const {
  get_clinics,
  post_clinics,
  update_clinic,
  delete_clinic,
} = require("../controllers/clinic_controller");

const router = new Router({ prefix: "/clinic" });

// Define routes
router.get("/", get_clinics); // Get all or filtered clinics
router.get("/:id", get_clinics); // Get a specific clinic by ID
router.post("/", post_clinics); // Create a new clinic
router.patch("/:id", update_clinic); // Update a clinic by ID
router.delete("/:id", delete_clinic); // Delete a clinic by ID

module.exports = router;

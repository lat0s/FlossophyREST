const Router = require("koa-router");
const {
  get_dentists,
  post_dentist,
  update_dentist,
  delete_dentist,
} = require("../controllers/dentist_controller");

const router = new Router({ prefix: "/dentist" });

// Define routes
router.get("/", get_dentists); // Get all or filtered dentists
router.get("/:id", get_dentists); // Get a specific dentist by ID
router.post("/", post_dentist); // Create a new dentist
router.patch("/:id", update_dentist); // Update a dentist by ID
router.delete("/:id", delete_dentist); // Delete a dentist by ID

module.exports = router;

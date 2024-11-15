const Router = require("koa-router");
const {
  get_dentists,
  post_dentist,
  update_dentist,
  delete_dentist,
} = require("../controllers/dentist_controller");

const router = new Router({ prefix: "/dentists" });

// Define routes
router.get("/", get_dentists);
router.post("/", post_dentist);
router.put("/:id", update_dentist);
router.delete("/:id", delete_dentist);

module.exports = router;

const router = require("express").Router();
const appRoutes = require("./app.routes");
const apiUserRoutes = require("./api-users.routes");

router.use(appRoutes);
router.use("/api/users", apiUserRoutes);

router.get("*", (req, res) => res.redirect("/home"));

module.exports = router;
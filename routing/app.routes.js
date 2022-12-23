const router = require("express").Router();
const { homePage, servicesPage, contactPage, usersPage } = require("../controllers/app.controllers");

router.get("/home", homePage);
router.get("/services", servicesPage);
router.get("/users", usersPage);
router.get("/contact", contactPage);

module.exports = router;
const router = require("express").Router();
const { homePage, servicesPage, contactPage } = require("../controllers/app.controllers");

router.get("/home", homePage);
router.get("/services", servicesPage);
router.get("/contact", contactPage);


module.exports = router;
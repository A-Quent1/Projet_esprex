const { getUsers } = require("../controllers/api-users-controllers");
const router = require("express").Router();

router.get("/", getUsers);

module.exports = router;
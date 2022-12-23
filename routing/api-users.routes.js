const { gerUsers, getUsers } = require("../controllers/api-users-controllers");
const router = require("express").Router();

route.get("/api/users", getUsers);

module.exports = router;
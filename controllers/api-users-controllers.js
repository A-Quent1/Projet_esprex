const { users } = require("../database/data.json");

exports.getUsers = (req, res) => {
    res.status(200).json({
        nbOfUsers: users.length,
        users
    });
}
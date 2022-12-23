const { users } = require("../database/data");

exports.getUsers = (req, res) => {
    res.status(200).json({
        nbOfUsers: users.length,
        users
    });
}
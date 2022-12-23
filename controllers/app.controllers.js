const { resolve } = require("path");

exports.homePage = (req, res) => {
    res.sendFile(resolve("public", "index.html"));
};

exports.contactPage = (req, res) => {
    res.sendFile(resolve("public", "contact.html"));
};

exports.servicesPage = (req, res) => {
    res.sendFile(resolve("public", "services.html"))
};
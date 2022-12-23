const router = require("express").Router();
const { resolve } = require("path");

router.get("/api/users", (req, res) => res.end("users"));

router.get("/home", (req, res) => {
    res.sendFile(resolve("public", "index.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(resolve("public", "contact.html"));
});

app.get("/services", (req, res) => {
    res.sendFile(resolve("public", "services.html"));
});

app.get("*", (req, res) => {
    res.sendFile(resolve("public", "page404.html"));
});

module.exports = router;
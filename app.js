const express = require("express");
const { resolve } = require("path");
const app = express();
const appRoutes = require("./routing/router");

app.use(express.static(resolve("public")), { index: false});
app.use(router);

module.exports = app;
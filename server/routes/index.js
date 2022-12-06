const express = require("express");
const app = express();

app.use("/user", require("./user"));
app.use("/category", require('./category'));
app.use("/article", require("./article"));

module.exports = app;

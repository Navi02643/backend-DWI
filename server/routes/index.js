const express = require("express");
const app = express();

app.use("/user", require("./user"));
app.use("/category", require("./category"));
app.use("/password", require("./password"));

module.exports = app;

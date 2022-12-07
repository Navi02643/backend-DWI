const express = require("express");
const app = express();

app.use("/user", require("./user"));
app.use("/category", require('./category'));
app.use("/article", require("./article"));
app.use("/forum",require('./forum'));
app.use("/comments",require('./comment'))

module.exports = app;

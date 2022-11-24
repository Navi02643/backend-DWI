const USER = require('../services/user')

const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  try {
    const USERFUNCTION =  await USER.postLoginService(req.body);
    return res.status(200).json({
      estatus: "200",
      err: false,
      msg: "FUNCIONANDO",
      data: USERFUNCTION
    });
  } catch (err) {
    return res.status(500).send({
      estatus: "500",
      err: true,
      msg: "Error",
      cont: {
        err: Object.keys(err).length === 0 ? err.message : err,
      },
    });
  }
});


app.post("/", async (req, res) => {
  try {
    const USERFUNCTION =  await USER.postUserService(req.body);
    return res.status(200).json({
      estatus: "200",
      err: false,
      msg: "FUNCIONANDO",
      USERFUNCTION
    });
  } catch (err) {
    return res.status(500).send({
      estatus: "500",
      err: true,
      msg: "Error",
      cont: {
        err: Object.keys(err).length === 0 ? err.message : err,
      },
    });
  }
});

module.exports = app;
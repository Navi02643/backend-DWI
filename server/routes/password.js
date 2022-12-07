const passwordService = require("../services/passwordRecovery");
const express = require("express");
const app = express();

app.post("/", async (req, res) => {
  try {
    const data = await passwordService.generatePasswordRecovery(req.body);
    return res.status(200).json({
      data,
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

app.post("/check", async (req, res) => {
  try {
    const data = await passwordService.updatePassword(req.body);
    return res.status(200).json({
      data,
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
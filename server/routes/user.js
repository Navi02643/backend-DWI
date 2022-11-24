const userService = require("../services/user");

const express = require("express");
const app = express();

app.post("/login", async (req, res) => {
  try {
    const login = await userService.userLogin(req.body);
    return res.status(200).json({
      data: login,
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
    const userSave = await userService.saveUser(req.body);
    return res.status(200).json({
      data: userSave,
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

app.put("/", async (req,res)=>{
  try {
    const updateUser = await userService.recoverPassword(req.body);
    return res.status(200).json({
      data: updateUser,
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
})

module.exports = app;

const forumService = require("../services/forum");

const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  try {
    const data = await forumService.findForums();
    return res.status(200).json({
      data,
    });
  } catch (error) {
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
    const data = await forumService.forumCreate(req.body);
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

app.delete("/", async (req, res) => {
  try {
    const data = await forumService.closeForum(req.body);
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

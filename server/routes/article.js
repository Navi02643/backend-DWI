const articleService = require("../services/article");

const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  try {
    const data = await articleService.findArticles();
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

app.post("/", async (req, res) => {
  try {
    const data = await articleService.saveArticle(req.body);
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

app.put("/", async (req, res) => {
  try {
    let id = req.query.id;
    await articleService.updateArticles(id,req.body);
    res.status(200).send("Artículo actualizado");
  } catch (error) {
    return res.status(500).send({
      estatus: "500",
      err: true,
      msg: "No se pudo actualizar el artículo",
      cont: {
        err: Object.keys(err).length === 0 ? err.message : err,
      },
    });
  }
});


module.exports = app;

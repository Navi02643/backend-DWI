const categoryService = require("../services/category");

const express = require("express");
const app = express(); 

app.get("/", (req, res) =>{
    res.send('Correcto')
});

app.post("/category", async (req, res) => {
    try {
      const categorySave = await categoryService.saveCategory(req.body);
      return res.status(200).json({
        data: categorySave,
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
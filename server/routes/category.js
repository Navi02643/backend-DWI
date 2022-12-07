const categoryService = require("../services/category");

const express = require("express");
const { db } = require("../database/models/category");
const app = express(); 

app.get("/", async (req, res) =>{
    try {
      const data = await categoryService.findCategories();

      return res.status(200).json({data});
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
      const data = await categoryService.saveCategory(req.body);
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

  app.put('/', async (req, res) => {
    try {
      let _id = req.query.id;
      let categoryName = req.body.categoryName;
      await categoryService.updateCategories(_id,categoryName);
      res.status(200).send('Categoría actualizada');
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
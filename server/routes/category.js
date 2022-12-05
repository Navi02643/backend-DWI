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
        categorySave,
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

  app.put('/:id', async (req, res) => {
    try {
      let _id = req.params.id;
      let {categoryName} = req.body;
      await categoryService.updateCategories({categoryName}, {
        where: {
          _id,
        },
      });
      res.status(200).send('Categoría actualizada');
    } catch (error) {
      return res.status(500).send({
        estatus: "500",
        err: true,
        msg: "No se pudo actualizar la categoría",
        cont: {
          err: Object.keys(err).length === 0 ? err.message : err,
        },
      });
    }
  });


module.exports = app;
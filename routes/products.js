const express = require('express');
const router = express.Router();

const { getAllProducts } = require('../db/queries/products/01_getAllProducts');
const { getProductById } = require('../db/queries/products/06_getProductById');

module.exports = (db) => {

  router.get("/", (req, res) => {
    const allProducts = getAllProducts(db);

    Promise.all([allProducts])
      .then(([data]) => {
        const products = data.rows;
        res.json({ products });
        return;
      })
      .catch(err => {
        res.status(500).json(`error: ${err.message}`);
      });
  });

  router.get("/:id", (req, res) => {
    const currentId = req.params.id;
    const productById = getProductById(db, currentId);

    Promise.all([productById])
      .then(([data]) => {
        const product = data.rows[0];
        res.json({ product });
        return;
      })
      .catch(err => {
        res.status(500).json(`error: ${err.message}`);
      });
  });

  return router;
};
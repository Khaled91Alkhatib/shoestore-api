const express = require('express');
const router = express.Router();

const { getCarouselImages } = require('../db/queries/carousel/01_carousel');

module.exports = (db) => {
  router.get("/", (req, res) => {
    const carouselImages = getCarouselImages(db);

    Promise.all([carouselImages])
      .then(([data]) => {
        const images = data.rows;
        res.json({ images });
        return;
      })
      .catch(err => {
        res.status(500).json(`error: ${err.message}`);
      });
  });

  return router;
};
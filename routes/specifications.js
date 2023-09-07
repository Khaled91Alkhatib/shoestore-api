const express = require("express")
const router = express.Router()

const { getSizes } = require("../db/queries/products/05_getSizes")
const { getColors } = require("../db/queries/products/04_getColors")

module.exports = (db) => {

  router.get("/", (req, res) => {
    const sizes = getSizes(db)
    const colors = getColors(db)
    
    Promise.all([sizes, colors])
      .then(([sizesData, colorsData]) => {
        const sizes = sizesData.rows
        const colors = colorsData.rows
        res.json({ sizes, colors })
        return
      })
      .catch(err => {
        res.status(500).json(`error: ${err.message}`)
      })
  })

  return router
}
require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5001;

const { Client } = require('pg');
const db = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
db.connect();

app.use(cors());

const productRoutes = require("./routes/products")
const carouselRoutes = require("./routes/carousel")
const specificationRoutes = require("./routes/specifications")

app.use("/api/products", productRoutes(db))
app.use("/api/carousel", carouselRoutes(db))
app.use("/api/specifications", specificationRoutes(db))

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
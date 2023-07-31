const express = require('express')
const app = express()
PORT = 5001

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
})
const express = require('express')
const app = express()
const cors = require('cors')
PORT = 5001

app.use(cors())

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
})
const bodyParser = require("body-parser")
const db = require("../db/db")
const express = require("express")
const port = 3000
const app = express()

//app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080")
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  )
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
  next()
})



app.listen(port, function() {
  console.log(`listening on port ${port}`)
})

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/rustydb", { useMongoClient: true })

var db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function() {
  //leave open
})

// schema


//methods


// module.exports.fetchTodos = fetchTodos

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rustydb", { useMongoClient: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  //leave open
});
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var blogSchema = new Schema({
//   title:  String,
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });
let userSchema = mongoose.Schema ({
  pet: String,
  userAddress: mongoose.Schema.Types.Mixed, // ???
  email: String,
  username: String,
  password: String,
  rating_ids: Array
});

let businessSchema = mongoose.Schema ({
  name: String,
  businessAddress: mongoose.Schema.Types.Mixed, // ???
  email: String,
  password: String,
  phone: String,
  businessCategory: String,
  rating_ids: Array
});


let ratingSchema = mongoose.Schema ({
  rating_id: {type: Number, unique: true},
  wags: Number,
  description: String
});
// schema


//methods
let createUser = mongoose.model('User', userSchema);

let createBusiness = mongoose.model('Business', businessSchema);

let updateRustyUser = (){};

// module.exports.fetchTodos = fetchTodos

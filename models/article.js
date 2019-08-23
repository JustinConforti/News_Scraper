var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// creating a new Schema constructor names ArticleSchema
var articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  plot:{
    type: String
  },
  link: {
    type: String,
    required: true,
    unique: true
  },
  date_published: {
    type: Date
},
  
  // note is an object that stores a Note id and creates a reference to "Note" schema
  note:[ {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

// using mongoose we can assign the variable "article" to the above schema and export out
var article = mongoose.model("article", articleSchema);

// Export the Article model
module.exports = article;
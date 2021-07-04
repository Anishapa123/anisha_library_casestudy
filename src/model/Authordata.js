// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/library',{ useNewUrlParser: true,useUnifiedTopology: true  });
const mongoose=require('./connection').db

// const Schema = mongoose.Schema;

const AuthorSchema  = mongoose.Schema({
    author:String,
    place:String,
    title:String,
    genre:String,   

});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;

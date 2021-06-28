const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryapp_casestudy',{ useNewUrlParser: true,useUnifiedTopology: true  });
const Schema = mongoose.Schema;

const AuthorSchema  = new Schema({
    author:String,
    place:String,
    title:String,
    genre:String,   

});

var Authordata = mongoose.model('Authordata',AuthorSchema);

module.exports = Authordata;

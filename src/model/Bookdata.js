const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryapp_casestudy',{ useNewUrlParser: true,useUnifiedTopology: true });
const Schema = mongoose.Schema;

const BookSchema  = new Schema({
      title:String,
      author:String,
      genre:String,
      image:String

});

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;

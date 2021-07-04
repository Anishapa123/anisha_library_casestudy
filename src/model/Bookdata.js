
const mongoose=require('./connection').db
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false); 

const BookSchema  = new Schema({
      title:String,
      author:String,
      genre:String,
      image:String

});

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;

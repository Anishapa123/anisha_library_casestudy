const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryapp_casestudy',{ useNewUrlParser: true,useUnifiedTopology: true });
const Schema = mongoose.Schema;

const AdminSchema  = new Schema({
    name:String,
    email:String,
    password:String
     

});

var admin = mongoose.model('admin',AdminSchema);

module.exports = admin;

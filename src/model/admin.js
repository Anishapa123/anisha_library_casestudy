const mongoose=require('./connection').db
const Schema = mongoose.Schema;


const AdminSchema  = new Schema({
    name:String,
    email:String,
    password:String
     

});

var admin = mongoose.model('admin',AdminSchema);

module.exports = admin;

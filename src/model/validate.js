const mongoose=require('./connection').db
const Schema = mongoose.Schema;




// for signup/newuser
const validateSchema  = new Schema({
    email:String,
    password:String,
    address:String,
    phone:String,   

});


  



var validate = mongoose.model('validate',validateSchema);

module.exports =validate;

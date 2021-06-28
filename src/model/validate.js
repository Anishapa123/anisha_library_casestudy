const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryapp_casestudy',{ useNewUrlParser: true, useUnifiedTopology: true });
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

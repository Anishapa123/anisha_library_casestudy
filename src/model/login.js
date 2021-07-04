const mongoose=require('./connection').db
const Schema = mongoose.Schema;




const loginSchema  = new Schema({
    email:String,
    password:String,
   

});


  



var login = mongoose.model('login',loginSchema);

module.exports =login;

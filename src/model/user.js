const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryapp_casestudy',{ useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;

const UserSchema  = new Schema({
    name:{
        type:String,
        required:true,
},
email:{
       type:String,
       required:true,
   },
address:{
    type:String,
    required:true,
},
phone:{
    type:String,
    required:true,
},
  role:{
      type:String,
      default:'user'
    
  }
});


var user = mongoose.model('userdata',UserSchema);

module.exports = user;

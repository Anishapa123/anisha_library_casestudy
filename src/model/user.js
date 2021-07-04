const mongoose=require('./connection').db
const Schema = mongoose.Schema;
// mongoose.set('useFindAndModify', false); 


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

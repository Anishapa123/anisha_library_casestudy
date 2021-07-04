const mongoose = require('mongoose');



exports.connectDB=()=>{
    mongoose.connect('mongodb://localhost:27017/library',{ useNewUrlParser: true,useUnifiedTopology: true  });
    console.log('DB CONNECTION SUCCESS')
}
exports.db=mongoose;
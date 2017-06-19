const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username:{
      type:String,
      unique:true,
      required:true
    },
    email:{
      type:String,
      unique:true,
      required:true
    },
    password:{
      type:String,
      unique:true,
      required:true
    }
});

var User = mongoose.model('User',userSchema)

module.exports = User;
var mongoose = require('mongoose');
var url = 'mongodb://localhost/ADKnote'
mongoose.connect(url);
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  findAll:(req,res)=>{
    User.find((err,data)=>{
      console.log('Found these users');
      res.send(data)
    });
  },
  create:(req,res)=>{
    let user = new User({
      username:req.body.username,
      email:req.body.email,
      password:bcrypt.hashSync(req.body.password, 10),
    })
    user.save((err,resultuser)=>{
      if(!err){
        res.send(resultuser)
      } else {
        res.send(err)
      }
    })
  },
  signin:(req,res)=>{
    User.findOne({username:req.body.username},(err,user)=>{
      if(err){
        res.send(err)
      } else {
        if(user.password==bcrypt.compareSync(req.body.password,10)){
          res.send(jwt.sign(user,'secret'))
        } else {
          res.send('password doesn\'t match')
        }
      }
    })
  },
  update:(req,res)=>{
    jwt.verify(req.headers.token,'secret',(err,decoded)=>{
      if(err){
        res.send(err)
      } else {
        User.findById(decoded.user_id,(err,user)=>{
          if(user.username==decoded.username){
            user.username=req.body.username||user.username,
            user.email=req.body.email||user.email,
            user.password=bcrypt.hashSync(req.body.password, 10)||user.password
            user.save((err,updateduser)=>{
              if(!err){
                res.send(updateduser)
              } else {
                res.send(err)
              }
            })
          } else {
            res.send('You are not authorized to update')
          }
        })
      }
    })
  },
  delete:(req,res)=>{
    User.deleteOne({_id:req.params.id},(err,result)=>{
      res.send(`Successfully deleted from collection ${result}`)
    })
  },
};
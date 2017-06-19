var mongoose = require('mongoose');
var url = 'mongodb://localhost/ADKnote'
mongoose.connect(url);
const Memo = require('../models/memo')

module.exports = {
  findAll:(req,res)=>{
    Memo.find((err,data)=>{
      console.log('Found these memos');
      res.send(data)
    });
  },
  create:(req,res)=>{
    let memo = new Memo({
      content:req.body.content,
      creator_id:jwt.verify(req.headers.title
    })
    memo.save((err,memoResult)=>{
      res.send(memoResult)
    })
  },
  update:(req,res)=>{
    Memo.findById(req.params.id,(err,memo)=>{
      memo.content=req.body.content||memo.content,
      memo.title=req.body.title||memo.title
      memo.save((err,updatedmemo)=>{
        res.send(updatedmemo)
      })
    })
  },
  delete:(req,res)=>{
    Memo.deleteOne({_id:req.params.id},(err,result)=>{
      res.send(`Successfully deleted from collection ${result}`)
    })
  }
};
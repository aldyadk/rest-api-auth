const mongoose = require('mongoose');

var memoSchema = mongoose.Schema({
    content:String,
    creator_id:String
});

var Memo = mongoose.model('Memo',memoSchema)

module.exports = Memo;
const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const books = require('./routes/memos');
const customers = require('./routes/users');

app.set('port',process.env.PORT || 3000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/memos',memos)
app.use('/users',users)


app.listen(app.get('port'),()=>{
  console.log('server udah jalan cuy!');
})
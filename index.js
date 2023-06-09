const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 
const port = process.env.PORT || 3002;
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE)

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());


//=================================
//              USERS
//=================================
app.post('/api/users/register',(req,res)=>{
   res.status(200)
});
app.get('/api/users/register',(req,res)=>{
   res.status(200)
});
app.listen(port,()=>{
    console.log(`Server Running at ${port}`)
})
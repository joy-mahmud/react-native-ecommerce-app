const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const crypto =require('crypto')
const nodemailer = require('nodemailer')
const app = express()
const port = 8000
const cors =require('cors')
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const jwt = require('jsonwebtoken')
mongoose.connect("mongodb+srv://joy-mahmud:hUQZMCywj46HszhF@cluster0.7xouwts.mongodb.net/",{
    useNewUrlParser:true, //not required for updated version of mongoose of v6.0.0
    useUnifiedTopology:true //not required for updated version of mongoose of v6.0.0

})
.then(()=>{console.log('connected to mongodb')})
.catch((error=>console.log('Error connecting to mongodb',error)))

app.listen(port,()=>{
    console.log('server is running on port ',port)
})
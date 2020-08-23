var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs')
const jwt = require('jsonwebtoken')
// var uniqid = require('uniqid');
var http = require('http').createServer(app);
var cookieParser = require('cookie-parser');
const fetch = require('node-fetch');
app.use(bodyParser.json());
app.use(express.static('./Public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
http.listen(process.env.PORT || 5000);
var mongo = require('mongodb').MongoClient;
var HttpsProxyAgent = require('https-proxy-agent');
require('dotenv').config();
var request = require('request')
var url = "mongodb://localhost:27017/profrate"
var { generateToken, sendToken } = require('./utils/token.utils');

var corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};
 app.use(cors(corsOption));

app.post('/auth/google', async (req,res,next)=>{
    console.log(req.body.access_token)
    var response = await fetch(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${req.body.access_token}`,{agent:new HttpsProxyAgent(process.env.proxy)})
    let ans = await response.json()
    console.log(ans)
    next()
    // let db = await mongo.connect(url)
    // var test = db.collection('users').findOne({id:ans.user_id})
    // if(test==null)
    // {
    //     db.collection('users').insertOne({id:ans.user_id})
    // }
    // else{
    //     //add functionality
    // }
    //insert check conditions
},generateToken,sendToken);
// app.get('/auth/google', passport.authenticate('google',{ scope: ['profile'] }), (req,res)=>{
//     console.log("gi")
// });
app.get('/go',(req, res) => {
    console.log("hellooo")

  res.redirect('http://localhost:3000');
});

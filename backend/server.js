var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs')
var uniqid = require('uniqid');
var http = require('http').createServer(app);
app.use(cors())
app.use(bodyParser.json());
app.use(express.static('./Public'));
app.use(bodyParser.urlencoded({ extended: true }));
http.listen(process.env.PORT || 5000);
var mongo = require('mongodb').MongoClient;
require('dotenv').config();



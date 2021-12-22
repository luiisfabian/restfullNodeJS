'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testDataBase');



module.exports = mongoose;
var express = require('express');
var app = express();
const router = express.Router();
const http = require('http');
const { v4: uuidv4 } = require('uuid');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
var ObjectID = require('mongodb').ObjectID;


// let usersList = [
//     { name: "luis Fabian", email: "luiisfabian967@gmai.com" },
//     { name: "Yefrid David", email: "YEfrid@gmail.com" },
//     { name: "Javier Muñoz", email: "javier@34.com" },
//     { name: "Lucia Ortiz", email: "Casa@casa.com" }
// ]

app.post('/', function(req, res) {
    let formData = req.body;
    

    mongoose.connection.connectionMongo.collection('user').insertOne(formData)
    console.log("");
});


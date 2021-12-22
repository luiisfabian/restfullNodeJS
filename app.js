var express = require('express');
var app = express();
const router = express.Router();
const http = require('http');
const { v4: uuidv4 } = require('uuid');

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

let usersList = [
    { id: "e233936e-33c1-4231-a083-00ff7a84ff31", name: "luis Fabian", email: "luiisfabian967@gmai.com" },
    { id: "75395834-5abd-11ec-bf63-0242ac130002", name: "Yefrid David", email: "YEfrid@gmail.com" },
    { id: "7c20e1da-5abd-11ec-bf63-0242ac130002", name: "Javier Muñoz", email: "javier@34.com" },
    { id: "8262e11a-5abd-11ec-bf63-0242ac130002", name: "Lucia Ortiz", email: "Casa@casa.com" }
]


// var users = [];

app.get('/', function (req, res) {
    res.json(usersList);
    // res.send("Hello World");
});

app.get('/:id', (req, res) => {
    let id = req.params.id;
    let result = {};

    // console.log(req.params);
    // result = usersList.find(function (currentItem) {
    //   return  currentItem.id === id;
    // });

    result = usersList.find(currentItem => currentItem.id == id);

    res.json(result);

})



app.post('/', function (req, res) {

    let formData = req.body;
    formData.id = uuidv4();

    // console.log(req.body);
    // res.json(formData);
    usersList.push(formData);
    console.log(usersList);
    res.json({ resp: formData });

});

app.put('/:id', function (req, res) {
    let id = req.params.id;
    let formData = { id, ...req.body };
    // formData.id = id;
    let result = {}

    let index = usersList.findIndex(currentItem => currentItem.id === id)
    usersList[index] = formData;
    res.json(formData)
    console.log(usersList);
    // usersList[result].push(formData);

})

app.delete('/:id', function (req, res) {
    let id = req.params.id;
    

    let index = usersList.findIndex(currentItem => currentItem.id  === id)
    console.log(index);
    if (index !== -1) usersList.splice(index, 1);
    console.log(usersList);
})

app.delete('/', function (req, res) {

    usersList = [];
    console.log(usersList);
})




app.listen(3000, function () {
    console.log("Listen port 3000 Node Js");
});

var express = require('express');
var app = express();
const router = express.Router();
const http = require('http');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

let usersList = [
    { id: 1, name: "luis Fabian", email: "luiisfabian967@gmai.com" },
    { id: 2, name: "Yefrid David", email: "YEfrid@gmail.com" },
    { id: 3, name: "Javier Muñoz", email: "javier@34.com" },
    { id: 4, name: "Lucia Ortiz", email: "Casa@casa.com" },
]


// var users = [];

app.get('/', function (req, res) {

    res.send("Hello World");
});

app.post('/', function (req, res) {
    res.send("this is post Method");
});

app.get('/users', function (req, res) {

    res.send("Get all users")
});

app.get('/users/:id', function (req, res) {
    let found = usersList.find((user) => {
        return user.id === parseInt(req.params.id);
    });

    if (found) {
        res.send(found)
    } else {
        res.send("no encontradp");
    }
});

app.put('/users/:id', function (req, res) {
    res.send("Updated ")
})

app.post('/users',  function (req, res) {
    res.send("imprimio");
    //  let miapp = req.bod
    response = {
        name: req.body.name,
        email: req.body.email
    };
    console.log(response);
    res.send(response);

});



app.delete('/users:id', function (req, res) {
    res.send("delete user by id")
});

app.delete('/users', function (req, res) {
    res.send("DElete all users")
});

// app.post('/users', function (req, res) {

//     console.log("gonorrea entro aqui")
//     let id = req.body.id;
//     let name = req.body.name;
//     let email = req.body.email;

//     try {
//         usersList.create({
//             id = id,
//             name = name,
//             email = email

//         });
//         res.send("Creado");
//     } catch (error) {
//         res.send("error al crear")
//     }

//     // users.push(user);

//     console.log(user);
// });



// app.post('/users', function(req, res){
//     res.send(users);
//     res.send("created Users")
// });

// app.post('/users'), function (req, res) {
//     users = {
//         "id": 1,
//         "name": "Pepito",
//         "mail": "numero1@gmail.com"
//     }

//     res.send(users)
// };





app.listen(3000, function () {
    console.log("Listen port 3000 Node Js");
});

var express = require('express');
var app = express();
const router = express.Router();
const http = require('http');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

let usersList = {
    1:{ id: 1, name: "luis Fabian", email: "luiisfabian967@gmai.com" },
    2:{ id: 2, name: "Yefrid David", email: "YEfrid@gmail.com" },
    3:{ id: 3, name: "Javier Muñoz", email: "javier@34.com" },
    4:{ id: 4, name: "Lucia Ortiz", email: "Casa@casa.com" },
}


// var users = [];

app.get('/', function (req, res) {

    res.send("Hello World");
});

app.post('/', function (req, res) {
    res.send("this is post Method");
});

app.put('/', function (req, res) {
    res.send("this is put method");
})

app.delete('/', function(req, res){
    res.send("this is delete method");
})

app.get('/users', function (req, res) {

    res.send("Get all users");

//   return  res.send(Object.values.values(usersList))
});

app.get('/users/:id', function (req, res) {

    return res.send("get one user")
//   res.send(usersList[req.params.id]);
    // let found = usersList.find((user) => {
    //     return user.id === parseInt(req.params.id);
    // });

    // if (found) {
    //     res.send(found)
    // } else {
    //     res.send("no encontradp");
    // }
});

app.post('/users/', function(req, res){
    console.log("Wur g");
    let otherUser = {
        id:5,
        name: "numero 5",
        email: "numero5@go.com"   
    }

    usersList[6] = otherUser
    return res.send(otherUser)
});

app.put('/users/:id', function (req, res) {
    console.log("Que gonorrea");
    res.send('Updated one user '+ req.params.id);
})

// app.post('/users', function (req, res) {
//     res.send("imprimio");
//     //  let miapp = req.bod
//     response = {
//         name: req.body.name,
//         email: req.body.email
//     };
//     console.log(response);
//     res.send(response);

// });



app.delete('/users/:id', function (req, res) {
    console.log("El eliminar 1");
    res.send("delete user  id" + req.params.id);
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

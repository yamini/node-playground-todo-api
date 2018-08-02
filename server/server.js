var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

//set up app
var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

// app.post('/users', (req, res) => {
//     var user = new User({
//         email: req.body.email
//     });

//     user.save().then((doc) => {
//         res.send(doc);
//     }, (e) => {
//         res.status(400).send(e);
//     });
// });

//GET all Todos

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos/123431
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    //res.send(req.params);

    //validate ID using isValid
    //Stop function, respond with 404 - send back empty value
    if (!ObjectID.isValid) {
        res.status(404).send();
    }

    //findById
        //success
            //if todo - send it back
            // if no todo - send back 404 with empty body
        //error
            //400 - send empty body back
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        //instead of just sending todo, send it as an object that has a todo property, which allows you to do other stuff with it
        res.send({todo});
    }).catch((e) => res.status(404).send());
});

app.listen(port, () => {
    console.log(`Started up on port ${port}`);
});

module.exports = {app};
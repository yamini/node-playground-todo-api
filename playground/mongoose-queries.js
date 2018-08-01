const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//todo id
// var id = '5b61da5be5a5b617441c7e9911';

//user id
var id = '5b5a7476ca3400aa650171d7';

if (!ObjectID.isValid(id)) {
    console.log('ID is not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// //to find one documemt by anything other than ID
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

//to find one documemt by ID
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));
 
//find User by ID
User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
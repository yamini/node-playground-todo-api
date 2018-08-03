const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// three methods for deleting records
// delete multiple records: Todo.remove({}. Can't pass in an empty argument)
// Todo.remove({}).then((result) =>{
//     console.log(result);
// });

//findOneAndRemove, you get back what you've removed
// Todo.findOneAndRemove({_id:'5b63b3a9b16dd5d73ec7bbf8'}).then((todo) => {
//     console.log(todo);
// });

// findByIDAndRemove, returns the doc
Todo.findByIdAndRemove('5b63b3a9b16dd5d73ec7bbf8').then((todo) => {
    console.log(todo);
});
var mongoose = require('mongoose');

//mongoose supports callbacks but not promises. Tell it what promise library to use
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

//create model
var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// create a To Do item
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

//challenge
var otherTodo = new Todo({
    text: 'Do laundry',
    completed: false,
    completedAt: 1532652885
});

// Save Todo to db
// newTodo.save().then((doc) => {
//     console.log('Saved Todo', doc);
// }, (e) => {
//     console.log('Unable to save Todo');
// });

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save Todo');
});
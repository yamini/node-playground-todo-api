var mongoose = require('mongoose');

//mongoose supports callbacks but not promises. Tell it what promise library to use
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

//create model
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// create a To Do item
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

//challenge
// var otherTodo = new Todo({
//     text: 'New todo item '
// });

// Save Todo to db
// newTodo.save().then((doc) => {
//     console.log('Saved Todo', doc);
// }, (e) => {
//     console.log('Unable to save Todo');
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save', e);
// });

//Challenge 2

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

// create instance
var newUser = new User({
    email: ' ykagal@gmail.com '
});

//save instance
newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save', e);
});
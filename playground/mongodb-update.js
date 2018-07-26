const {
    MongoClient,
    ObjectID
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    //handle potential errors first
    if (err) {
        //user return statement to prevent the success message from running
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Todoapp');

    // update completed to true
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b56592d6b57c69471a1e946')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    // challenge: change one user name in Users collection and increment the age by 1
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b565cbb6b57c69471a1ea88')
    }, {
        $set: {
            name: 'Jane'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    // client.close();
});
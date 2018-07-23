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

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });


    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    //Challenge Part 1
    //  db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
    //      console.log(result);
    //  });

    //Challenge Part 2
     db.collection('Users').findOneAndDelete({
         _id: new ObjectID(ObjectId("5b565cbb6b57c69471a1ea88"))
     }).then((result) => {
         console.log(JSON.stringify(result, undefined, 2));
     });

    // client.close();
});
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// Both lines of code above are the same, except for the addition of ObjectID

// Example of using ObjectID below
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server', err);
    };

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert todo', err);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users (name, age, location)
    // db.collection('Users').insertOne({
    //   name: 'Cameron',
    //   age: 26,
    //   location: 80017
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert user', err);
    //   };
    //
    //   console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close()
});

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

    // deleteMany
    // db.collection('Users')
    //   .deleteMany({name: "Cameron"})
    //   .then((result) => {
    //   console.log(result);
    // });

    // deleteOne
    // db.collection('Users')
    //   .deleteOne({_id: new ObjectID('59fbe459c9c3160962d9f065')})
    //   .then((result) => {
    //     console.log(result);
    //   });

    // findOneAndDelete
    db.collection('Users')
      .findOneAndDelete({age: 26})
      .then((result) => {
        console.log(result);
      });
    db.close()
});

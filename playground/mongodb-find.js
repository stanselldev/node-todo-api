const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server', err);
    };

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //   _id: new ObjectID('59fbe2855802a70959682afa')
    // })
    //   .toArray()
    //   .then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('unable to fetch todos', err);
    // });

    // db.collection('Todos').find()
    //   .count()
    //   .then((count) => {
    //   console.log(`Todos Count: ${count}`);
    // }, (err) => {
    //   console.log('unable to fetch todos', err);
    // });

    db.collection('Users')
      .find({name: 'Dwight'})
      .toArray()
      .then((users) => {
        console.log('Users:');
        console.log(JSON.stringify(users, undefined, 2));
      }, (err) => {
        console.log('Unable to fetch users', err)
      });

  //  db.close()
});

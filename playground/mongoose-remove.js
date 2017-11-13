const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.fineOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5a09b90f4c4d56d6ebe90061'});

Todo.findByIdAndRemove('5a09b90f4c4d56d6ebe90061').then((todo) => {
  console.log(todo);
});

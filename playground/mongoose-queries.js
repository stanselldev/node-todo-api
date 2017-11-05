const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// 59fe8967402203970e46b19a

var id = '59fe8967402203970e46b19a11';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   };
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

// 59fd3df32ed4d8450ba9bb29

var user = '59fd3df32ed4d8450ba9bb29';

User.findById(user).then((user) => {
  if (!user) {
    return console.log('User not found');
  };
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

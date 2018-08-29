var express = require('express');   // v4.14.0
var bodyParser = require('body-parser'); // v1.15.2

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});









// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('kesimpen', doc);
// }, (e) => {
//     console.log('gak bisa nyimpen');
// });

// var otherTodo = new Todo({
//     text: ' Edit this video '
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined,2));
// }, (e) => {
//     console.log('Unable to save',e);
// });

// // User
// // email - require it - trim it - set type - set min length of 1

// var user = new User({
//     email: 'rorokumala@gmail.com'
// });

// user.save().then((doc) => {
//     console.log('simpan', doc);
// }, (e) => {
//     console.log('gak kesimpen',e);
// });



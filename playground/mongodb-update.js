const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>
{
    if (err) {
        return console.log('gak bisa konek');
    }
    console.log('bisa konek');

    db.close();
})
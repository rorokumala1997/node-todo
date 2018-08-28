const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>
{
    if (err) {
        return console.log('gak bisa konek');
    }
    console.log('bisa konek');
    
    db.collection('Todos').find({name: 'roro kumala'}).toArray().then((docs) => 
    {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    // db.collection('Todos').find().toArray().then((docs) => 
    // {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('gak bisa', err);
    // });

    db.close();
})
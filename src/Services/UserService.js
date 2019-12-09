addUser = (db, newUser, callback ) => {
    db.collection('mario-kart-users').insertOne(newUser, (err, r) => {
        if (err)
            throw err;
        callback(r);
    });
};

var getUsers = function (db, callback) {
    var collection = db.collection('mario-kart-users');
    collection.find().toArray(function (err, documents) {
        callback(documents)
    })
};


module.exports.addUser = addUser;
addUser = (db, newUser, callback ) => {
    db.collection('mario-kart-users').insertOne(newUser, (err, r) => {
        if (err)
            throw err;
        callback(r);
    });
};

getUsers = function (db, callback) {
    db.collection('mario-kart-users').find().toArray(function (err, documents) {
        if (err)
            throw err;
        callback(documents)
    })
};

var getUserById = function (id, db, callback) {
    var collection = db.collection('mario-kart-users');
    collection.find({"_id": id }).toArray(function (id, err, documents) {
        callback(documents)
    })
};

module.exports.addUser = addUser;
module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;
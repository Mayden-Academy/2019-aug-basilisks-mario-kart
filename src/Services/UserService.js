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

var getUserById = function (id, db, callback) {
    var collection = db.collection('mario-kart-users');
    collection.find({"_id": id }).toArray(function (id, err, documents) {
        callback(documents)
    })
};

module.exports.addUser = addUser;
module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;
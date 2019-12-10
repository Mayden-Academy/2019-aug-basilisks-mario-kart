addUser = (db, newUser, callback ) => {
    db.collection('mario-kart-users').insertOne(newUser, (err, r) => {
        if (err)
            throw err;
        callback(r);
    });
};

getUsers = function (db, callback) {
    db.collection('mario-kart-users').find().toArray(function (err, documents) {
        callback(documents)
    })
};


module.exports.addUser = addUser;
module.exports.getUsers = getUsers;
addUser = (db, newUser, callback) => {
    db.collection('mario-kart-users').insertOne(newUser, (err, result) => {
        if (err)
            throw err;
        callback(result);

    });
};

getUsers = (db, callback) => {
    db.collection('mario-kart-users').find().toArray((err, documents) => {
        if (err)
            throw err;
        callback(documents)
    })
};

getUserById = (db, id, callback) => {
    db.collection("mario-kart-users").findOne({"_id": id}, (err, documents) => {
        if (err)
            throw err;
        callback(documents);
    })
};

module.exports.addUser = addUser;
module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;
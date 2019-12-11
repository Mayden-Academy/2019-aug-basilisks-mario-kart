addUser = (db, newUser, callback ) => {
    db.collection('mario-kart-users').insertOne(newUser, (result) => {
        callback(result);

    });
};

addTrack = (db, trackResults, callback ) => {
    db.collection('mario-kart-tracks').insertOne(trackResults, (result) => {
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
        console.log(documents)
    })
};

module.exports.addUser = addUser;
module.exports.addTrack = addTrack;
module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;

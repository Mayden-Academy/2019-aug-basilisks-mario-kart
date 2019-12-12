/**
 * Adds a new user to the db collection 'mario-kart-users'
 *
 * @param db database connection
 *
 * @param newUser object container new user data
 *
 * @param callback function
 *
 */
addUser = (db, newUser, callback) => {
    db.collection('mario-kart-users').insertOne(newUser, (err, result) => {
        if (err)
            throw err;
        callback(result);
    });
};


addRaceResult = (db, name, trackResults, callback) => {
    db.collection('mario-kart-users').find({"name": name}).toArray((err, docs) => {
        if (docs.length === 1) {
            let user = docs[0];
            user.tracks[trackResults.trackName].push(trackResults.finishPosition);
            db.collection('mario-kart-users').updateOne({"name": name}, {$set: user}, (err, result) => {
                if (err)
                    throw err;
                callback(result);
            });

        }
    })


};

/**
 * Gets all users from db collection 'mario-kart-users'
 *
 * @param db database connection
 *
 * @param callback function
 *
 */
getUsers = (db, callback) => {
    db.collection('mario-kart-users').find().toArray((err, documents) => {
        if (err)
            throw err;
        callback(documents)
    })
};

/**
 * Gets a single user from db collection 'mario-kart-users'
 *
 * @param db database connection
 *
 * @param id  mongodb ObjectId of user
 *
 * @param callback function
 *
 */
getUserById = (db, id, callback) => {
    db.collection("mario-kart-users").findOne({"_id": id}, (err, documents) => {
        if (err)
            throw err;
        callback(documents);
    })
};

module.exports.addUser = addUser;
module.exports.addRaceResult = addRaceResult;
module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;

addUser = (db, newUser, callback ) => {
    db.collection('mario-kart-users').insertOne(newUser, (result) => {
        callback(result);
    });
};

module.exports.addUser = addUser;
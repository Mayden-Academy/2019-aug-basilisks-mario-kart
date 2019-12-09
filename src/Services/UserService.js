addUser = (db, newUser, callback ) => {
    db.collection('mario-kart-users').insertOne(newUser, (err, r) => {
        if (err)
            throw err;
        callback(r);
    });
};

module.exports.addUser = addUser;
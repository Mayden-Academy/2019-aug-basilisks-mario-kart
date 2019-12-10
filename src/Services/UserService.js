addUser = (db, newUser, callback ) => {
    db.collection('mario-kart-users').insertOne(newUser, (result) => {
        callback(result);
    });
};
  getTrackResults = (db, callback) => {
    db.collection('mario-kart-users').collection.find(trackName).toArray(function (err, documents) {
        callback(results)
    })
}

module.exports.addUser = addUser;
module.exports.getTrackResults = getTrackResults;
getTrackResults = (db, trackName, callback ) => {
    db.collection('mario-kart-users').find({}, {trackName : {$exists: {track : trackName}}}).toArray((err, documents) => {
        if (err)
            throw err;
        callback(documents)
    })
};

module.exports.getTrackResults = getTrackResults;
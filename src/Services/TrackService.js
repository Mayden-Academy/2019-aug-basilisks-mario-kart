/**
 * Gets all results for a track from db collection 'mario-kart-users'
 *
 * @param db database connection
 *
 * @param trackName name of track to get results for
 *
 * @param callback function
 *
 */
getTrackResults = (db, trackName, callback ) => {
    db.collection('mario-kart-users').find({}, {trackName : {$exists: {track : trackName}}}).toArray((err, documents) => {
        if (err)
            throw err;
        callback(documents)
    })
};

module.exports.getTrackResults = getTrackResults;
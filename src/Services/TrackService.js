getTrackResults = (db, trackName, callback ) => {
    let collection = db.collection('mario-kart-users')
    collection.find({tracks: {$exists: trackName}}).toArray(function  (err, documents) {
        callback(documents)
    })
}

module.exports.getTrackResults = getTrackResults;
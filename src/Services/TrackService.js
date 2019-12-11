getTrackResults = (db, trackName, callback ) => {

    let collection = db.collection('mario-kart-tracks')
    collection.find({trackname: trackName}).toArray(function  (err, documents) {
        callback(documents)
    })
}

module.exports.getTrackResults = getTrackResults;
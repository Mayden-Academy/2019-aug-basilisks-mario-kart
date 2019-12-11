const TrackService = require('../Services/TrackService');
const DbService = require('../Services/DbService');
const validation = require ('../validation');


function getTrackResults(req, res) {
    let trackName = req.params.name
    console.log(trackName)
    DbService.connectToDB(function (db){
        TrackService.getTrackResults(db, trackName, function (results) {
            res.json(results)
        })
    })
}

module.exports.getTrackResults = getTrackResults;
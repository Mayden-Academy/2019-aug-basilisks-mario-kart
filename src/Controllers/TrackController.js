const TrackService = require('../Services/TrackService');
const DbService = require('../Services/DbService');
const validation = require('../Services/ValidationService');
const averageFinishPositionService = require('../Services/AverageFinishPositionService');


function getTrackResults(req, res) {
    let trackName = req.params.name
    DbService.connectToDB(function (db){
        TrackService.getTrackResults(db, trackName, function (results) {
            let thing = averageFinishPositionService.averageFinishPosition(results, trackName)
            res.json(thing)
        })
    })
}

module.exports.getTrackResults = getTrackResults;
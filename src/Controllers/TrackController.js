const TrackService = require('../Services/TrackService');
const DbService = require('../Services/DbService');
const validation = require('../Services/validationService');
const averageFinishPositionService = require('../Services/AverageFinishPositionService');

/**
 * Uses HTTP request and response to get mode results for a specific track returns with json success or failure messages
 *
 * @param req HTTP request
 *
 * @param res HTTP response
 *
 * @return json response with requested track data or error message
 *
 */
function getTrackResults(req, res) {
    let trackName = req.params.track;
    trackName = validation.validateTrack(trackName);
    if (trackName) {
        DbService.connectToDB((db) => {
            TrackService.getTrackResults(db, trackName, (documents) => {
                let results = averageFinishPositionService.averageFinishPosition(documents, trackName);
                res.json(results)
            })
        })
    } else {
        res.json({
            msg: 'Could not get results. Please ensure the track is valid. Check API docs for track list',
        })
    }
}


module.exports.getTrackResults = getTrackResults;
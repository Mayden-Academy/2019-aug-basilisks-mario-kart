function averageFinishPosition(results, trackName) {
    let userNumber = results.length;
    let trackResults = [trackName];
    for (let i = 0; i < userNumber; i++) {
        let userTrackResult = [results[i].name];
        let resultArr = results[i].tracks[trackName];
        let finalMode = mode(resultArr)[0];
        userTrackResult.push(finalMode);
        trackResults.push(userTrackResult)
        }
return trackResults;
}

/**
 * Takes an array of numbers and returns the mode or modes if multiple.
 *
 * @param numbers array of numbers
 *
 * @return array containing modes or modes
 *
 */
function mode(numbers) {
    let modes = [],
        count = [],
        i,
        number,
        maxIndex = 0;
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count) if (count.hasOwnProperty(i)) {
        if (count[i] === maxIndex) {
            modes.push(Number(i));
        }
    }
    return modes;
}

module.exports.averageFinishPosition = averageFinishPosition;
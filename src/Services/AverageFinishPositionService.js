function averageFinishPosition(results, trackName) {
    console.log(results)
    let allTimeResults = []
    results.foreach((result)=>{
        arr.push(calculatePositions(result, allTimeResults, trackName))
    })
    return allTimeResults
}

function calculatePositions(result, allTimeResults, trackName) {
    console.log(result)
    return result
    result.track.trackName
    // if (allTimeResults.includes(result.username)){
    //     allTimeResults[this.username[]].push(this.position)
    // } if (!allTimeResults.includes(this.username)){
    //     allTimeResults.push([this.username,[this.position]])
    // }
    // return allTimeResults
}

module.exports.averageFinishPosition = averageFinishPosition;
module.exports.calculatePositions = calculatePositions;
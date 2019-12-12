characterArray = ['Baby Mario', 'Baby Peach', 'Toad',
    'Koopa Troopa', 'Mario', 'Luigi', 'Peach',
    'Yoshi', 'Wario', 'Waluigi', 'Donkey Kong',
    'Bowser', 'Baby Daisy', 'Baby Luigi', 'Birdo',
    'Bowser Junior', 'Daisy', 'Diddy Kong', 'Dry Bones',
    'Dry Bowser', 'Funky King', 'King Boo',
    'Mii', 'Rosalina', 'Toadette'
];


trackArray = ['luigiCircuit', 'mooMooMeadows', 'mushroomGorge', 'toadsFactory',
    'marioCircuit', 'coconutMall', 'dkPass', 'wariosGoldMine', 'daisyCircuit',
    'koopaCape', 'mapleTreeway', 'grumbleVolcano', 'dryDryRuins', 'moonviewHighway',
    'bowsersCastle', 'rainbowRoad', 'peachBeach', 'yoshiFalls', 'ghostValley2',
    'marioRaceway', 'sherbetLand', 'shyGuyBeach', 'delfinoSquare', 'waluigiStadium',
    'desertHills', 'bowserCastle3', 'dksJungleParkway', 'marioCircuit',
    'marioCircuit3', 'peachGardens', 'dkMountain', 'bowsersCastle'];

positionArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];


/**
 * Takes a string and removes any character that is not a letter
 *
 * @param str string of characters
 *
 * @return string string with only lowercase and uppercase letters a-z
 *
 */

function htmlEntities(str) {
    return String(str).replace(/[^a-zA-Z ]/g, '');
}

/**
 * Takes a string and removes any character that is not a letter or number
 *
 * @param str string of characters
 *
 * @return string string with only numbers and lowercase and uppercase letters
 *
 */
function htmlEntitiesNum(str) {
    return String(str).replace(/[^a-zA-Z0-9 ]/g, '');
}


function validateTracksData(req) {
    let track = htmlEntitiesNum(req.body.trackName);
    let position = req.body.finishPosition;
    if (trackArray.includes(track) && positionArray.includes(position)) {
        return {
            trackName: track,
            finishPosition: position
        }
    }
}


/**
 * Takes a http request and validates and sanitises data from body. Returns validated object of user data
 *
 * @param req HTTP Request
 *
 * @return object of validated user data
 *
 */

function validateUserData(req) {

    let usersName = htmlEntities(req.body.name);
    let character = htmlEntities(req.body.favRacer);
    let userCohort = htmlEntities(req.body.cohort);
    if (characterArray.includes(character)) {
        return {
            name: usersName,
            favRacer: character,
            cohort: userCohort,
            results: {}
        }
    }
}

module.exports.validateUserData = validateUserData;
module.exports.validateTracksData = validateTracksData;
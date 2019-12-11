
characterArray = ['Baby Mario', 'Baby Peach', 'Toad',
    'Koopa Troopa', 'Mario', 'Luigi', 'Peach',
    'Yoshi', 'Wario', 'Waluigi', 'Donkey Kong',
    'Bowser', 'Baby Daisy', 'Baby Luigi', 'Birdo',
    'Bowser Junior', 'Daisy', 'Diddy Kong', 'Dry Bones',
    'Dry Bowser', 'Funky King', 'King Boo',
    'Mii', 'Rosalina', 'Toadette'
];

trackArray = ['Luigi Circuit', 'Moo Moo Meadows', 'Mushroom Gorge', 'Toad\'s Factory',
    'Mario Circuit', 'Coconut Mall', 'DK Pass', 'Wario\'s Gold Mine', 'Daisy Circuit',
    'Koopa Cape', 'Maple Treeway', 'Grumble Volcano', 'Dry Dry Ruins', 'Moonview Highway',
    'Bowser\'s Castle', 'Rainbow Road', 'GCN Peach Beach', 'DS Yoshi Falls', 'SNES Ghost Valley 2',
    'N64 Mario Raceway', 'N64 Sherbet Land', 'GBA Shy Guy Beacht', 'DS Delfino Square', 'GCN Waluigi Stadium',
    'DS Desert Hills', 'GBA Bowser Castle 3', 'N64 DK\'s Jungle Parkway', 'GCN Mario Circuit',
    'SNES Mario Circuit 3', 'DS Peach Gardens', 'GCN DK Mountain', 'N64 Bowser\'s Castle']

positionArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function htmlEntities(str) {
    return String(str).replace(/[^a-zA-Z ]/g, '');
}

function validateTracksData (req) {
    let track = htmlEntities(req.body.trackName);
    let usersName = htmlEntities(req.body.name);
    let position = htmlEntities(req.body.finishPosition);
    if (trackArray.includes(track) && positionArray.includes(position)) {
        return {
            trackName: track, results: [
                {
                    name: usersName,
                    finishPosition: position
                }]
        }
    }
}

function validateUserData (req) {
    let usersName = htmlEntities(req.body.name);
    let character = htmlEntities(req.body.favRacer);
    let userCohort = htmlEntities(req.body.cohort);
    if (characterArray.includes(character)){
        return {name: usersName,
        favRacer: character,
        cohort: userCohort}
    }
}

module.exports.validateUserData = validateUserData;
module.exports.validateTracksData = validateTracksData;
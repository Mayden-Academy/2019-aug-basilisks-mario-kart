
charcterArray = ['Baby Mario', 'Baby Peach', 'Toad',
    'Koopa Troopa', 'Mario', 'Luigi', 'Peach',
    'Yoshi', 'Wario', 'Waluigi', 'Donkey Kong',
    'Bowser', 'Baby Daisy', 'Baby Luigi', 'Birdo',
    'Bowser Junior', 'Daisy', 'Diddy Kong', 'Dry Bones',
    'Dry Bowser', 'Funky King', 'King Boo',
    'Mii', 'Rosalina', 'Toadette'
];

function htmlEntities(str) {
    return String(str).replace(/&/g, '').replace(/</g, '').replace(/>/g, '').replace(/"/g, '').replace(/[0-9]/gm, '' );
}

function validateUserData (req) {
    let usersName = htmlEntities(req.body.name);
    let character = htmlEntities(req.body.favRacer);
    let userCohort = htmlEntities(req.body.cohort);
    if (charcterArray.includes(character)){
        return {name: usersName,
        favRacer: character,
        cohort: userCohort}
    }
}

module.exports.validateUserData = validateUserData;
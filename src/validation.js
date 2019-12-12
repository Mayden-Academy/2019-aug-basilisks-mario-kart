charcterArray = ['Baby Mario', 'Baby Peach', 'Toad',
    'Koopa Troopa', 'Mario', 'Luigi', 'Peach',
    'Yoshi', 'Wario', 'Waluigi', 'Donkey Kong',
    'Bowser', 'Baby Daisy', 'Baby Luigi', 'Birdo',
    'Bowser Junior', 'Daisy', 'Diddy Kong', 'Dry Bones',
    'Dry Bowser', 'Funky King', 'King Boo',
    'Mii', 'Rosalina', 'Toadette'
];

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
 * Takes a http request and validates and sanitises data from body. Returns validated object of user data
 *
 * @param req HTTP Request
 *
 * @return object of validated user data
 *
 */
function validateUserData (req) {

    let usersName = htmlEntities(req.body.name);
    let character = htmlEntities(req.body.favRacer);
    let userCohort = htmlEntities(req.body.cohort);
    if (charcterArray.includes(character)) {
        return {
            name: usersName,
            favRacer: character,
            cohort: userCohort
        }
    }
}

module.exports.validateUserData = validateUserData;
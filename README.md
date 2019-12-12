# 2019-aug-basilisks-mario-kart

MarioKart API is an API for storing Mario Kart results and then making predictions on race outcomes based on stored data.

## Installation

Ensure you have dependencies installed

```bash
$ npm install node
```

Then run
```
$ node index.js
```

## Usage


* The following characters are available, listed in the API as follows:
```
charcterArray = ['babyMario', 'babyPeach', 'toad',
    'koopaTroopa', 'mario', 'luigi', 'peach',
    'yoshi', 'wario', 'waluigi', 'donkeyKong',
    'bowser', 'babyDaisy', 'babyLuigi', 'birdo',
    'bowserJunior', 'daisy', 'diddyKong', 'dryBones',
    'dryBowser', 'funkyKing', 'kingBoo',
    'mii', 'rosalina', 'toadette'
];
```

* The following tracks are available, listed in the API as follows:
```
trackArray = ['luigiCircuit', 'mooMooMeadows', 'mushroomGorge', 'toadsFactory',
    'marioCircuit', 'coconutMall', 'dkPass', 'wariosGoldMine', 'daisyCircuit',
    'koopaCape', 'mapleTreeway', 'grumbleVolcano', 'dryDryRuins', 'moonviewHighway',
    'bowsersCastle', 'rainbowRoad', 'peachBeach', 'yoshiFalls', 'ghostValley2',
    'marioRaceway', 'sherbetLand', 'shyGuyBeach', 'delfinoSquare', 'waluigiStadium',
    'desertHills', 'bowserCastle3', 'dksJungleParkway', 'marioCircuit',
    'marioCircuit3', 'peachGardens', 'dkMountain', 'bowsersCastle'
];
```

GET

Get all users
```
api/user
```

Get all data associated with a specific user
```
api/user/:id
```

Get specific track data
```
api/track/:track
```

Get only the results associated with a specific user
```
api/results/:user
```

POST

Create a new user
```
api/user
```

PUT

Add race results for a specific track
```
api/user/:id
```
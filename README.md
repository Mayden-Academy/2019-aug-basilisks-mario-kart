# 2019-aug-basilisks-mario-kart

MarioKart API is an API for storing Mario Kart results and then making predictions on race outcomes based on stored data.

## Installation

Ensure you have node.js installed

```bash
$ npm install node
```

If you do not have it already, install nodemon

```bash
$ npm install -g nodemon
```

Then run
```
$ node index.js
```

## Usage

GET

Get all user data
```
API/user
```

Get specific track data
```
API/track/{id}
```

POST

Create a new user
```
API/user
```

Add race results for a specific track
```
API/track/{id}
```
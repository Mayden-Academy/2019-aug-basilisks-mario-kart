

const collection = db.collection('users');

function addUser(db, ) {
        db((db) => {
            collection.insertOne(, (err, r) => {
                if (err)
                    throw err;
                console.log('Creating new user');
                res.json(req.body)
            })
        })
    })
}


module.exports = UserService;
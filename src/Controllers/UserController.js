const UserModel = require('../Services/UserService');

class UserController
{
    constructor (UserModel) {
        this.UserModel = UserModel;
    }

    sendDataToDb (req, res, args) {
        this.UserModel.createNewUser();
        return res.json(req.body)
    }
}

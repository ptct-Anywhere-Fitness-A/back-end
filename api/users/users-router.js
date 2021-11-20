const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//importing functions from the users-model
const Users = require('./users-model');
const usernameExists = require('./middleware/usernameExists');
const uniqueUsername = require('./middleware/uniqueUsername');
const checkLogin = require('./middleware/checkLogin');

const secret = process.env.SECRET || "aklsjfsolidflkajddeoalkdjfdgratciaskfdj"

function makeToken(user){
    const payload = {
      subject:user.id,
      username:user.username
    }
    const options = {
      expiresIn: "1d"
    }
    return jwt.sign(payload, secret, options)
}

router.post('/register', uniqueUsername, checkLogin, async (req,res) => {
    try {
        const {username, password, role} = req.body
        const newUser = await Users.addUser({
            username,
            password: bcrypt.hashSync(password, 8),
            role,
        })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


module.exports = router;

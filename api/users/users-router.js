const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//importing functions from the users-model
const Users = require('./users-model');
const usernameExists = require('./middleware/usernameExists');
const uniqueUsername = require('./middleware/uniqueUsername');
const checkLogin = require('./middleware/checkLogin');

const secret = process.env.SECRET || "aklsjfsolidflkajddeoalkdjfdgratciaskfdj"



module.exports = router;

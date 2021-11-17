const router = require('express').Router();
const Users = require('./users-model');

router.get("/", (req, res) => {
    res.json({
        message: "Users router is running"
    });
});

module.exports = router;

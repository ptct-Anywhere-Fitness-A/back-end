const express = require('express');
const router = express.Router();



router.get("/", (req, res) => {
    res.json({
        message: "Users router is running"
    });
});

module.exports = router;

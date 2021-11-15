const express = require("express");
const {getAllClasses} = require("./classes-model");
const router = express.Router();


router.get("/", async (req, res) => {

    try{
        const classes = await getAllClasses();
        res.json(classes) 
    } catch(err){
      res.status(500).json({
          error: err,
          message: "server error"
      })
    } 

});

module.exports = router;

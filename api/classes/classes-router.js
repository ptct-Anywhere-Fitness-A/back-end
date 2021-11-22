const express = require('express');
const Classes = require('./classes-model');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try{
        return res.status(200).json(await Classes.getClasses());
    } catch(error){
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const getClass = await Classes.getClassById(req.params.id);
        if(!getClass){
            return res.status(400).json({
                message: "invalid id"
            })
        }

        return res.status(200).json(getClass);
        
    } catch(error){
        next(error)
    }
})

router.put('/:id', async (req, res, next) => {
    try{
       const updateClass = await Classes.updateClass(req.body, req.params.id);
       if(!updateClass){
           return res.status(400).json({
               message: "invalid id"
           })
       }
       return res.status(200).json(updateClass);
    } catch(error){
        next(error);
    }
})

router.delete('/:id', (req, res) =>{
  
    Classes.removeClass(req.params.id)
          .then (()=>{
            res.status(204).json({
                message: "the class has been deleted"
            }) 
          })
          .catch((error)=>{
            res.status(500).json({
                message: error.message
            })  
          })        

}) 

router.post('/', async (req, res, next) => {
    try{
        const newClass = await Classes.addClass(req.body);
        if(!newClass.class_name){
            return res.status(400).json({
                message: "name of the class is required"
            })
        }
        return res.status(201).json(newClass)
    } catch(error){
        next(error)
    }
})

module.exports = router;

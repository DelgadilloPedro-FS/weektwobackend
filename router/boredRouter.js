const express = require("express");
const {boredServiceByKey } = require("../services/boredServices");
const boredRouter = express.Router();



boredRouter.get('/:key', (req, res, next)=>{
    console.log(req.params.key)
    boredServiceByKey(req.params.key).then(result =>{
        res.status(200).json(result.data);
    }).catch(error =>{
        res.status(500).json({error:{
            message: error.message,
        }})
    })
})

module.exports = boredRouter;
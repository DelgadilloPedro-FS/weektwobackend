const express = require("express");
const { catService, catServiceByLimit } = require("../services/catServices");
const catRouter = express.Router();

catRouter.get("/", (req, res, next) => {
    catService().then(result =>{
        res.status(200).json(result.data.data);
    }).catch(error=>{
        res.status(500).json({
            error:{
                message:error.message,
            }
        })
    })
});

catRouter.get('/limit', (req, res, next)=>{
    catServiceByLimit(req.params.limit).then(result =>{
        res.status(200).json(result.data.data);
    }).catch(error =>{
        res.status(500).json({error:{
            message: error.message,
        }})
    })
})

module.exports = catRouter;
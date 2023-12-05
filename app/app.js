const express = require("express");
const catRouter = require("../router/catsRouter");
const boredRouter = require("../router/boredRouter");
const app = express();

//http://localhost:3000
app.get("/", (req, res, next) => {
    res.status(200).json({ message: "Cat/bored service is up" });
  });


//middleware
//router for cat api
app.use('/facts', catRouter);

//router for bored api
app.use('/bored', boredRouter);


module.exports = app;
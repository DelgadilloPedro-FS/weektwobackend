const express = require("express");
const catRouter = require("../router/catsRouter");
const app = express();

//http://localhost:3000
app.get("/", (req, res, next) => {
    res.status(200).json({ message: "Cat service is up" });
  });

//router middleware
app.use('/facts', catRouter);


module.exports = app;
const axios = require("axios");
require("dotenv").config();


const boredServiceByKey = async (key) => {
    console.log("REAL get by id return 1 query");
    return await axios.get(`${process.env.boredKEYURL}${key}`);
  };

module.exports = { boredServiceByKey };

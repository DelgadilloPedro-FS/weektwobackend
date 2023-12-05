const axios = require("axios");
require("dotenv").config();

const catService = async () => {
  console.log("Get all Cats facts");
  return await axios.get(`${process.env.catsURL}`);
};

module.exports = { catService };

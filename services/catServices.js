const axios = require("axios");
require("dotenv").config();

const catService = async () => {
  console.log("Cat URL");
  return await axios.get(`${process.env.catsURL}`);
};
const catServiceByLimit = async (limit) => {
  console.log("return 1 query");
  return await axios.get(`${process.env.catsURL}?limit=1`);
};

module.exports = { catService, catServiceByLimit };

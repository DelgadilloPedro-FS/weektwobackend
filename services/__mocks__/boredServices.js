const axios = require("axios");
require("dotenv").config();


const boredServiceByKey = async (key) => {
    console.log("MOCKED get by id return 1 query");
    return Promise.resolve({
      data:
      {
          "activity": "Learn a new programming language",
          "type": "education",
          "participants": 1,
          "price": 0.1,
          "link": "",
          "key": "5881028",
          "accessibility": 0.25
        }
    });
  };

module.exports = { boredServiceByKey };


// {
//   "activity": "Learn a new programming language",
//   "type": "education",
//   "participants": 1,
//   "price": 0.1,
//   "link": "",
//   "key": "5881028",
//   "accessibility": 0.25
// }
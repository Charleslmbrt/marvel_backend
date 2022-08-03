const express = require("express");
const router = express.Router();
const axios = require("axios");

// https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=NCqzvMmiLmspGMuB

router.get("/comics", (req, res) => {
  try {
    axios
      .get(
        "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=process.env.API_KEY"
      )
      .then((response) => {
        const comicsTab = response.data.results;
        console.log(comicsTab);
      });
    res.json("hello");
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;

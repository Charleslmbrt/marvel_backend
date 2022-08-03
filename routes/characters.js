const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    await axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
      )
      .then((response) => {
        const charactersTab = response.data.results;
        res.json(charactersTab);
      });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;

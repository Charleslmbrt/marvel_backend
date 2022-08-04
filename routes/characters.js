const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${req.params.name}`
    );
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;

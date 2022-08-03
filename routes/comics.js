const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    await axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`
      )
      .then((response) => {
        const comicsTab = response.data.results;
        // for (let i = 0; i < comicsTab.length; i++) {
        //   // je boucle sur mon tableau et j'affiche la clef name de chaque objet.

        //   console.log(comicsTab[i].title);
        // }
        res.json(comicsTab);
      });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
// const mongoose = require("mongoose");

// création serveur
const app = express();

app.use(express.json());
app.use(cors());

// //imports de nos routes
// const comicsRoutes = require("./routes/comics");
// const characterRoutes = require("./routes/characters");
// app.use(comicsRoutes);
// app.use(characterRoutes);

app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ error: error.message });
});

app.listen(process.env.PORT, () => {
  console.log("Server has started ✌️");
});

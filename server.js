require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");

// création serveur
const app = express();

app.use(express.json());
app.use(cors());

//imports de nos routes
const comicsRoutes = require("./routes/comics");
const characterRoutes = require("./routes/characters");
app.use(comicsRoutes);
app.use(characterRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ error: error.message });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server has started ✌️");
});

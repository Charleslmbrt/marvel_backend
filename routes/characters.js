const express = require("express");
const router = express.Router();

router.get("/character", (req, res) => {
  try {
    res.json("Hello");
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;

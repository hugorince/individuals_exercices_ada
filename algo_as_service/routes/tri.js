const express = require("express");
const router = express.Router();

router.post("/tri", async (req, res) => {
  try {
    const { array } = req.body;
    const newArray = array.sort((a, b) => a - b);
    res.json(newArray);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;

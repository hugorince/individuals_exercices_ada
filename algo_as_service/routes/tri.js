const express = require("express");
const router = express.Router();

router.post("/tri", async (req, res) => {
  try {
    const { array, order } = req.body;
    order === "asc"
      ? res.json(array.sort((a, b) => a - b))
      : order === "desc"
      ? res.json(array.sort((a, b) => b - a))
      : null;
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;

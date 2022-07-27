const express = require("express");
const router = express.Router();
const pdfBookModel = require("../models/pdfbook");

router.get("/11", async (req, res) => {
  const result = await pdfBookModel.find({});
  res.send(result);
});

module.exports = router;

const express = require("express");

const router = express.Router();

router.use(express.json());

// this router handles urls that begin /products
router.get("/", (req, res) => {
  res.send("get to /products/");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`get to /products/${id}`);
});

module.exports = router;

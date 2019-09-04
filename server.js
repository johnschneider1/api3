const express = require("express");

const server = express();
server.use(express.json());
// const productsRouter = require(/..)
// const suppliersRouter = require

// global midddleware goes here

// server.use();

// route handlers

// Sanity test for Mr. Hernandez
server.get("/", (req, res) => {
  res.status(200).json({ api: "up...up and away" });
});

// server.get('/products', (req, res) => {})
// server.get('/clients', (req, res) => {})
// server.get('/suppliers', (req, res) => {})

module.exports = server;

const express = require("express");
const fruitsRouter = express.Router()
const fruitsController = require("../controller/fruitsController.js")

fruitsRouter.get("/", fruitsController.showAllFruits);

module.exports = fruitsRouter
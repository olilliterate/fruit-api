const express = require("express");
const fruitsRouter = express.Router()
const fruitsController = require("../controller/fruitsController.js")

fruitsRouter.get("/", fruitsController.showAllFruits);
fruitsRouter.get("/:name", fruitsController.showFruit);

module.exports = fruitsRouter
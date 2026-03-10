// The model is responsible for building the http response.
// The response include the status code, HTTP protocol version, headers and main


const FruitsModel = require("../model/FruitModel.js");

const showAllFruits = async (req, res) => {
    try{
        const fruits = await FruitsModel.showAllFruits();
        res.status(200).send(fruits);
    } catch(err) {
        res.status(500).send({error: err});
    }
}

const showFruit = async (req, res) => {
    const name = req.params.name.toLowerCase();
    try{
        const fruits = await FruitsModel.showFruit(name);
        res.status(200).send(fruits);
    } catch (err) {
        res.status(404).send({error: err});
    }
}

module.exports = {showAllFruits, showFruit};
// The model is responsible for building the http response.
// The response include the status code, HTTP protocol version, headers and main


const FruitsModel = require("../model/FruitModel.js");

const showAllFruits = async (req, res) => {
    try{
        const fruits = await FruitsModel.showAllFruits();
        res.status(200).send(fruits);
    } catch(e) {
        res.status(500).send({error: e});
    }
}

module.exports = {showAllFruits};
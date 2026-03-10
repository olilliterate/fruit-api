const fruitsArray = require("../fruits.json");

class FruitsModel {
    constructor(fruit) {
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions
    }
    static showAllFruits(){
        return fruitsArray.map(f => new FruitsModel(f));
    }
}

module.exports = FruitsModel
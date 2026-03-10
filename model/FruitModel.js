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
    static showAllFruits() {
        return fruitsArray.map(f => new FruitsModel(f));
    }
    static showFruit(name) {
        const fruits =  fruitsArray.filter((ele) => ele.name.toLowerCase().startsWith(name.toLowerCase()));
        if(fruits.length > 0) {
            return fruits.map(f => new FruitsModel(f));
        }
        else{
            throw "No fruits found with that name"
        }
    }
    
}

module.exports = FruitsModel
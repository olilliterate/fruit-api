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
    static create(data) {
        const newFruit = data;

        console.log(newFruit); //for debugging purposes

        newFruit["id"] = fruitsArray.length + 1;
        
        fruitsArray.push(newFruit)

        return new FruitsModel(newFruit);
    }

    update(data) {
        const updatedFruit = fruitsArray.find(f => f.name.toLowerCase() === this.name.toLowerCase());
        console.log(updatedFruit);
        if(updatedFruit) {
            updatedFruit.name = data.name
            return (updatedFruit);
        } else{
            throw "Fruit not found"
        }
    }

    delete() {
        const deletedFruitIndex = fruitsArray.findIndex(f => f.name.toLowerCase() === this.name.toLowerCase());
        console.log(deletedFruitIndex)
        if(deletedFruitIndex != -1) {
            fruitsArray.splice(deletedFruitIndex, 1);
            return fruitsArray;
        } else{
            throw "Fruit not found"
        }
    }

}

module.exports = FruitsModel
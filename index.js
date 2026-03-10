//this is the entry point to our application

const app = require('./app');
const port = 3000;

app.listen(port, () => {
    console.log(`Fruit API listening on port ${port}`);
})
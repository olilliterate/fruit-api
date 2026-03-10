//this is the entry point to our application
require('dotenv').config()
const port = process.env.PORT;
const app = require('./app');

app.listen(port, () => {
    console.log(`Fruit API listening on port ${port}`);
})
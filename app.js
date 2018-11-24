//Dependencies
const express = require('express')
const mongojs = require('mongojs');

//intialize express
const app = express();


const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/strain/:name', (req, res) => {
    //this route will query database based on user result and return a json object back
})

app.listen(port, () => console.log(`listening on port ${port}`));
//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');

//intialize express
const app = express();


const port = process.env.PORT || 3000;



app.use(bodyParser.json());

// app.use(bodyParser.json({
//     type: ''
// }));

app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(express.static(__dirname + '/public'));

const databaseUrl = "mongodb://localhost/cannabissearch";
const collections = ['strains2'];

let db = mongojs(databaseUrl, collections);

db.on('error', (err) => {
    console.log("Database Error:", error);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/strain/:name', (req, res) => {
    //this route will query database based on user result and return a json object back

    db.strains2.find({
        name: req.params.weedstrain,
    }, (err, found) => {
        if (err) {
            console.log(err)
        } else {
            console.log(found)
            res.json(found);
        }
    });
});



app.listen(port, () => console.log(`listening on port ${port}`));
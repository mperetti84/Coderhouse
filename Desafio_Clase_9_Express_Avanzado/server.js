const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const Arreglo = require('./class_arreglo').Arreglo;

let memoria = [];

let id = 0;

let arreglo = new Arreglo(memoria,0);


app.use(bodyParser.json());

app.get('/api/productos/listar', (req, res, next) => {

    let response = JSON.stringify(arreglo.getAll());

    console.log("entro en listar");
    
    res.send(response);

});

app.get('/api/productos/listar/:productId', (req, res, next) => {

    let arrIndex = req.params.productId;

    let foundProd = arreglo.getById(Number(arrIndex));

    let response = JSON.stringify(foundProd);

    console.log("entro en listar id");

    res.send(response);
    
});

app.post('/api/productos/guardar', (req, res, next) => {
    
    let { title, price, thumbnail} = req.body;

    let newProd = {title, price, thumbnail};

    let addedProd = arreglo.save(newProd, id++);

    console.log("entro en guardar");

    res.send(JSON.stringify(addedProd));

});

app.listen(3000, () => {

    console.log("Server is up");

});
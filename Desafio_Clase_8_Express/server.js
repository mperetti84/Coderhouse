const { constants } = require("buffer");
const express = require ("express");
const fs = require ("fs");

const app = express();

let fileContent = fs.readFileSync("./productos.txt", "utf-8");

let contentArray = JSON.parse(fileContent);

let countRuta1 = 0;
let countRuta2 = 0;

app.get("/items", async (req, res, next) => {

        let responseObj = {
            items: contentArray,
            cantidad: contentArray.length 
        }

        countRuta1++;

        res.send(JSON.stringify(responseObj));

});

app.get("/item-random", async (req, res, next) => {

        let randomIndex = Math.round(Math.random() * contentArray.length);
        

        let responseObj = {
            item: contentArray[randomIndex]
        }

        countRuta2++;

        res.send(JSON.stringify(responseObj));

});

app.get("/visitas", async (req, res, next) => {

    let responseObj = {
        visitas: {
            rutaItems: countRuta1,
            rutaRandom: countRuta2
        }
    }

    res.send(JSON.stringify(responseObj));
});

let port = process.env.port || 8080;

app.listen(8080, () => {
    console.log(`Server corriendo en puerto ${port}`);
})
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express');
const path = require('path');
const xprshandle = require('express-handlebars');

const configureRoutes = require('./routes');

const app = express();
//poner al inicio siempre pal auto refresh
//npm nodemon index.js
//o npm start

app.use(express.urlencoded({
    extended: true
}));

// setea el render del doc con handlebars
app.engine('handlebars', xprshandle());
// use el motor de render handlebars
app.set('view engine', 'handlebars');

//pone la carpeta public para poder leer los demas archivos que contiene
app.use(express.static('public'));


//CTRL + C cierra el server en la terminal
//el / es el que determina la pagina en la que funcionan


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'store';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    configureRoutes(app, db);

});

//en app real, puerto 80 u otros reales
//poner localhost:3000 en chrome pa abrir
app.listen(3000, function () {
    console.log('servidor en pto3000');
});
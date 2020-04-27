console.log('aber');

const express = require('express');
//para paths absolutos
const path = require('path');
// importar express handlebars
const xprshandle = require('express-handlebars');

// importar lista de productos
const products = require('./products');


// recorrer productos para agregar free shipping
products.forEach(function (elem) {

    if (elem.price >= 80000) {
        elem.freeShipping = true;
    } else {
        elem.freeShipping = false;
    }
});

const app = express();
//poner al inicio siempre pal auto refresh
//npm nodemon index.js
//o npm start

// setea el render del doc con handlebars
app.engine('handlebars', xprshandle());
// use el motor de render handlebars
app.set('view engine', 'handlebars');

//pone la carpeta public para poder leer los demas archivos que contiene
app.use(express.static('public'));

//CTRL + C cierra el server en la terminal
//el / es el que determina la pagina en la que funcionan
//todas las PREGUNTAS tienen que tener RESPUESTAS
app.get('/', function (req, res) {
    console.log('hola en la consola');
    res.send('hola desde el navegator');

    //asi se pone la pagina pasada en la nueva
    //tambien envia archivos
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/contacto', function (req, res) {
    console.log('hola en la contacto');
    res.send('pagina de contacto');
});

app.get('/tienda', function (req, res) {

    var filtered;

    if (req.query.price_lt) {
        filtered = products.filter(function (elem) {
            if (elem.price < req.query.price_lt) {
                return true;
            };
        });
    };

    if (req.query.search) {
        filtered = products.filter(function (elem) {
            if (elem.price < req.query.search) {
                return true;
            };
        });
    };


    console.log(filtered);
    // objeto contexto 
    var context = {
        title: "el titulo desde el contexto",
        products: filtered,
    };

    //renderiza los handlebars en el main
    res.render('store', context);
})

// el despues del : es la variable de nombre que recibe el handlebar
app.get('/producto/:name/:id', function (req, res) {

    var id = parseInt(req.params.id);
    var product = products[id];


    var context = {};

    // encontrar elemento en la lista
    var foundElement = products.find(function (elem) {
        if (elem.id == req.params.id) {
            return true;
        }
    });

    context = foundElement;
    /*
        if (req.params.name === 'pantalon') {
            var context = {
                title: '',
                img: '',
                description: '',
                options: ['rojo', 'verde'],
            }
        };

        if (req.params.name === 'camiseta') {
            var context = {
                title: '',
                img: '',
                description: '',
                options: [],
            }
        };

        console.log(req.params.name);
        */

    res.render('product', product /*context*/ );

});
//en app real, puerto 80 u otros reales
//poner localhost:3000 en chrome pa abrir
app.listen(3000, function () {
    console.log('servidor en pto3000');
});
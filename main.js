console.log('aber');

const express = require('express');
//para paths absolutos
const path = require('path');
// importar express handlebars
const xprshandle = require('express-handlebars');

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

    // objeto contexto 
    var context = {
        title: "el titulo desde el contexto",

    };

    //renderiza los handlebars en el main
    res.render('store', context);
})

app.get('/producto/:name', function (req, res) {

    var context = {};

    if (req.params.name === 'pantalon') {
        var context = {
            title: '',
            img: '',
            description: '',
        }
    };



    console.log(req.params.name);

    res.render('product', context);

});
//en app real, puerto 80 u otros reales
//poner localhost:3000 en chrome pa abrir
app.listen(3000, function () {
    console.log('servidor en pto3000');
});
console.log('aber');

const express = require('express');
//para paths absolutos
const path = require('path');

const app = express();
//poner al inicio siempre pal auto refresh
//npm nodemon index.js
//o npm start

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
    res.sendFIle(path.join(__dirname, '/public/index.html'));
});

app.get('/contacto', function (req, res) {
    console.log('hola en la contacto');
    res.send('pagina de contacto');
});

app.get('/tienda', function (req, res) {
    res.send('ya en la tienda');
})
//en app real, puerto 80 u otros reales
//poner localhost:3000 en chrome pa abrir
app.listen(3000, function () {
    console.log('servidor en pto3000');
});
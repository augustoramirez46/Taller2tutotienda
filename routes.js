const assert = require('assert');

function configureRoutes(app, db) {

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


        var filters = {
            $and: []
        };


        if (req.query.price_lt) {
            console.log(req.query.price_lt);
            filters.$and.push({
                price: {
                    $lte: parseInt(req.query.price_lt)
                },
            });

        };

        if (req.query.search_tag) {
            console.log(req.query.search_tag);
            filters.$and.push({
                cathegory: {
                    $regex: new RegExp(req.query.search_tag, 'i'),
                },
            });

        };

        if (req.query.search_color) {

            filters.$and.push({
                color: {
                    $regex: new RegExp(req.query.search_color, 'i'),
                },
            });

        };
        if (filters.$and.length === 0) {
            delete filters.$and;
        }

        var sortings = {

        };
        if (req.query.sort == 'price_desc') {
            sortings.price = -1;
        }
        if (req.query.sort == 'price_asc') {
            sortings.price = 1;
        }

        if (req.query.sort == 'pop_desc') {
            sortings.popular = -1;
        }
        if (req.query.sort == 'pop_asc') {
            sortings.popular = 1;
        }


        // Get the documents collection
        const collection = db.collection('products');


        collection.find(
            filters
        ).sort(
            sortings
        ).toArray(function (err, docs) {
            assert.equal(err, null);

            // objeto contexto 
            var context = {

                products: docs,
            };

            //renderiza los handlebars en el main
            res.render('store', context);

        });





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
}

module.exports = configureRoutes;
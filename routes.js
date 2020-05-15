const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

function configureRoutes(app, db) {


    app.get('/producto/:name/:id', function (req, res) {
        if (req.params.id.length != 24) {
            res.redirect('/404');
            return;
        }

        const filter = {
            _id: {
                $eq: new ObjectId(req.params.id)
            }
        };
        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filter).toArray(function (err, docs) {
            assert.equal(err, null);

            if (docs.length == 0) {
                res.redirect('/404');
                return;
            }

            // crear el contexto
            var context = docs[0];
            // renderizar el archivo list.handlebars con el contexto creado
            res.render('product', context);
        });
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

    // app.get('/producto/:name/:id', function (req, res) {

    //     var id = parseInt(req.params.id);
    //     var product = products[id];


    //     var context = {};

    //     // encontrar elemento en la lista
    //     var foundElement = products.find(function (elem) {
    //         if (elem.id == req.params.id) {
    //             return true;
    //         }
    //     });

    //     context = foundElement;

    //     res.render('product', product);

    // });

    // mostrar info usuario
    app.get('/checkout', function (req, res) {

        console.log(req.query.error)
        var context = {
            showError: req.query.error,
        }

        res.render('checkout', context);
    });


    //recibir info usuario, se puede repetir porque es POST
    app.post('/checkout', function (req, res) {

        // cuando es post es BODY en logar de QUERY
        // console.log(req.body.name)
        console.log(req.body);

        var {
            name,
            address
        } = req.body;

        req.body.creation_date = new Date();

        if (!name || !address) {
            // res.send('error');
            res.redirect('/checkout?error=true');
            return;

        }

        // Get the documents collection
        const collection = db.collection('orders');
        collection.insert(req.body)

        //   res.send('test');
        res.redirect('/confirmacion');

    });

    app.get('/confirmacion', function (req, res) {

        res.redirect('/tienda');
    });
}

module.exports = configureRoutes;
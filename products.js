const products = [

    {
        id: 0,
        title: 'poster',
        img: '/img/imagen.jpg',
        description: 'lorem ipsum',
        options: ['azul', 'rosado', 'verde'],
        variations: [{
                name: 'simple',
            },
            {
                name: 'compuesto',
                price: 15000,
            },
            {
                name: 'deluxe',
                price: 90000,
            }
        ]

    },

    {
        id: 1,
        title: 'poster',
        img: '/img/imagen.jpg',
        description: 'lorem ipsum',
        options: ['azul', 'rosado', 'verde'],

    }


];

module.exports = products;
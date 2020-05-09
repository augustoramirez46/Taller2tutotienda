const products = [{
        title: 'Poster Angel',
        price: 15000,
        popular: 32,
        size: ['A4'],
        color: ['Mixto'],
        cathegory: 'Poster',
        description: 'Poster A4 basado en el angel poligonal de neo genesis evangelion combinado con sonic para crear un personaje melo.',
        imgPath: '/img/store/poster01.png',
    },
    {
        title: 'Poster Cicla runcia',
        price: 15000,
        popular: 37,
        size: ['A4'],
        color: ['Mixto'],
        cathegory: 'Poster',
        description: 'Poster A4 de una cicla situada en un contexto post apocaliptico pre covid pre 2012 post maddona que ha sido azotada por el paso del tiempo y las olas de la vida.',
        imgPath: '/img/store/poster02.png',
    },
    {
        title: 'Poster Calavera cruqi',
        price: 15000,
        popular: 14,
        size: ['A4'],
        color: ['Mixto'],
        cathegory: 'Poster',
        description: 'Poster A4 de una calavera sangrienta legado de una pelea por el neoliberalismo en las fronteras de lorem ipsum.',
        imgPath: '/img/store/poster03.png',
    },
    {
        title: 'Poster Playero picado',
        price: 15000,
        popular: 38,
        size: ['A4'],
        color: ['Mixto'],
        cathegory: 'Poster',
        description: 'Poster A4 de un man que visita la playa y recibe una picadura mortal por parte del crustaceo cascarudo que guarda las playas.',
        imgPath: '/img/store/poster04.png',
    },
    {
        title: 'Poster Pistolero',
        price: 15000,
        popular: 15,
        size: ['A4'],
        color: ['Mixto'],
        cathegory: 'Poster',
        description: 'Poster A4 de un man que tiene una pistola y un sentido de la moda que no te voy a mentir pana, se ve muy fresco el pana.',
        imgPath: '/img/store/poster05.png',
    },
    {
        title: 'Poster Mecha velero',
        price: 15000,
        popular: 48,
        size: ['A4'],
        color: ['Mixto'],
        cathegory: 'Poster',
        description: 'Poster A4 de un mecha que funciona a punta del calor y la energía de la vela que lleva a su espalda, mientras viaja por el mundo asombrando a los pequenines.',
        imgPath: '/img/store/poster06.png',
    },
    {
        title: 'Camiseta Mecha velero',
        price: 30000,
        popular: 7,
        size: ['S', 'M', 'L'],
        color: 'Blanco',
        cathegory: 'Camiseta',
        description: 'Camiseta blanca con el motivo del mecha funcional a punta de la vela que lleva en su espalda.',
        imgPath: '/img/store/cam01.png',
    },
    {
        title: 'Camiseta Angel',
        price: 30000,
        popular: 29,
        size: ['S', 'M', 'L'],
        color: 'Azul',
        cathegory: 'Camiseta',
        description: 'Camiseta estampada con sublimacion de el angel basado en el anime japones neo genesis evangelion.',
        imgPath: '/img/store/cam02.png',
    },
    {
        title: 'Camiseta Calavera cruqui',
        price: 30000,
        popular: 43,
        size: ['S', 'M', 'L'],
        color: 'Negro',
        cathegory: 'Camiseta',
        description: 'Camiseta negra estampada con la calavera por medio de sublimacion de tinta de neoliberalismo lorem ipsum',
        imgPath: '/img/store/cam03.png',
    },
    {
        title: 'Camiseta Pistolero',
        price: 30000,
        popular: 16,
        size: ['S', 'M', 'L'],
        color: 'Blanco',
        cathegory: 'Camiseta',
        description: 'Camiseta serigrafia del muchachojovne pistolero lorem ipsum.',
        imgPath: '/img/store/cam04.png',
    },
    {
        title: 'Pin Mecha velero',
        price: 8000,
        popular: 4,
        size: ['S'],
        color: 'Rosado',
        cathegory: 'Pin',
        description: 'Pin rosado del mecha velero.',
        imgPath: '/img/store/pin01.png',
    },
    {
        title: 'Pin Angel',
        price: 8000,
        popular: 3,
        size: ['S'],
        color: 'Azul',
        cathegory: 'Pin',
        description: 'Pin azul del angel basado en NGE.',
        imgPath: '/img/store/pin02.png',
    },
    {
        title: 'Pin Calavera cruqui',
        price: 8000,
        popular: 32,
        size: ['S'],
        color: 'Verde',
        cathegory: 'Pin',
        description: 'Pin verde de la calavera cruqui.',
        imgPath: '/img/store/pin03.png',
    },
    {
        title: 'Pin Pistolero',
        price: 8000,
        popular: 48,
        size: ['S'],
        color: 'Amarillo',
        cathegory: 'Pin',
        description: 'Pin amarillo del pistolero de lorem.',
        imgPath: '/img/store/pin04.png',
    },
    {
        title: 'Sticker Calavera cruqui',
        price: 3000,
        popular: 17,
        size: ['S'],
        color: ['Mixto'],
        cathegory: 'Sticker',
        description: 'Sticker impreso en papel de alta calidad e impermeable de la calavera cruqui.',
        imgPath: '/img/store/stic01.png',
    },
    {
        title: 'Sticker Angel',
        price: 3000,
        popular: 29,
        size: ['S'],
        color: ['Mixto'],
        cathegory: 'Sticker',
        description: 'Sticker impreso en papel de alta calidad e impermeable del angel de NGE.',
        imgPath: '/img/store/stic02.png',
    },
    {
        title: 'Sticker Pistolero',
        price: 3000,
        popular: 18,
        size: ['S'],
        color: ['Mixto'],
        cathegory: 'Sticker',
        description: 'Sticker impreso en papel de alta calidad e impermeable del pistolero aleta.',
        imgPath: '/img/store/stic03.png',
    },
    {
        title: 'Sticker Cauchola',
        price: 3000,
        popular: 38,
        size: ['S'],
        color: ['Mixto'],
        cathegory: 'Sticker',
        description: 'Sticker impreso en papel de alta calidad e impermeable de la cauchera aleta.',
        imgPath: '/img/store/stic04.png',
    },
    {
        title: 'Sticker Changó',
        price: 3000,
        popular: 28,
        size: ['S'],
        color: ['Mixto'],
        cathegory: 'Sticker',
        description: 'Sticker impreso en papel de alta calidad e impermeable del changún.',
        imgPath: '/img/store/stic05.png',
    }
];

module.exports = products;
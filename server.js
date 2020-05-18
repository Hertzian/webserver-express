const express = require('express');
const app = express();
const hbs = require('hbs');
// helpers
require('./hbs/helpers/helpers');

// to deploy
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// express hbs engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
 
// sale como json
// app.get('/', (req, res) => {
// //   res.send('Esto es express');
//     let salida = {
//         nombre: 'Lalitus',
//         apellido: 'Aguilar',
//         url: req.url
//     }

//     res.send(salida);
// })

app.get('/', (req, res) => {
    res.render('index', {
        nombre: 'Lalitus Aguilar',
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto 3000`);
});
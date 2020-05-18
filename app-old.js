const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    let salida = {
        nombre: 'Lalitus',
        apellido: 'Aguilar',
        url: req.url
    }

    res.write(JSON.stringify(salida));
    // res.write('kiuboles');
    res.end();
})
.listen(8080);

console.log(`Escuchnado puerto 8080`);
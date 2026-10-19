const fs = require('fs');
const path = require('path');

function manejarEstaticos(req, res) {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    let extname = path.extname(filePath);
    let contentType = 'text/html';

    if (extname === '.css') contentType = 'text/css';
    if (extname === '.js') contentType = 'text/javascript';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ mensaje: 'Archivo estático no encontrado' }));
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(JSON.stringify({ mensaje: '404 Not Found' }));
        }
    });
}

module.exports = { manejarEstaticos };

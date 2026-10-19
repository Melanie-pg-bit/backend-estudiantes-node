const fs = require('fs');
const path = require('path');

function manejarEstaticos(req, res) {
    // Si la ruta es "/" le asignamos "/index.html" por defecto
    let url = req.url === '/' ? '/index.html' : req.url;
    const rutaArchivo = path.join(__dirname, 'public', url);

    // Determinar la extensión para el Content-Type
    const ext = path.extname(rutaArchivo);
    let contentType = 'text/html';

    if (ext === '.css') contentType = 'text/css';
    if (ext === '.js') contentType = 'application/javascript';
    if (ext === '.json') contentType = 'application/json';

    fs.readFile(rutaArchivo, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ mensaje: '404 Not Found' }));
            return;
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}

module.exports = { manejarEstaticos };

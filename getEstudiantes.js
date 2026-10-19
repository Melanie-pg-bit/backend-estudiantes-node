
const fs = require('fs');
const path = require('path');

function obtenerEstudiantes(req, res) {
     
    const rutaArchivo = path.join(__dirname, 'data', 'estudiantes.json');

    fs.readFile(rutaArchivo, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ mensaje: 'Error al leer la base de datos' }));
            return;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    });
}

module.exports = { obtenerEstudiantes };
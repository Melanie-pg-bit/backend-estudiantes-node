const fs = require('fs');
const path = require('path');

function guardarEstudiante(req, res) {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const nuevoEstudiante = JSON.parse(body);
        const rutaArchivo = path.join(__dirname, 'data', 'estudiantes.json');

        fs.readFile(rutaArchivo, 'utf8', (err, data) => {
            const estudiantes = err ? [] : JSON.parse(data);
            estudiantes.push(nuevoEstudiante);

            fs.writeFile(rutaArchivo, JSON.stringify(estudiantes, null, 2), err => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ mensaje: 'Error al guardar datos' }));
                    return;
                }
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(nuevoEstudiante));
            });
        });
    });
}

module.exports = { guardarEstudiante };
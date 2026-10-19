const fs = require('fs');
const path = require('path');

function guardarEstudiante(req, res) {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        try {
            const dataParseada = JSON.parse(body);
            const rutaArchivo = path.join(__dirname, 'data', 'estudiantes.json');

            fs.readFile(rutaArchivo, 'utf8', (err, data) => {
                let estudiantes = [];

                if (err) {
                    // Muestra en pantalla si no encuentra la carpeta o el archivo
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ detalle: 'Error al leer estudiantes.json: ' + err.message }));
                    return;
                }

                try {
                    estudiantes = JSON.parse(data);
                } catch (e) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ detalle: 'El archivo estudiantes.json tiene un error de formato JSON' }));
                    return;
                }

                const nuevoEstudiante = {
                    id: Date.now(),
                    nombre: dataParseada.nombre || 'Sin Nombre'
                };

                estudiantes.push(nuevoEstudiante);

                fs.writeFile(rutaArchivo, JSON.stringify(estudiantes, null, 2), (errWrite) => {
                    if (errWrite) {
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ detalle: 'Error al escribir estudiantes.json: ' + errWrite.message }));
                        return;
                    }

                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(nuevoEstudiante));
                });
            });
        } catch (error) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ detalle: 'El JSON recibido no es válido: ' + error.message }));
        }
    });
}

module.exports = { guardarEstudiante };
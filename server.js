const http = require('http');
const { obtenerEstudiantes } = require('./getEstudiantes');
const { guardarEstudiante } = require('./postEstudiantes');
const { manejarEstaticos } = require('./staticHandler');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/api/estudiantes' && req.method === 'GET') {
        return obtenerEstudiantes(req, res);
    }

    if (req.url === '/api/estudiantes' && req.method === 'POST') {
        return guardarEstudiante(req, res);
    }

    // Cualquier otra ruta pasa al manejador de archivos de la carpeta public
    manejarEstaticos(req, res);
});

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
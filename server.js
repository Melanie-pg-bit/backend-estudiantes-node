const http = require('http');
const { manejarEstaticos } = require('./staticHandler');
const { obtenerEstudiantes } = require('./getEstudiantes');
const { guardarEstudiante } = require('./postEstudiantes');

const server = http.createServer((req, res) => {
    if (req.url === '/api/estudiantes' && req.method === 'GET') {
        obtenerEstudiantes(req, res);
    } else if (req.url === '/api/estudiantes' && req.method === 'POST') {
        guardarEstudiante(req, res);
    } else {
        manejarEstaticos(req, res);
    }
});

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
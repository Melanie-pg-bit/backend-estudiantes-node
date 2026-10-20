# backend-estudiantes-node
# backend-estudiantes-node

Servidor HTTP en Node.js con módulos nativos (`http`, `fs`, `path`), sin frameworks. Sirve archivos estáticos y expone una API básica para consultar y registrar estudiantes, con persistencia en un archivo JSON.

## Requisitos

- Node.js 18 o superior

## Instalación y ejecución

```bash
npm install
npm start        # ejecuta node server.js
npm run dev      # ejecuta node --watch server.js (reinicia al guardar)
```

El servidor queda en `http://localhost:3000`.

> En Windows con PowerShell, si aparece un error de políticas de ejecución, usa `npm.cmd start` o ejecuta `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.

## Estructura del proyecto

```
backend-estudiantes-node/
├── public/               # archivos estáticos (HTML/CSS)
│   ├── index.html
│   └── style.css
├── data/
│   └── estudiantes.json  # persistencia local
├── server.js             # servidor y enrutamiento
├── staticHandler.js      # servir archivos estáticos
├── getEstudiantes.js     # GET /api/estudiantes
├── postEstudiantes.js    # POST /api/estudiantes
└── package.json
```

## Endpoints

| Método | Ruta | Descripción | Respuesta |
|---|---|---|---|
| GET | `/` | Página principal | 200 HTML |
| GET | `/api/estudiantes` | Lista de estudiantes | 200 JSON |
| POST | `/api/estudiantes` | Registra un estudiante | 201 JSON |
| GET | cualquier otra | Recurso inexistente | 404 JSON |

### Ejemplo de POST

En Windows (PowerShell):

```bash
curl.exe -X POST http://localhost:3000/api/estudiantes -H "Content-Type: application/json" -d "{\"nombre\":\"Ana\"}"
```

En Linux o macOS:

```bash
curl -X POST http://localhost:3000/api/estudiantes -H "Content-Type: application/json" -d '{"nombre":"Ana"}'
```

Respuesta (201 Created):

```json
{ "nombre": "Ana", "id": 4 }
```

## Autores

- Gomez Huaman, Melany Yaritza
- Morales Yapu, Hillary Fernanda
- Ortiz Saavedra, Sarah Megan
- Paredes Gonzales, Melany Grace

Curso: IDWeb, Laboratorio 05

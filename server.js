const express = require('express');
const cors = require('cors');
const app = express();
const host = 'localhost';
const port = 8000;
const http = require("http");
const movies = require('./../models/movie');

//const { getMovies } = require('./src/models/movie.model'); // Importa la función

app.use(cors()); // Habilita CORS

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Endpoint para obtener películas
app.get('/movies', (req, res) => {
  const movies = getMovies(); // Obtén las películas desde db.json
  res.json(movies); // Envía las películas como respuesta
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

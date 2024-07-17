const express = require('express');
const app = express();
const cors = require('cors');
const usersRoutes = require('./routes/users.routes');
const characteristicsRoutes = require('./routes/characteristics.routes');

// Rutas

// Middlewares para cliente
// Opciones avanzadas de configuración de CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Dominios autorizados
  methods: '*', // Métodos permitidos
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/users', usersRoutes);
app.use('/api/characteristics', characteristicsRoutes);

// Uso de rutas

app.listen(3000, () => console.log('Servidor en ejecución en el puerto 3000'));

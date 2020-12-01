const express = require('express');
const path = require('path');
require('dotenv').config();

// DB Config
require('./database/config').dbConnection();
// Otra forma de hacerlo en dos lineas ==>
// const { dbConnection }= require('./database/config');
// dbConnection();

// App de Express
const app = express();

// Lectura y parseo del BODY
app.use(express.json()); // middlewhere

// CREAR: Servidor de sockets
const server = require('http').createServer(app); // Anexamos APP del Express
//const io = require('socket.io')(server);
module.exports.io = require('socket.io')(server); // Para que io pueda ser leido en SOCKET.js

// Mensajes de Sockets
require('./sockets/socket');

// Path Público
const publicPath=path.resolve(__dirname,'public');
app.use(express.static(publicPath));

// Mis Rutas
app.use('/api', require('./routes/auth'));

// Gris o verder si lo mira como si fuera un string
server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en puerto: '+process.env.PORT);
});


console.logCopy = console.log.bind(console);
console.log = function(data)
{
    var currentDate = '[' + new Date() + '] ';
    this.logCopy(currentDate, data);
};
// Parseo de la funcion console.log para que siempre saque la fecha, nos follamos la función nativa por otra nuestra

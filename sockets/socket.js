const { comprobarJWT } = require('../helpers/jwt');
const {io} = require('../index'); // Importar el Exportanción de INDEX
const { usuarioConectado, usuarioDesconectado } = require('../controllers/socket')

// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectando');

    //console.log(client.handshake.headers['x-token']);
    const [valido, uid] = comprobarJWT(client.handshake.headers['x-token']);
    if (!valido) {
        console.log('Cliente Terminado sin Token');
        return client.disconnect();
    }

    // Cliente conectado y autenticado
    console.log('Cliente autenticado: '+uid);
    usuarioConectado(uid);

    // Cuando se cierra la conexión
    client.on('disconnect', () => { 
        console.log('Cliente desconectado');
        usuarioDesconectado(uid);
    });

    /*
    // Igual que el EMIT: mensaje
    client.on('mensaje', (payload) => {
        console.log('Mensaje!!', payload);
        
        // Se lo envio a TODOS los clientes
        io.emit('mensaje', {admin: 'Nuevo mensaje'});
    })
    */
});
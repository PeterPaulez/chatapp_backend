const Usuario = require('../models/usuario');
const Mensaje = require('../models/mensaje');

// Ponemos ese ='' para que visualStudio vea que es un string, no importante.
const usuarioConectado = async (uid = '') => {
    const usuario = await Usuario.findById(uid);
    usuario.online = true;
    await usuario.save();
    return usuario;
}

const usuarioDesconectado = async (uid = '') => {
    const usuario = await Usuario.findById(uid);
    usuario.online = false;
    await usuario.save();
    return usuario;
}

const grabarMensaje = async ( payload  = {de:'', para:'', mensaje:''}) => {
    try {
        const mensaje = new Mensaje(payload);
        await mensaje.save();
        console.log(mensaje);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    usuarioConectado,
    usuarioDesconectado,
    grabarMensaje
}
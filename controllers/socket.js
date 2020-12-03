const Usuario = require('../models/usuario');

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

module.exports = {
    usuarioConectado,
    usuarioDesconectado
}
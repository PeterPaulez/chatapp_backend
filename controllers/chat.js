const {response} = require('express');
const Usuario = require('../models/usuario');
const Mensaje = require('../models/mensaje');

const getUsuarios = async (request, answer = response) => {
    const usuarios = await Usuario
    .find({_id: {$ne: request.uid}})
    .sort('-online');

    answer.json({
        ok: true,
        usuarios,
        uid: request.uid
    });
}

const getMensajes = async (request, answer = response) => {
    const miID = request.uid;
    const mensajesDE = request.params.de;
    console.log('DE: '+miID);
    console.log('PARA: '+mensajesDE);
    const last30 = await Mensaje.find({
        $or: [{de: miID, para: mensajesDE},{de: mensajesDE, para: miID}]
    })
    .sort({createdAt: 'desc'})
    .limit(30);

    answer.json({
        ok: true,
        mensajes: last30
    });
}

module.exports = {
    getUsuarios,
    getMensajes
}
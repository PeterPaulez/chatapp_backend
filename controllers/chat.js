const {response} = require('express');
const Usuario = require('../models/usuario');

const getList = async (request, answer = response) => {
    const usuarios = await Usuario
    .find({_id: {$ne: request.uid}})
    .sort('-online');

    answer.json({
        ok: true,
        usuarios,
        uid: request.uid
    });
}

module.exports = {
    getList
}
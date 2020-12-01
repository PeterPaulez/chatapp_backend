const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (request, answer = response) => {
    answer.json({
        ok: true,
        msg: 'Crear usuario!!!'
    })
}

module.exports={
    crearUsuario
}
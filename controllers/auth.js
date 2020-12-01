const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (request, answer = response) => {

    const errores = validationResult(request);
    if (!errores.isEmpty()) {
        return answer.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    answer.json({
        ok: true,
        msg: 'Crear usuario!!!'
    })
}

module.exports={
    crearUsuario
}
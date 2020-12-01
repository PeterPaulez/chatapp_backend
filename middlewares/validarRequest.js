const { response } = require('express');
const jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator");

const validarCampos = (request, answer = response, next) => {
    const errores = validationResult(request);
    if (!errores.isEmpty()) {
        return answer.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }
    // Si todo ok, llamo a NEXT, sino se moriría
    next();
}
const validarJWT = (request, answer = response, next) => {
    const token = request.header('x-token');
    if (!token) {
        return answer.status(401).json({
            ok: false,
            msg: 'No hay Token en la petición'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET_KEY);
        request.uid = uid;
        next();
    } catch (error) {
        return answer.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
}

module.exports = {
    validarCampos,
    validarJWT
}
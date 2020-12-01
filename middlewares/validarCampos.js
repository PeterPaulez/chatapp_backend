const { validationResult } = require("express-validator");

const validarCampos = (request, answer, next) => {
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

module.exports = {
    validarCampos
}
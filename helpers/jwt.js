const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {
    // no lo hacen con Promesas sino con CallBacks

    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn:'48h'
        }, (error, token) => {
            if (error) {
                // No se pudo crear token
                reject('No se pudo generar el JWT');
            } else {
                // Token!
                resolve(token);
            }
    
        });
    });
}

const comprobarJWT = (token) => {
    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return [true, uid];
    } catch (error) {
        return [false, 0];
    }
}

module.exports = {
    generarJWT,
    comprobarJWT
}
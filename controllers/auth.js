const { response } = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (request, answer = response) => {
    //const email = request.body.email; // Si solo quisieramos el Email
    const { email, password } = request.body;
    try {
        // Sino ponemos el await no le da tiempo resolver y da siempre true
        const existeEmail = await Usuario.findOne({email});
        if (existeEmail) {
            return answer.status(400).json({
                ok: false,
                msg: 'El correo ya está registrado: '+email
            });
        }

        // Si no existe y todo ok, vamos a crear el usuario
        const usuario = new Usuario(request.body);

        // Antes de grabar encriptamos contraseña
        const salt = bcrypt.genSaltSync(); //Generamos un salt aleatorio
        usuario.password = bcrypt.hashSync(password, salt);

        // Todo ordenadito y bonito, lo guardamos en BBDD
        await usuario.save(); // Promise tipo FUTURE

        // Generamos una JWT para el usuario
        const token = await generarJWT(usuario.id);

        answer.json({
            ok: true,
            usuario,
            token
        });
    } catch (error) { 
        answer.status(500).json({
            ok: false,
            msg: 'Hable con ADMIN'
        });
    }

}

module.exports={
    crearUsuario
}
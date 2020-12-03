/*
    path: /api/usuario
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, renewToken } = require('../controllers/auth');
const { validarCampos, validarJWT } = require('../middlewares/validarRequest');
const router = Router();

router.post('/new', [
    check('email','El Email es obligatorio y debe ser un email').not().isEmpty().isEmail(),
    check('nombre','El Nombre es obligatorio').not().isEmpty().isLength({ min: 3 }),
    check('password','La Contraseña es obligatorio').not().isEmpty().isLength({ min: 6 }),
    validarCampos
],
crearUsuario);

router.post('/login', [
    check('email','El Email es obligatorio y debe ser un email').not().isEmpty().isEmail(),
    check('password','La Contraseña es obligatorio').not().isEmpty().isLength({ min: 6 }),
    validarCampos
],
loginUsuario);

router.get('/renew', validarJWT, renewToken);

module.exports=router;
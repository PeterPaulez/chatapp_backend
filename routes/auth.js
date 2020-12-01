/*
    path: /api/usuario
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validarCampos');
const router = Router();

router.post('/new', [
    check('email','El Email es obligatorio y debe ser un email').not().isEmpty().isEmail(),
    check('nombre','El Nombre es obligatorio').not().isEmpty().isLength({ min: 3 }),
    check('password','La Contraseña es obligatorio').not().isEmpty().isLength({ min: 6 }),
    validarCampos
],
crearUsuario);

module.exports=router;
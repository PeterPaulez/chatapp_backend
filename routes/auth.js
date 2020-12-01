/*
    path: /api/usuario
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario } = require('../controllers/auth');
const router = Router();

router.post('/new', [
    check('nombres','El nombre es obligatorio').not().isEmpty(),
],
crearUsuario);

module.exports=router;
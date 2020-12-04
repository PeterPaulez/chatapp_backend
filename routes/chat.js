/*
    path: /api/chat
*/
const { Router } = require('express');
const { getUsuarios, getMensajes } = require('../controllers/chat');
const { validarJWT } = require('../middlewares/validarRequest');
const router = Router();

router.get('/list', validarJWT, getUsuarios);
router.get('/mensajes/:de', validarJWT, getMensajes);

module.exports=router;
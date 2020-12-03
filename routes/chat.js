/*
    path: /api/chat
*/
const { Router } = require('express');
const { getList } = require('../controllers/chat');
const { validarJWT } = require('../middlewares/validarRequest');
const router = Router();

router.get('/list', validarJWT, getList);

module.exports=router;
const { Schema, model} = require('mongoose'); // model lo que ven fuera

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    online: {
        type: Boolean,
        default: false
    },
});

// Como he puesto usuario en la ANSWER esto se hace solo al poner toJSON
UsuarioSchema.method('toJSON', function() {
    const {__v, _id, password, ...newObject} = this.toObject();
    newObject.uid=_id;// Renombre el uid como yo quiero
    return newObject; // Mandamos el Object a saco paco
}); // No usar función de flecha porque se pierde el THIS y no deja modificar

module.exports = model('Usuario', UsuarioSchema);
const { Schema, model} = require('mongoose'); // model lo que ven fuera

const MensajeSchema = Schema({
    de: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    para: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    mensaje: {
        type: String,
        required: true
    }
}, {
    timestamps : true
});

// Como he puesto Mensaje en la ANSWER esto se hace solo al poner toJSON
MensajeSchema.method('toJSON', function() {
    const {__v, _id, ...newObject} = this.toObject();
    return newObject; // Mandamos el Object a saco paco
}); // No usar función de flecha porque se pierde el THIS y no deja modificar

module.exports = model('Mensaje', MensajeSchema);
// MongoDB siempre guarda con 'plural' los modelos, por eso mensaje será mensajes!
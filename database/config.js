const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex:true
        });
        console.log('DB Conectado');
    } catch {
        console.log(error);
        throw new Error('Error en la BBDD, habla con un admin');
    }
}

module.exports = {
    dbConnection
}
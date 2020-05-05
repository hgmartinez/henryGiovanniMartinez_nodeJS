const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehiculoSchema = new Schema({
    id:Number,
    tipo:Number,
    placa:String,
    fecha:{
        type: Date,
        default:new Date()
    }
});
module.exports = mongoose.model('vehiculos',vehiculoSchema);
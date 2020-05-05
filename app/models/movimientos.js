const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movimientos=new Schema({
    codigo:Number,
    codigoVehiculo:Number,
    entrada:Date,
    salida:Date,
    valorPago:Number
});

module.exports=  mongoose.model('movimientos',movimientos);
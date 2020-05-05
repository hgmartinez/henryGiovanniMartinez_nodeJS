const {Router}=require('express');
const router= Router();

const vehiculo =  require('../models/vehiculo');
const moviemientos = require('../models/movimientos');

router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/residente',(req,res)=>{
    //console.render(req.body);
    //res.json({'recibido':'yes'});
    res.render('vehiculoResidente');

});
router.post('/residente',(req,res)=>{
    console.log(req.body);
    res.json({'recibido':'yes'});
});
router.get('/oficial',(req,res)=>{
    
    res.render('vehiculoOficial');
    //res.json({'saludo':'hoola'});
});
router.post('/oficial',(req,res)=>{
    console.log(req.body);
    res.render('vehiculoOficial');
    //res.json({'saludo':'hoola'});
});
router.get('/entrada',(req,res)=>{
    res.json({'saludo':'hoola'});
});
router.get('/salida',(req,res)=>{
    res.json({'saludo':'hoola'});
});
module.exports=router
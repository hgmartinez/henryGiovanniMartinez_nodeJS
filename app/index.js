const express = require('express');
const path= require('path');
const mongo = require('mongoose');
const app=express();
const morgan = require('morgan');
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);
app.set('views',path.join(__dirname,'vista'));
app.set('view engine','ejs');
//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//base
mongo.connect('mongodb://localhost/testHugo').then(
db=>console.log('Conexion Exitosa')
).catch(
err=>console.error(err)
);
//route
app.use(require('./routes/rutas'))
//server
app.listen(app.get('port'),()=>{
    console.log('server listo');
});
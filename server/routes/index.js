const express=require('express');
const router = express.Router();

// const Viaje = require('../models/Viajes');

// const Testimonial = require('../models/Testimoniales');

const homeController=require('../controllers/homeController.js');
const nosotrosController= require('../controllers/nosotrosController.js');

const viajesController = require('../controllers/viajesController.js');

const testimonialesController = require('../controllers/testimonialesController'); 

module.exports= function()
{
    router.get('/',homeController.consultasHomePage);

    router.get('/nosotros',nosotrosController.infoNosotros);

    router.get('/viajes',viajesController.mostrarViajes);


    //router.get('/viajes',);
    
    router.get('/viajes/:id',viajesController.mostrarViaje);
    
    router.get('/testimoniales',testimonialesController.mostrarTestimoniales);

    router.post('/testimoniales',testimonialesController.agregarTestimonial);
return router;
}
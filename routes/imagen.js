var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

/* POST imagen */
router.post('/',upload.single('archivo'),function(req,res,next){
    /* TODO Localizar archivo en directorio temporal. */
        var archivoSubido = req.file;
        console.log(archivoSubido);
        res.send("Subido");
    /* TODO Comprobar que es un tipo de archivo admitido o rechazar. */
    /* TODO Cambiar nombre */
    /* TODO Copiar a nueva localización definitiva*/



});


/* GET listado de imagenes. */
router.get('/', function(req, res, next) {
  res.send('Aquí se muestran las imagenes subidas');
});

module.exports = router;

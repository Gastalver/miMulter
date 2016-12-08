var express = require('express');
var router = express.Router();



/* POST imagen */
router.post('/',function(req,res,next){
    /* TODO Localizar archivo en directorio temporal. */
    /* TODO Comprobar que es un tipo de archivo admitido o rechazar. */
    /* TODO Cambiar nombre */
    /* TODO Copiar a nueva localización definitiva*/
    res.send('Controlador POST de /imagen');

});


/* GET listado de imagenes. */
router.get('/', function(req, res, next) {
  res.send('Aquí se muestran las imagenes subidas');
});

module.exports = router;

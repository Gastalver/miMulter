var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            req.invalidUpload = 'Archivo no admitido';
            return cb(null, false);
        }
        cb(null, true);
    }}).single('archivo');


/* POST imagen */
router.post('/', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log('Multer error:' + err);
            return
        }
        // Everything went fine
        if (!req.invalidUpload){
            console.log('Uploaded');
            res.send('Uploaded');
        } else {
            console.log(req.invalidUpload);
            res.send(req.invalidUpload);
        }
    })
})

/* GET listado de imagenes. */
router.get('/', function(req, res, next) {
  res.send('Aquí se muestran las imagenes subidas');
});

module.exports = router;

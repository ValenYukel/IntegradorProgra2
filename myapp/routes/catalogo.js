var express = require('express');
var router = express.Router();
const catalogoController = require('../controllers/catalogoController');

/* GET home page. */

//router.get('/', );
router.get('/', catalogoController.index);
router.get('/productAdd', catalogoController.showFormCreate);
router.post('/productAdd',catalogoController.store)
router.get('/search', catalogoController.search_bar);
router.get('/detalle/:idProducto', catalogoController.detalle);

module.exports = router;
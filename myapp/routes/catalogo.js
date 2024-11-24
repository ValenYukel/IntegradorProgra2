var express = require('express');
var router = express.Router();
const catalogoController = require('../controllers/catalogoController');

/* GET home page. */
//router.get('/', );

router.get('/productAdd', catalogoController.showFormCreate);
router.post('/productAdd',catalogoController.store)
router.get('/search', catalogoController.search_bar);

module.exports = router;
var express = require('express');
var router = express.Router();
const userController = require("../controllers/userControllers");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login', userController.login);

router.get('/register', userController.register);

router.post("/register", userController.registerPost);

router.post("/login", userController.loginPost);

router.post("/logout", userController.logout);

router.get("/perfiles/:idPerfil", userController.perfilAjeno);

router.get("/perfil", userController.perfil);

module.exports = router;

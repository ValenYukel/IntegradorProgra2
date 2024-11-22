const db = require('../database/models');
const op = db.Sequelize.Op;
const userController = require("../controllers/userControllers");

const catalogoController = {

    showFormCreate: function (req, res) {
        if (req.session) {
            return res.render("product-add");
        }
        return res.redirect("/"); 
    },
    store: function (req, res) {
        let producto_nuevo = {
            info : req.body,
            usuario_id: req.session.user.id,
        };

   
    db.Producto.create(producto_nuevo)
    .then(function (results) {
        return res.redirect("/");
    })
    .catch(function (err) {
      console.log(err);
      
    })
      }
};

module.exports = catalogoController;
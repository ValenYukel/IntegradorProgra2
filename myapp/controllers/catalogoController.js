const db = require('../database/models');
const op = db.Sequelize.Op;
const userController = require("../controllers/userControllers");

const catalogoController = {

    showFormCreate: function (req, res) {
        //if (req.session.user == undefined) {
            //return res.redirect("/users/login");
           
       // }
        return res.render("product-add"); 
    },
    store: function (req, res) {
       // if (req.session.user == undefined) {
          //  return res.redirect("/users/login"); 
        //}
        let producto_nuevo = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            usuario_id: req.session.user.id
        };

        console.log(producto_nuevo)
    
    db.Producto.create(producto_nuevo)
    .then(function (results) {
        console.log(results)
        return res.render("/");
    })
    .catch(function (err) {
      console.log(err);
      
    })
      },

    search_bar: (req, res) => {

            let rq = req.query.search;
        
            let filtrado = {
                where: [{nombre: {[op.like]: `%${rq}%`}
                    }],
                order: [
                        ['createdAt', 'DESC']
                    ]
            }
        
            
            db.Producto.findAll(filtrado)
            .then(function(result) {
            
            console.log("LOS ENCONTRADOS SON:", result)
            
            let cantidad = result.length;
    
            if (cantidad == 0) {
                return res.send("No hay resultados para su criterio de búsqueda");
            } else {
                return res.render("search-results", {buscado: result});            
            }

           

        }) 
            .catch(function(err) {
              return console.log(err);
            })
        



    }




};

module.exports = catalogoController;
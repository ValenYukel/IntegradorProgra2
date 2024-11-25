const db = require('../database/models');
const Op = db.Sequelize.Op;
const userController = require("../controllers/userControllers");


const catalogoController = {

    index: function(req, res){
        let filtrado = {
            include: [
              {association: "usuario"}],
            order:[["createdAt", "DESC"]],
            limit: 4,
          };

        db.Producto.findAll(filtrado)
        .then(function(results){
            return res.render('index', {producto: results});
        })
        .catch(function(err) {
            return console.log(err);
        });
},
    showFormCreate: function (req, res) {
        if (req.session.user == undefined) {
            return res.redirect("/users/login");
           
        }
        return res.render("product-add"); 
    },
    store: function (req, res) {
         if (req.session.user == undefined) {
            return res.redirect("/users/login"); 
        }
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
        return res.render("/catalogo");
    })
    .catch(function (err) {
      console.log(err);
      
    })
      },

    search_bar: (req, res) => {

            let rq = req.query.search;
        
            let filtrado = {
                where: [
                    {nombre: {[Op.like]: `%${rq}%`} }
                ],
                order: [
                        ['createdAt', 'DESC']
                    ]
            }
        
            
            db.Producto.findAll(filtrado, {
                include: [
                    {association: "usuario"},
                ]
               })
            .then(function(result) {
            
            console.log("LOS ENCONTRADOS SON:", result)
            
            let cantidad = result.length;
    
            if (cantidad == 0) {
                return res.send("No hay resultados para su criterio de búsqueda");
            } else {
                console.log(req.query.search)
                return res.render("search-results", {buscado: result, palabra: req.query.search});            
            }   
        }) 
            .catch(function(err) {
              return console.log(err);
            })

    },

    detalle: (req,res) => {

    let id = req.params.idProducto;

   db.Producto.findByPk(id,{
    include: [
        {association: "usuario"},
    ]
   })
   .then(function(results) {
    console.log("Estos son los results", results)
       return res.render("product", {buscado: results})
   }).catch(function(err) {
      return console.log(err);
    ;
   });


    }




};

module.exports = catalogoController;
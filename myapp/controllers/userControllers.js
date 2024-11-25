const db = require('../database/models');
const bcryptjs = require('bcryptjs');

const userController = {
    register: (req, res)=>{
        return res.render("register")
    },
    login: (req, res)=>{
        // if (req.session.user != undefined) {
            //return res.redirect("/catalogo/productAdd");
           
       // } 
        return res.render("login")
    },
    registerPost: (req, res) => {
        let forms = req.body;
        forms.contra = bcryptjs.hashSync(forms.contra, 10);
        db.Usuario.create(forms)
        .then((results) =>{
            return res.redirect("/users/login");

        })
        .catch((err) => {
            return console.log(err);
        });       
        
    },
    loginPost: (req, res) => {
         // if (req.session.user != undefined) {
            //return res.redirect("/catalogo/productAdd");
           
       // }
        let forms = req.body;
        let filtro = {
            where: {email: forms.email}
        }
        db.Usuario.findOne(filtro)
        .then((result) => {
          //  return res.send(result)
            if (!result) {
                return res.send("No existe una cuenta asociada a ese mail")
            } else {
                let chequeo = bcryptjs.compareSync(forms.contra, result.contra)
                if (chequeo) {
                    return res.send(req.session)
                    req.session.user = result.dataValues;
                    return res.redirect("/catalogo");
                } else {
                    return res.send(result.contra);
                }
            }

        }).catch((err) => {
            return console.log(err);
            
        });

        
    },
    logout: (req, res)=>{
        req.session.destroy();
        return res.redirect("/catalogo")
    }
}

module.exports = userController;
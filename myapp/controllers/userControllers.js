const db = require('../database/models');
const bcryptjs = require('bcryptjs');

const userController = {
    register: (req, res)=>{
        return res.render("register")
    },  
    login: (req, res)=>{
        return res.render("login")
    },
    registerPost: (req, res) => {
        let forms = req.body;
        forms.password = bcryptjs.hashSync(forms.password, 10);

        db.User.create(forms)
        .then((results) =>{
            return res.redirect("/users/login");
        })
        .catch((err) => {
            return console.log(err);
            ;
        });       
        
    },
    loginPost: (req, res) => {
        let forms = req.body;
        let filtro = {
            where: {email: forms.email}
        }
        db.User.findOne(filtro)
        .then((result) => {

            if (!result) {
                return res.send("No hay mail")
            } else {
                let check = bcryptjs.compareSync(forms.password , result.password)
                if (check) {
                    req.session.user = result.dataValues;
                    return res.redirect("/");
                } else {
                    return res.send("La contraseña es incorrecta");
                }
            }

        }).catch((err) => {
            return console.log(err);
            
        });

        
    },
    logout: (req, res)=>{
        req.session.destroy();
        return res.redirect("/")
    }
}

module.exports = userController;
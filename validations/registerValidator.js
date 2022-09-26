const {check, body} = require('express-validator')
const {loadUsers}= require('../data/db_Module')

module.exports =[
    check('firstName')
        .notEmpty().withMessage('el nombre es obligatorio').bail()
        .isLength({
            min:3
        }).withMessage('Minimo 3 caracteres').bail()
        .isAlpha('es-ES').withMessage('Solo caracteres alfabeticos'),

        check('lastName')
        .notEmpty().withMessage('el apellido es obligatorio').bail()
        .isLength({
            min:3
        }).withMessage('Minimo 3 caracteres').bail()
        .isAlpha('es-ES').withMessage('Solo caracteres alfabeticos'),

        body('email')
            .notEmpty().withMessage('El email es obligatorio').bail()
            .isEmail().withMessage('debe ser un email valido').bail()
            .custom((value,{req})=>{
                const user = loadUsers().find(user=>user.email===value)

                if(user) {
                    return false
                }else{
                    return true
                }
            }).withMessage('el email ya se encuentra registrado'),

            check('password')
            .notEmpty().withMessage('la contraseña es obligatoria').bail()
            .isLength({
                min:6,
                max:12
            }).withMessage('la contraseña debe tener entre 6 y 12 caracteres'),

            body('password2')
            .notEmpty().withMessage('debe confirmar la contraseña')
            .custom((value,{req})=>{
                if(value!==req.body.password){
                    return false
                }
                return true
            }).withMessage('las contraseñas no coinciden'),

            check('terms')
                .isString('on').withMessage('debes aceptar los terminos y condiciones')
                


]
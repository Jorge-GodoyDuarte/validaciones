const {loadUsers, storeUsers} = require ('../data/db_Module')
const {validationResult}=require('express-validator')
const bcryptjs =require('bcryptjs')

module.exports = {
    register : (req,res) => {
        return res.render('register')
    },
    processRegister:(req,res)=>{
        const errors = validationResult(req)

        if(errors.isEmpty()){

            
        const {firstName, lastName, email, password}= req.body
        const users = loadUsers()

        const newUser={
            id: users[users.length-1] ? users[users.length-1].id+1:1,
            firstName : firstName.trim(),
            lastName : lastName.trim(),
            email : email.trim(),
            password:bcryptjs.hashSync(password.trim(),10) ,
            rol:'user',
            avatar:null,
            gender:null,
            hobbies :[],
            address:null,
            city:null,
            province:null,
            about:null
        }

        const usersModify = [...users, newUser]

        storeUsers(usersModify)
        return res.redirect('/users/login')

        }else{
            return res.render('register',{
                errors: errors.mapped(),
                old: req.body
            })
        }


    },
    login : (req,res) => {
        return res.render('login')
    },
    profile : (req,res) => {
        return res.render('profile')
    },
    update : (req, res) => {
        return res.send(req.file)
    }
}
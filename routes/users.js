var express = require('express');
var router = express.Router();

const {login,profile,register, update, processRegister} = require('../controllers/usersController');

const {uploadUsers} = require('../middlewares/uploadFiles')

const registerValidator=require('../validations/registerValidator')

/* /users */
router
  .get('/register',register) // /users/register
  .post('/register',registerValidator,processRegister)
  .get('/login',login) // /users/login
  .get('/profile',profile) // /users/profile
  .put('/update/:id',uploadUsers.single('avatar'), update)

module.exports = router;

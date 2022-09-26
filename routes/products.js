const express = require('express');
const router = express.Router();

const {detail, filter, search, add, store, edit, update, remove} = require('../controllers/productsController');

const {uploadProducts} = require('../middlewares/uploadFiles');

const productValidator = require('../validations/productsValidator')

/* /products */

router
    .get('/add',add)
    .post('/add',uploadProducts.array('images'), productValidator,store)
    .get('/detail/:id',detail)
    .get('/edit/:id',edit)
    .put('/update/:id',productValidator,update)
    .get('/filter',filter)
    .get('/search',search)
    .delete('/delete/:id',remove)



module.exports = router;
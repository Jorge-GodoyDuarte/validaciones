const {loadProducts} = require('../data/db_Module')

module.exports = {
  index: (req, res) => {
    const products = loadProducts();
    return res.render("index",{
      products
    });
  },
  terms : (req,res) => {
    return res.render('terms')
  }
};

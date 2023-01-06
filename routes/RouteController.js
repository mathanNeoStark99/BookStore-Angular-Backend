const express = require('express');
const user = require('../controllers/SignupController');
const login = require('../controllers/LoginController');
const product = require('../controllers/ProductController');
const cart = require('../controllers/CartController');
const order = require('../controllers/OrderController');
const router = express.Router();

// Signup
router.post('/signup', function(req,res){
    user.createUser(req,res);
});

// Login
router.post('/login', function(req,res){
    login.userLogin(req,res);
})

// Product Routes
router.get('/admin', function(req,res){
    product.getAllProducts(req,res);
});

router.get('/home', function(req,res){
    product.getAllProducts(req,res);
});

router.post('/admin/addProduct', function(req,res){
    product.addProduct(req,res);
});

router.get('/admin/productEdit/:id', function(req,res){
    product.getProductById(req,res);
});

router.post('/admin/productEdit/:id', function(req,res){
    product.updateProduct(req,res);
});

router.get('/admin/delete/:id', function(req,res){
    product.deleteProduct(req,res);
});

router.get('/admin/deleteByName/:name', function(req,res){
    product.deleteProductByName(req,res);
});

// Cart Routes
router.post('/home/:id', function(req,res){
    cart.addToCartById(req,res);
});

router.post('/home/dup/:name', function(req,res){
    cart.addToCartByName(req,res);
});

router.get('/cart/:id', function(req,res){
    cart.getCart(req,res);
});

router.post('/cart/delete', function(req,res){
    cart.removeFromCart(req,res);
});


// Order Routes
router.get('/admin/orders', function(req,res){
    order.getAllOrders(req,res);
});

router.post('/orders', function(req,res){
    order.getOrdersById(req,res);
});

router.post('/saveOrder', function(req,res){
    order.saveAllOrders(req,res);
});

router.post('/placeOrder', function(req,res){
    order.placeOneOrder(req,res);
});

module.exports = router;
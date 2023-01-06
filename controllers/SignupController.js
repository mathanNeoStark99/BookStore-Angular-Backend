const database = require("../models")
const User = database.user;
const Cart = database.cart;


//create New User
exports.createUser = async (req,res) => {
    let user = req.body;

    await Cart.create()
        .then( async data => {
          user.cartModelCartID = data.cartID;
          await User.create(user)
        .then( data => {
          res.status(200).send(true);
        })
        })
        .catch( err => {
          res.status(500).send(false);
        });
}
const database = require("../models")
const CartTemp = database.carttemp;
const Product = database.product;


//create New Product
exports.addToCartById = async (req,res) => {
    let productId = req.params.id;
    let data = req.body.data.split(" ");

    let product = await Product.findOne({where:{productId:productId}});

    let item = {
        "userId" : data[1],
        "productName" : product.dataValues.productName,
        "quantity" : data[0],
        "price" : product.dataValues.price
    }

    await CartTemp.create(item)
        .then(data => {
          res.status(200).send();
        })
        .catch( err => {
          res.status(500).send();
        });
}

//create New Product using Name
exports.addToCartByName = async (req,res) => {
    let productName = req.params.name;
    let data = req.body.data.split(" ");

    let product = await Product.findOne({where:{productName:productName}});

    let item = {
        "userId" : data[1],
        "productName" : product.dataValues.productName,
        "quantity" : data[0],
        "price" : product.dataValues.price
    }
    await CartTemp.create(item)
        .then(data => {
          res.status(200).send();
        })
        .catch( err => {
          res.status(500).send();
        });
}

//get all products
exports.getCart = async (req,res) => {
    let id = req.params.id;
  await CartTemp.findAll({
      where :{
          userId : id
      }
  })
      .then(data => {
        res.status(200).send(data);
      })
      .catch( err => {
        res.status(500).send(err);
      });
}

//Remove from cart
exports.removeFromCart = async (req,res) => {
  let id = req.body.data;
  await CartTemp.destroy({ where:{
    cartItemId:id
  }}).then(data => {
    res.status(200).send();
  })
  .catch( err => {
    res.status(500).send();
  });
}
const database = require("../models")
const OrderTemp = database.ordertemp;
const CartTemp = database.carttemp;


//get all orders
exports.getAllOrders = async (req,res) => {

    await OrderTemp.findAll()
        .then(data => {
          res.status(200).send(data);
        })
        .catch( err => {
          res.status(500).send(err);
        });
}

//get Order by user email
exports.getOrdersById = async (req,res) => {
    let userEmail = req.body.data;
    await OrderTemp.findAll({
        where : {
            userId : userEmail
        }
    })
        .then(data => {
          res.status(200).send(data);
        })
        .catch( err => {
          res.status(500).send(err);
        });
}

//save all cart items to orders
exports.saveAllOrders = async (req,res) => {
    let email = req.body.data;
    let data = await CartTemp.findAll({
      where :{
          userId : email
      }
  });
  data.forEach(async element => {
      let item = {
          "userId" : element.dataValues.userId,
          "ProductName" : element.dataValues.productName,
          "quantity" : element.dataValues.quantity,
          "totalPrice" : element.dataValues.price * element.dataValues.quantity,
          "Status" : "not delivered",
          "price" : element.dataValues.price
      }
      await OrderTemp.create(item);
      await CartTemp.destroy({
          where : {
              cartItemId : element.cartItemId
          }
      })
  });
  res.status(200).send();
}

//Remove from cart
exports.placeOneOrder = async (req,res) => {
  let data = req.body;

  let item = {
    "userId" : data.userId,
    "ProductName" : data.productName,
    "quantity" : data.quantity,
    "totalPrice" : data.price * data.quantity,
    "Status" : "not delivered",
    "price" : data.price
}

await OrderTemp.create(item)
.then(data =>{
    res.status(200).send();
})
.catch(err => {
    res.status(500).send();
})
}
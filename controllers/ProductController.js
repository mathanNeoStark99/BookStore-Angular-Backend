const database = require("../models")
const Product = database.product;


//create New Product
exports.addProduct = async (req,res) => {
    let product = req.body;
    console.log(product);
    await Product.create(product)
        .then(data => {
          res.status(200).send();
        })
        .catch( err => {
          res.status(500).send();
        });
}

//get all products
exports.getAllProducts = async (req,res) => {
  await Product.findAll()
      .then(data => {
        res.status(200).send(data);
      })
      .catch( err => {
        res.status(500).send(err);
      });
}

//get product by Id
exports.getProductById = async (req,res) => {
  let id = req.params.id;
  let data = await Product.findOne({ where:{
    productId:id
  }});
      if(data != null){
        res.status(200).send(data);
      }
      else{
        res.status(500).send();
      }
}

//update product
exports.updateProduct = async (req,res) => {
  let id = req.params.id;
  let data = req.body;
  await Product.update(data,{where: { productId: id }})
    .then( data =>{
      res.status(200).send();
    })
    .catch(err =>{
      res.status(500).send();
    })
}

//delete product by id
exports.deleteProduct = async (req,res) => {
  let id = req.params.id;
  await Product.destroy({where: { productId: id }})
    .then( data =>{
      res.status(200).send();
    })
    .catch(err =>{
      res.status(500).send();
    })
}

//delete product by name
exports.deleteProductByName = async (req,res) => {
  let name = req.params.name;
  await Product.destroy({where: { productName: name }})
    .then( data =>{
      res.status(200).send();
    })
    .catch(err =>{
      res.status(500).send();
    })
}
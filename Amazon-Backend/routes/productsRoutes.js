const express=require('express');
const productsController=require('../controllers/productController')
const productRouter=express.Router();

productRouter.route('/')
.get(productsController.getAllProducts)
.post(productsController.addProduct)
productRouter.route('/:title')
.get(productsController.getOneProducts)
.put(productsController.replaceProduct)
.patch(productsController.updateProduct)
.delete(productsController.deleteProduct)

module.exports={
    productRouter
}

// 6620ac23aa22554922034cf7
// 6620ac23aa22554922034cf7
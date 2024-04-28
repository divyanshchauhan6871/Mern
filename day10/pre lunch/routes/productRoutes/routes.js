const express = require('express')
// const { getAllProduct, insertProduct, putProduct, patchProduct, delProduct } = require('./controller/productController/product');
const { getAllProduct, insertProduct, putProduct, patchProduct, delProduct } = require('../../controller/productController/product');

const productsRouter = express.Router()



productsRouter.route('/')
    .get(getAllProduct)
    .post(insertProduct)
productsRouter.route('/:id')
    .put(putProduct)
    .patch(patchProduct)
    .delete(delProduct)

module.exports={productsRouter}
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title: {
        type:String,
        unique:true,
        require:true
    },
    price: {
        type:Number,
        require:true
    },
    description: {
        type:String
    },
    images:[String],
    createdAt:{
        type : Date,
        default : new Date()
    },
    unpdatedAt:{
        type : Date,
        default : new Date()
    }
});

const productModel = mongoose.model('Product', productSchema);  //creating a model of products using the schema defined above


// const  testProduct =new productModel({
//     title: 'Titan Watch',
//     price: 1000,
// });

// testProduct.save().then((res)=>{
//     console.log(res)
// })

module.exports={productModel}

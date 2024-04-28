const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    review:{
        type:String,
        require:true
    }
});

const ReviewModel = mongoose.model('review', reviewSchema); 

module.exports=ReviewModel
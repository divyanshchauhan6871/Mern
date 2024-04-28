const express=require('express');
const reviewController=require('../controllers/reviewController')
const reviewRouter=express.Router();

reviewRouter.route('/')
.get(reviewController.getAllreviews)
.post(reviewController.addreview)
reviewRouter.route('/:name')
.put(reviewController.replacereview)
reviewRouter.route('/:id')
.patch(reviewController.updatereview)
.delete(reviewController.deletereview)

module.exports={
    reviewRouter
}
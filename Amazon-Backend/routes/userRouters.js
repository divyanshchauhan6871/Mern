const express=require('express');
const usersController=require('../controllers/userControllers')
const userRouter=express.Router();

userRouter.route('/')
.get(usersController.getAllusers)
.post(usersController.adduser)
userRouter.route('/:name')
.put(usersController.replaceuser)
userRouter.route('/:id')
.patch(usersController.updateuser)
.delete(usersController.deleteuser)

module.exports={
    userRouter
}
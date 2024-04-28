const express = require('express')
// const usersFunc = require('./controller/usersController/users')
const usersFunc = require('../../controller/usersController/users')


const usersRouter = express.Router()

usersRouter.route('/')
    .get(usersFunc.workInProgress)
    .post(usersFunc.workInProgress)
    .put(usersFunc.workInProgress)
    .patch(usersFunc.workInProgress)

    module.exports={
        usersRouter
    }
const express = require('express');
const mongoose = require('mongoose');
const productsRouterrr = require('./routes/productsRoutes')
const usersRouterrr = require('./routes/userRouters')
const reviewRouterrr = require('./routes/reviewRouter')
const app = express()
app.use(express.json())
// const test=require('./models/productsModel')

app.use('/api/products', productsRouterrr.productRouter)
app.use('/api/users',usersRouterrr.userRouter)
app.use('/api/reviews',reviewRouterrr.reviewRouter)

// MernTech waali organization me Amazon_Backend database me products, users, reviews naam se collections banayein hue hai

const URL_Mongo = "mongodb+srv://divyanshworkprivate:alsk1029@cluster0.fhap6zb.mongodb.net/Amazon_Backend?retryWrites=true&w=majority&appName=Cluster0"
// const databaseuserName = "divyanshworkprivate"
// const databasepassword = "alsk1029"
// const databasename = "Amazon_Backend"
// let URL = URL_Mongo.replace('<username>', databaseuserName)
// URL = URL.replace('<password>', databasepassword)
// URL = URL.replace('_databaseName_', databasename)

// mongodb+srv://divyanshworkprivate:alsk1029@cluster0.yv3r1ya.mongodb.net/

mongoose.connect(URL_Mongo)
    .then(() => { console.log("MongoDB Connected") })
    .catch(() => { console.log("MongoDB could not be connected") })



app.listen(1400,()=>{
    console.log("App Started")
})
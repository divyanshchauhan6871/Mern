const productRouter=require('./routes/productRoutes/routes.js')
const userRouter=require('./routes/userRouter/usersroute')
const express = require('express');
const app = express();
app.use(express.json())
app.use('/api/products',productRouter.productsRouter)
app.use('/api/users',userRouter.usersRouter)


    
 















































// const authentication = app.use((req, res, next) => {

    
    //     const pass = + req.query.pass
    //     console.log(pass)
    //     if (pass === 123)
    //         next();
    //     else res.status(401).send("Not authorized")
    // })
    // .tolocalstring
    
    // app.route('/api/products')
    //     .get()
    //     .post
    // app.route('/api/products/:id')
    //     .put()
    //     .patch()
    //     .delete()
    
    // app.get('/api/products/home', homepage)
    
    // app.route('/api/products')
    // .get(getAllProduct)
    // .post(insertProduct)
    // app.route('/api/products/:id')
    // .put(putProduct)
    // .patch(patchProduct)
    // .delete(delProduct)
    
    
    
    // app.route('/api/users')
    // .get(usersFunc.workInProgress)
    // .post(usersFunc.workInProgress)
    // .put(usersFunc.workInProgress)
    // .patch(usersFunc.workInProgress)
    
    

// app.get('/api/products', getAllProduct)
// app.post('/api/products', insertProduct);
// app.put('/api/products/:id', putProduct)
// app.patch('/api/products/:id', patchProduct)
// app.delete('/api/products/:id', delProduct)


// app.get('/api/users', usersFunc.workInProgress)
// app.post('/api/users', usersFunc.workInProgress)
// app.put('/api/users', usersFunc.workInProgress)
// app.patch('/api/users', usersFunc.workInProgress)



app.listen(1400);




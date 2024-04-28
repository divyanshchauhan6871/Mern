const model = require("../models/productsModel.js");

const getAllProducts = async (req, res) => {
  try {
    // const q=req.query;
    // console.log(q)
    // const data = await model.productModel.find(q);
    // const data = model.productModel.find(q);
    
    // here we need to keep in mind that we need to put awati in this so that 
    // we can then chian the querry in the manner to get the multiple operators on the querry
    
    // http://localhost:1400/api/products/?title=bat&price[$gte]=1200
    // the above line is used for putting the putting the various parameters for values putting in an object for greater than or less than
    const q=req.query;
    let {sort="price",page=1,pagesize,fields="",...quer}=q
    sort=sort.replace(","," ")
    let querry = model.productModel.find(quer)
    .sort(sort)
    // .sort('price -title')
    // .sort('-price')
    page=pagesize*(page-1)
    querry=querry.skip(page).limit(pagesize)
    fields=fields.replace(","," ");
    querry.select(fields)
    const data=await querry;

    res.json({
      status: "succes",
      result: data.length,
      data: {
        product: [data],
      },
    });
  } catch {
    res.status(400).json({
      status: "failed",
    });
  }
};

const getOneProducts = async (req, res) => {
  const toBeReplaced = await model.productModel.findOne({
    title: req.params.title,
  });
  console.log(toBeReplaced);
  res.json({
    status: "succes",
    result: 0,
    data: {
      product: [toBeReplaced],
    },
  });
};

const addProduct = async (req, res) => {
  try {
    const insertobj = req.body;
    delete insertobj._id;
    // or here we can use spread opeator or rest operator ab inke baar me padh lena

    await model.productModel.create(insertobj);
    res.json({
      response: [insertobj],
    });
  } catch (err) {
    console.log("some error occured");
  }
};

const replaceProduct = async (req, res) => {
  try {
    const name = req.params.title;
    // const obj = { ...req.body, name };
    const obj = req.body;
    const data = await model.productModel.findOneAndReplace(
      { title: name },
      obj
    );
    console.log(data);
    res.json({
      status: "succes",
      result: 0,
      data: {
        product: [data],
      },
    });
  } catch {
    console.log("some error in replacing");
  }
};

const updateProduct = async (req, res) => {
  try {
    const name = req.params.title;
    // const toBeReplaced = await model.productModel.findOne({ title: name });
    // const obj ={...req.body,...toBeReplaced};
    const data = await model.productModel.findOneAndUpdate(
      { title: name },
      req.body
    );
    console.log(data);
    res.json({
      status: "succes",
      result: 0,
      data: {
        product: [data],
      },
    });
  } catch {
    res.json({
      status: "failed",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.title;
    const obj = await model.productModel.findByIdAndDelete({ _id: id });
    res.status(200).json(obj);
  } catch {
    res.status(501).json({
      status: "failed",
    });
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  getOneProducts,
  replaceProduct,
  updateProduct,
  deleteProduct,
};

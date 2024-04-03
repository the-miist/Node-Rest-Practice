let product = require("../models/productModel");

let getProducts = async (req, resp)=>{
    let page = Number(req.query.page);
  let limit = Number(req.query.limit);

  if (page == 0) {
    page = 1;
  }
  if (limit == 0) {
    limit = 1;
  }

  let skip = (page - 1) * limit;

  resp.status(200).send(
    await product
      .find({}, { __v: 0, _id: 0 })
      .sort([["updated_date", -1]])
      .skip(skip)
      .limit(limit)
  );
};

let saveProduct = async (req, resp)=>{
    try {
        await product.create(req.body);
        resp
          .status(201)
          .send(
            await product.find(
              {},
              { __v: 0, _id: 0, created_date: 0, updated_date: 0 }
            )
          );
      } catch (error) {
        console.log(error);
        resp.status(500).send("Something went wrong!");
      }
};

let deleteProduct = async (req, resp)=>{
 
    try {
        await product.deleteOne({ id: req.params.id });
        resp
          .status(200)
          .send(
            await product.find(
              {},
              { __v: 0, _id: 0, created_date: 0, updated_date: 0 }
            )
          );
      } catch (error) {
        console.log(error);
        resp.status(500).send("Something went wrong!");
      }
};

let updateProduct = async (req, resp)=>{
    try {
        await product.updateOne({ id: req.params.id }, { $set: req.body });
        resp
          .status(200)
          .send(
            await product.find(
              {},
              { __v: 0, _id: 0, created_date: 0, updated_date: 0 }
            )
          );
      } catch (error) {
        console.log(error);
        resp.status(500).send("Something went wrong!");
      }
};
module.exports = {getProducts, saveProduct, deleteProduct, updateProduct}
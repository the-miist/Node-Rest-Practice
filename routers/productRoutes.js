let express = require("express");
let productRouter = express.Router();
let {getProducts, saveProduct, deleteProduct, updateProduct} = require("../controller/productController");

productRouter.get("/products", getProducts)

productRouter.post("/products", saveProduct)

productRouter.delete("/products/:id", deleteProduct)

productRouter.put("/products/:id", updateProduct)

module.exports = productRouter
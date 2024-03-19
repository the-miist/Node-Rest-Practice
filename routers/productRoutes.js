let express = require("express");
let { verifyToken } = require("../controller/userController");
let productRouter = express.Router();
let {
  getProducts,
  saveProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/productController");

productRouter.get("/products", verifyToken, getProducts);

productRouter.post("/products", verifyToken, saveProduct);

productRouter.delete("/products/:id", verifyToken, deleteProduct);

productRouter.put("/products/:id", verifyToken, updateProduct);

module.exports = productRouter;
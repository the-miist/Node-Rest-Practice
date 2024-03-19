let express = require("express");
let productRouter = require("./routers/productRoutes")
let mongoose = require("mongoose")
let userRouter = require("./routers/userRouter");

let app = express();
app.use(express.json());
app.use(productRouter);
app.use(userRouter);

function connectMongo() {
    let url =
    "mongodb+srv://gopalchoudhary493:gopal@nodejs-e-commerce.4wsmbqx.mongodb.net/?retryWrites=true&w=majority&appName=nodejs-e-commerce";
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to mongodb");
    })
    .catch(() => {
      console.log("Something went wrong while conmnection db");
    });
}

app.listen(9000, ()=>{
    console.log("Server started");
    connectMongo();
})
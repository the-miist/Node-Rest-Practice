let product = require("../models/productModel");

// let products = [
//     {
//         id:101,
//         type:"tshirt",
//         brand:"Allen solly",
//         quantity: 4,
//         price: 1000
//     },
//     {
//         id:102,
//         type:"shirt",
//         brand:"Polo",
//         quantity: 3,
//         price: 499
//     },
//     {
//         id:103,
//         type:"denim",
//         brand:"Dennis lingo",
//         quantity: 2,
//         price: 1000
//     }
// ]

let getProducts = async (req, resp)=>{
    resp.status(200).send(await product.find({},{__v:0, _id:0}));
}

let saveProduct = async (req, resp)=>{
    try {
        await product.create(req.body);
        resp.status(201).send(await product.find({},{__v:0, _id:0}))
    } catch(error) {
        resp.status(500).send("Something went wrong!")
    }

    
}

let deleteProduct = async (req, resp)=>{
    // products = products.filter((p)=>{
    //     return p.id!=req.params.id;
    // }); 
    try {
        await product.deleteOne({id:req.params.id})
        resp.status(200).send(await product.find({},{__v:0, _id:0}));
    } catch(error) {
        console.log(error);
        resp.status(500).send("Something went wrong!")
    }
}

let updateProduct = async (req, resp)=>{
    // for(let i=0; i<products.length; i++) {
    //     if(products[i].id==req.params.id) {
    //         products[i].brand = req.body.brand;
    //         products[i].price = req.body.price;
    //         products[i].quantity = req.body.quantity;
    //         products[i].type = req.body.type;
    //         break;
    //     }
    // }

    try {
        await product.updateOne({id: req.params.id},{$set:req.body})
        resp.status(200).send(await product.find({},{__v:0, _id:0}));
    } catch(error) {
        console.log(error);
        resp.status(500).send("Something went wrong!")
    }

}
module.exports = {getProducts, saveProduct, deleteProduct, updateProduct}
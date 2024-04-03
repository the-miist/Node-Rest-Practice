let mongoose = require("mongoose");

let productSchema = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
},
{
    timestamps: {
        createdAt: "created_date",
        updatedAt: "updated_date",
      }, 
})

let product = mongoose.model("product", productSchema);

module.exports = product;
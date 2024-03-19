let mongoose = require("mongoose");

let productSchema = mongoose.Schema({
    id :{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
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
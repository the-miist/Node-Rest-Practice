let mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true
    },
    productsInCart : {
      type: [],
      required: false
    },
    products : {
      type: [],
      required: false
    }
  },
  {
    timestamps: {
      createdAt: "created_date",
      updatedAt: "updated_date",
    },
  }
);

let userModel = mongoose.model("users", userSchema);

module.exports = userModel;
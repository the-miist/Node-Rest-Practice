let mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    id: {
      type: Number,
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
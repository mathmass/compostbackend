const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema(    {
    username: String,
    email: String,
    password: String,
    business_name: String,
    pounds: Number,
    total_mtco2e_footprint: Number,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;

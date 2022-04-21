const mongoose = require("mongoose");

const Collection = mongoose.model(
  "Collection",
  new mongoose.Schema({
    business_id: String,
    pounds: String,
    wasteType: String,
    hazardous: Boolean,
    operation: String,
  })
);

module.exports = Collection;

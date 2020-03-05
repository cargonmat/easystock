const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    name: String,
    symbol: String,
    close: Number,
    prevClose: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Company = mongoose.model("Company", companySchema);
module.exports = Company;

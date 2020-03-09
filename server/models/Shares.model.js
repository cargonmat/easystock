const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sharesSchema = new Schema(
  {
    name: String,
    symbol: String,
    close: Number,
    prevClose: Number,
    users: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Shares = mongoose.model("Shares", sharesSchema);
module.exports = Shares;

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    mrp: { type: Number, required: true },
    discount: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    c: { type: String, required: true }, 
    images: [String], // Cloudinary URLs
    stock: { type: Number, default: 0 }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
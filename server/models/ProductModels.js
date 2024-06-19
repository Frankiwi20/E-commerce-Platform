const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: String, required: true },
    review_count: { type: String, required: true },
    url: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

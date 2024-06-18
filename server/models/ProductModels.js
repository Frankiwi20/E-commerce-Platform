const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true }, // Link to the product on the original site
    category: { type: String, required: true },
    brand: { type: String, required: true },
    stock: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

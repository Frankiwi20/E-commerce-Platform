const express = require('express');
const router = express.Router();
const Product = require('../models/ProductModels'); // Ensure the correct path to your Product model

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new product (for demonstration purposes, later this can be an admin feature)
router.post('/', async (req, res) => {
    const { name, description, price, image, link, category, brand, stock } = req.body;

    if (!name || !description || !price || !image || !link || !category || !brand || !stock) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const product = new Product({
        name,
        description,
        price,
        image,
        link,
        category,
        brand,
        stock,
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

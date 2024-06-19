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

// Get a single product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new product (for demonstration purposes, later this can be an admin feature)
router.post('/', async (req, res) => {
    const { title, price, rating, review_count, url } = req.body;

    if (!title || !price || !rating || !review_count || !url) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const product = new Product({
        title,
        price,
        rating,
        review_count,
        url
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

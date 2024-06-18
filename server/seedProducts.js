// seedProducts.js
const mongoose = require('mongoose');
const Product = require('./models/ProductModels'); // Ensure this path is correct based on your directory structure
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const products = [
    {
        name: 'Laptop 1',
        description: 'A high-performance laptop',
        price: 999.99,
        image: 'path/to/image1.jpg',
        link: 'https://www.bestbuy.com/site/laptop1',
        category: 'Laptops',
        brand: 'Brand A',
        stock: 10
    },
    {
        name: 'Laptop 2',
        description: 'A budget-friendly laptop',
        price: 499.99,
        image: 'path/to/image2.jpg',
        link: 'https://www.target.com/laptop2',
        category: 'Laptops',
        brand: 'Brand B',
        stock: 20
    },
    {
        name: 'Laptop 3',
        description: 'A laptop for everyday use',
        price: 699.99,
        image: 'path/to/image3.jpg',
        link: 'https://www.microcenter.com/laptop3',
        category: 'Laptops',
        brand: 'Brand C',
        stock: 15
    }
];

const addProducts = async () => {
    try {
        await Product.insertMany(products);
        console.log('Products added successfully!');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error adding products:', error);
    }
};

addProducts();

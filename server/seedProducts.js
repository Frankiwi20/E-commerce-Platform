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
        title: 'Apple 2024 MacBook 15-inch Laptop',
        price: '$999.00',
        rating: '4.5',
        review_count: '250',
        url: 'https://www.amazon.com/Apple-2024-MacBook-15-inch-Laptop/dp/B0CX23GFMJ'
    },
    {
        title: 'Apple 2024 MacBook 13-inch Laptop',
        price: '$899.00',
        rating: '4.2',
        review_count: '150',
        url: 'https://www.amazon.com/Apple-2024-MacBook-13-inch-Laptop/dp/B0CX22ZW1T'
    },
    {
        title: 'Apple MacBook Laptop 12-core',
        price: '$1099.00',
        rating: '4.7',
        review_count: '300',
        url: 'https://www.amazon.com/Apple-MacBook-Laptop-12-core/dp/B0CM5KXTND'
    },
    {
        title: '2022 Apple MacBook Laptop',
        price: '$1199.00',
        rating: '4.6',
        review_count: '400',
        url: 'https://www.amazon.com/2022-Apple-MacBook-Laptop/dp/B0B3CDZLTB'
    },
    {
        title: 'Apple MacBook Pro Laptop M3 Pro',
        price: '$1299.00',
        rating: '4.8',
        review_count: '500',
        url: 'https://www.amazon.com/Apple-MacBook-Pro-Laptop-M3-Pro/dp/B0CM5KXTND'
    },
    {
        title: 'HP Pavilion Business Touchscreen',
        price: '$999.00',
        rating: '4.3',
        review_count: '350',
        url: 'https://www.amazon.com/HP-Pavilion-Business-Touchscreen-Processor/dp/B0C91Q3YBL'
    },
    {
        title: 'HP Touchscreen i7-13700H Processor',
        price: '$1099.00',
        rating: '4.4',
        review_count: '450',
        url: 'https://www.amazon.com/HP-Touchscreen-i7-13700H-Processor-Backlit/dp/B0CFCJXF4D'
    },
    {
        title: 'HP Pavilion Business Touchscreen Processor',
        price: '$899.00',
        rating: '4.5',
        review_count: '550',
        url: 'https://www.amazon.com/HP-Pavilion-Business-Touchscreen-Processor/dp/B0C7JBSZ7G'
    },
    {
        title: 'HP Newest ENVY Laptop',
        price: '$1199.00',
        rating: '4.6',
        review_count: '600',
        url: 'https://www.amazon.com/HP-Newest-ENVY-Laptop/dp/B0D64R2BSM'
    },
    {
        title: 'HP Laptop',
        price: '$1299.00',
        rating: '4.7',
        review_count: '700',
        url: 'https://www.amazon.com/HP-Laptop/dp/B0D5M5FSSV'
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

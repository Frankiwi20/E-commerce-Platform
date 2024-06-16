import React from 'react';
import { Link } from 'react-router-dom';
import './products.css';

const products = [
    { id: 1, name: 'Product 1', price: '$29.99', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Product 2', price: '$39.99', image: '/path/to/image2.jpg' },
    { id: 3, name: 'Product 3', price: '$49.99', image: '/path/to/image3.jpg' },
];

function Products() {
    return (
        <div className="products-container">
            <h1>Products</h1>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <Link to={`/product/${product.id}`} className="details-link">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;

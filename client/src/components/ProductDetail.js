import React from 'react';
import './ProductDetail.css';

function ProductDetail() {
    return (
        <div className="product-detail-container">
            <h1>Product Name</h1>
            <div className="product-detail">
                <img src="product-image-url" alt="Product Name" />
                <div className="product-info">
                    <p><strong>Price:</strong> $100</p>
                    <p><strong>Description:</strong> This is a detailed description of the product.</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

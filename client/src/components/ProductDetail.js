import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product details:", error);
                setError("Failed to load product details. Please try again later.");
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="product-detail-container">
            <h1>{product.title}</h1>
            <div className="product-detail">
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                    <p><strong>Price:</strong> ${parseFloat(product.price.replace('$', '')).toFixed(2)}</p>
                    <p><strong>Rating:</strong> {product.rating}</p>
                    <p><strong>Reviews:</strong> {product.review_count}</p>
                    <a href={product.url} target="_blank" rel="noopener noreferrer">View on Amazon</a>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;


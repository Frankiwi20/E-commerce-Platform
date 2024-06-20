import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './products.css';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                const productsWithFormattedPrice = response.data.map(product => ({
                    ...product,
                    price: parseFloat(product.price.replace('$', '')) || 0
                }));
                setProducts(productsWithFormattedPrice);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const groupedProducts = [];
    for (let i = 0; i < products.length; i += 5) {
        groupedProducts.push(products.slice(i, i + 5));
    }

    return (
        <div className="products-container">
            <h1>Products</h1>
            <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
                {groupedProducts.map((group, index) => (
                    <div key={index} className="products-grid">
                        {group.map(product => (
                            <div key={product._id} className="product-card">
                                <img src={product.image} alt={product.name} />
                                <h2>{product.title}</h2>
                                <p>{`$${product.price.toFixed(2)}`}</p>
                                <p>Rating: {product.rating}</p>
                                <p>Reviews: {product.review_count}</p>
                                <Link to={`/product/${product._id}`} className="details-link">View Details</Link>
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Products;


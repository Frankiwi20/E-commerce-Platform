import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.css';

function UserProfile() {
    const [userData, setUserData] = useState({ name: '', email: '' });
    const [orderHistory, setOrderHistory] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            try {
                const res = await axios.get('/api/user', { headers: { 'x-auth-token': token } });
                setUserData(res.data);
            } catch (error) {
                console.error('Error fetching user data:', error.response ? error.response.data : error.message);
            }
        };

        const fetchOrderHistory = async () => {
            const token = localStorage.getItem('token');
            try {
                const res = await axios.get('/api/orders', { headers: { 'x-auth-token': token } });
                setOrderHistory(res.data);
            } catch (error) {
                console.error('Error fetching order history:', error.response ? error.response.data : error.message);
            }
        };

        fetchUserData();
        fetchOrderHistory();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const res = await axios.put('/api/user', userData, { headers: { 'x-auth-token': token } });
            setUserData(res.data);
            setEditMode(false);
        } catch (error) {
            setError('Failed to update user data');
            console.error('Error updating user data:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="user-profile-container">
            <h1>User Profile</h1>
            {error && <p className="error-message">{error}</p>}
            {editMode ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={userData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <div>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </div>
            )}
            <div className="order-history-container">
                <h2>Order History</h2>
                {orderHistory.length > 0 ? (
                    <ul>
                        {orderHistory.map((order) => (
                            <li key={order._id}>
                                <p><strong>Order ID:</strong> {order._id}</p>
                                <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                                <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
                                <p><strong>Items:</strong></p>
                                <ul>
                                    {order.items.map((item) => (
                                        <li key={item._id}>
                                            {item.title} - ${item.price.toFixed(2)} x {item.quantity}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
        </div>
    );
}

export default UserProfile;

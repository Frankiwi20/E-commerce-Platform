import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';

function UserProfile() {
    const [userData, setUserData] = useState({ name: '', email: '' });
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            try {
                const res = await axios.get('/api/user', { headers: { 'x-auth-token': token } });
                setUserData(res.data);
            } catch (error) {
                setError('Failed to fetch user data');
                console.error('Error fetching user data:', error.response ? error.response.data : error.message);
            }
        };
        fetchUserData();
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
        </div>
    );
}

export default UserProfile;

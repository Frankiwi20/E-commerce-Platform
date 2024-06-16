import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/login', formData);
            console.log('Login success:', res.data);
            localStorage.setItem('token', res.data.token);
            // Redirect to a protected route or home page
        } catch (err) {
            console.error('Login error:', err.response.data);
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    );
}

export default Login;

// Home.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    const handleRegister = () => {
        history.push('/register');
    };

    const handleLogin = () => {
        history.push('/login');
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <h2>About Panpaliya Traders</h2>
                <p>Information about the business will be entered here.</p>
            </div>
            <div style={{ flex: 1 }}>
                <button onClick={handleRegister}>Register</button>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Home;

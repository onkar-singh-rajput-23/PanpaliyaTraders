// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        // Perform any necessary actions here
        history.push('/otp-authentication');
    };

    return (
        <div>
            <h2>Login Page</h2>
            <input 
                type="text" 
                placeholder="Enter User ID/Email ID/Phone Number" 
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Enter Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;

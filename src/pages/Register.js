// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [phone, setPhone] = useState('');
    const nevigate = useNavigate();

    const handleVerification = () => {
        // Perform any necessary actions here
        nevigate('/verify');
    };

    return (
        <div>
            <h2>Registration Page</h2>
            <input 
                type="text" 
                placeholder="Enter Phone Number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={handleVerification}>Get Verification Code</button>
        </div>
    );
};

export default Register;

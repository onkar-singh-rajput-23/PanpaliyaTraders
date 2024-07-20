// OTPAuthentication.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPAuthentication = ({ userName }) => {
    const [otp, setOtp] = useState('');
    const nevigate = useNavigate();

    const handleSubmit = () => {
        // Perform any necessary actions here
        nevigate('/market-place');
    };

    return (
        <div>
            <h2>Hello {userName}, enter OTP received on your number</h2>
            <input 
                type="text" 
                placeholder="Enter OTP" 
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default OTPAuthentication;

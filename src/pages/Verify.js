// Verify.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const nevigate = useNavigate();

    const handleSubmit = () => {
        // Perform any necessary actions here
        nevigate('/set-password');
    };

    const handleResendCode = () => {
        // Resend the verification code logic
    };

    return (
        <div>
            <h2>Verify Mobile Number</h2>
            <input 
                type="text" 
                placeholder="Enter Verification Code" 
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button onClick={handleResendCode}>Resend Code</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Verify;

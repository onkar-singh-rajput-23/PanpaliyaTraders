// Verify.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Verify = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const history = useHistory();

    const handleSubmit = () => {
        // Perform any necessary actions here
        history.push('/set-password');
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

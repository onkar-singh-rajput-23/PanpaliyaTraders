// OTPAuthentication.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const OTPAuthentication = ({ userName }) => {
    const [otp, setOtp] = useState('');
    const history = useHistory();

    const handleSubmit = () => {
        // Perform any necessary actions here
        history.push('/market-place');
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

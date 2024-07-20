// SetPassword.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();

    const handleSubmit = () => {
        // Perform any necessary actions here
        history.push('/agree-terms');
    };

    return (
        <div>
            <h2>Set Password</h2>
            <input 
                type="password" 
                placeholder="Enter Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Re-Enter Password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default SetPassword;

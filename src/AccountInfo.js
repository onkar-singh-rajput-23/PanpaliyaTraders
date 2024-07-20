// AccountInfo.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AccountInfo = () => {
    const [name, setName] = useState('');
    const [shopName, setShopName] = useState('');
    const [pincode, setPincode] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    const handleNext = () => {
        // Perform any necessary actions here
        history.push('/select-commodity');
    };

    return (
        <div>
            <h2>Account Info</h2>
            <input 
                type="text" 
                placeholder="Enter Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter Shop/Business Name" 
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter Pincode" 
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
            />
            <input 
                type="email" 
                placeholder="Enter Email Account" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>
                <input type="checkbox" />
                Agree for communication mail/sms
            </label>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default AccountInfo;

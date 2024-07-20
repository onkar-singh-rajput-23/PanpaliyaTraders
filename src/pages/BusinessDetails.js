// BusinessDetails.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessDetails = () => {
    const [shopName, setShopName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [shopAddress, setShopAddress] = useState('');
    const [landmark, setLandmark] = useState('');
    const [pincode, setPincode] = useState('');
    const [gstin, setGstin] = useState('');
    const nevigate = useNavigate();

    const handleSave = () => {
        // Perform any necessary actions here
        nevigate('/add-bank-details');
    };

    return (
        <div>
            <h2>Business Details</h2>
            <input 
                type="text" 
                placeholder="Enter Shop Name" 
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter Contact Person Name" 
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter Contact Person Number" 
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter Shop Address" 
                value={shopAddress}
                onChange={(e) => setShopAddress(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter Nearby Landmark" 
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter Pincode" 
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter GSTIN" 
                value={gstin}
                onChange={(e) => setGstin(e.target.value)}
            />
            {/* File uploads for documents */}
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default BusinessDetails;

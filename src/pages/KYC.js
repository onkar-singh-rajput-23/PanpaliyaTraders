// KYC.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const KYC = () => {
    const nevigate = useNavigate();

    const handleSave = () => {
        // Perform any necessary actions here
        nevigate('/manage-team');
    };

    return (
        <div>
            <h2>KYC Page</h2>
            <button>Upload Uddhyam Aadhar</button>
            <button>Upload GST Certificate</button>
            <button>Upload FSSAI Registration</button>
            <button>Upload Current Account Cheque</button>
            <button>Upload Shop & Establishment License</button>
            <button>Upload Other Shop Document</button>
            <button>I don't have any documents, Need Help Contact Us</button>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default KYC;

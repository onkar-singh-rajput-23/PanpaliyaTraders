// AddBankDetails.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBankDetails = () => {
    const [accountName, setAccountName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [accountType, setAccountType] = useState('');
    const nevigate = useNavigate();

    const handleSave = () => {
        // Perform any necessary actions here
        nevigate('/kyc');
    };

    return (
        <div>
            <h2>Add Bank Details</h2>
            <input 
                type="text" 
                placeholder="Enter Account Name" 
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter Account Number" 
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Confirm Account Number" 
                value={confirmAccountNumber}
                onChange={(e) => setConfirmAccountNumber(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter IFSC Code" 
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter Account Type" 
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
            />
            {/* File uploads for passbook/statement */}
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default AddBankDetails;

// SelectCommodity.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectCommodity = () => {
    const nevigate = useNavigate();

    const handleNext = () => {
        // Perform any necessary actions here
        nevigate('/user-details');
    };

    return (
        <div>
            <h2>Select Trading Commodity</h2>
            <table>
                <thead>
                    <tr>
                        <th>Commodity</th>
                        <th>Commodity Type</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Add rows here manually */}
                </tbody>
            </table>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default SelectCommodity;

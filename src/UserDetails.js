// UserDetails.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const UserDetails = () => {
    const history = useHistory();

    const handleLogOut = () => {
        // Perform any necessary actions here
        history.push('/business-details');
    };

    return (
        <div>
            <h2>User Details</h2>
            <div>User Name</div>
            <div>User Mobile Number</div>
            <div>User Email Account</div>
            <button onClick={handleLogOut}>Log Account from all Devices</button>
        </div>
    );
};

export default UserDetails;

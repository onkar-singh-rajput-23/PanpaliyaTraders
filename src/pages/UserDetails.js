// // UserDetails.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const UserDetails = () => {
//     const nevigate = useNavigate();

//     const handleLogOut = () => {
//         // Perform any necessary actions here
//         nevigate('/business-details');
//     };

//     return (
//         <div>
//             <h2>User Details</h2>
//             <div>User Name</div>
//             <div>User Mobile Number</div>
//             <div>User Email Account</div>
//             <button onClick={handleLogOut}>Log Account from all Devices</button>
//         </div>
//     );
// };

// export default UserDetails;
// pages/UserDetails.js
import React from 'react';

const UserDetails = () => (
  <div>
    <h1>User Details</h1>
    <p>This is the User Details page.</p>
  </div>
);

export default UserDetails;

// // // App.js

// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home'
// import Register from './pages/Register';
// import Verify from './pages/Verify';
// import SetPassword from './pages/SetPassword';
// import AgreeTerms from './pages/AgreeTerms';
// import AccountInfo from './pages/AccountInfo';
// import SelectCommodity from './pages/SelectCommodity';
// import UserDetails from './pages/UserDetails';
// import BusinessDetails from './pages/BusinessDetails';
// import AddBankDetails from './pages/AddBankDetails';
// import KYC from './pages/KYC';
// import Loginpage from './pages/Loginpage';
// import OTPAuthentication from './pages/OTPAuthentication';
// import MarketPlace from './pages/MarketPlace';

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home/>} />
//                 <Route path="/user-details" element={<UserDetails/>} />
//                 <Route path="/register" element={<Register/>} />
//                 <Route path="/verify" element={<Verify/>} />
//                 <Route path="/set-password" element={<SetPassword/>} />
//                 <Route path="/agree-terms" element={<AgreeTerms/>} />
//                 <Route path="/account-info" element={<AccountInfo/>} />
//                 <Route path="/select-commodity" element={<SelectCommodity/>} />
//                 <Route path="/business-details" element={<BusinessDetails/>} />
//                 <Route path="/add-bank-details" element={<AddBankDetails/>} />
//                 <Route path="/kyc" element={KYC} />
//                 <Route path="/login" element={<Loginpage/>} />
//                 <Route path="/otp-authentication" element={<OTPAuthentication/>} />
//                 <Route path="/market-place" element={<MarketPlace/>} /> 
//             </Routes>
//         </Router>
//     );
// };

// export default App;


// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./api/login"; // Adjust the path if necessary
import Home from "./pages/Home"; // Create a Home component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;


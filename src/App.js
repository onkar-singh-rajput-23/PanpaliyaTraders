// App.js

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Verify from './Verify';
import SetPassword from './SetPassword';
import AgreeTerms from './AgreeTerms';
import AccountInfo from './AccountInfo';
import SelectCommodity from './SelectCommodity';
import UserDetails from './UserDetails';
import BusinessDetails from './BusinessDetails';
import AddBankDetails from './AddBankDetails';
import KYC from './KYC';
import Login from './Login';
import OTPAuthentication from './OTPAuthentication';
import MarketPlace from './MarketPlace';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/verify" component={Verify} />
                <Route path="/set-password" component={SetPassword} />
                <Route path="/agree-terms" component={AgreeTerms} />
                <Route path="/account-info" component={AccountInfo} />
                <Route path="/select-commodity" component={SelectCommodity} />
                <Route path="/user-details" component={UserDetails} />
                <Route path="/business-details" component={BusinessDetails} />
                <Route path="/add-bank-details" component={AddBankDetails} />
                <Route path="/kyc" component={KYC} />
                <Route path="/login" component={Login} />
                <Route path="/otp-authentication" component={OTPAuthentication} />
                <Route path="/market-place" component={MarketPlace} />
            </Switch>
        </Router>
    );
};

export default App;


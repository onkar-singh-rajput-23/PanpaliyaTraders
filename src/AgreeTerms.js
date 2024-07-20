// AgreeTerms.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const AgreeTerms = () => {
    const history = useHistory();

    const handleAgree = () => {
        // Perform any necessary actions here
        history.push('/account-info');
    };

    return (
        <div>
            <h2>Agree Terms and Conditions</h2>
            <a href="/agreements" target="_blank">Link to Agreements</a>
            <button onClick={handleAgree}>I Agree</button>
        </div>
    );
};

export default AgreeTerms;

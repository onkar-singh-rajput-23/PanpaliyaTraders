// MarketPlace.js
import React from 'react';

const MarketPlace = ({ commodityImage }) => {
    return (
        <div>
            <h2>Market Place Home Page</h2>
            <img src={commodityImage} alt="Selected Trading Commodity" />
        </div>
    );
};

export default MarketPlace;

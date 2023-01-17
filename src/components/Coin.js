import React from 'react';

const Coin = ({name, symbol, image, marketCap, price, priceChange}) => {
    return (
        <div>
            <img src={image} alt="pic" />
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>{price.toLocaleString()}</span>
            <span>{priceChange}</span>
            <span>{marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;
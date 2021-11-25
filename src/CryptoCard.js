import './CryptoCard.css';
import React from 'react';



const CryptoCard = ({ coinData, btc }) => {
    let res = btc / coinData.circulating_supply;
    return (
        <div className="card">
            <div className="card__title">
                {coinData.name} 
                <div className="card__image"><img src={coinData.image}/></div>
                </div>
            <div className="card__body">
                <div><p>Price per token: £{coinData.current_price}</p></div>
                <div><p>Market cap: {new Intl.NumberFormat( 'en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(coinData.market_cap)}</p></div>
                <div><p>If {coinData.name} had Bitcoin's market cap of {new Intl.NumberFormat( 'en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(btc)}, one {coinData.symbol} would be worth {res > 1 ? new Intl.NumberFormat( 'en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 2 , compactDisplay: "short" }).format(res) : new Intl.NumberFormat( 'en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 7 , compactDisplay: "short" }).format(res)} an increase of {Math.ceil((btc - coinData.market_cap) / coinData.market_cap * 100)}%</p></div>  
            </div>
        </div>
    )
};

export default CryptoCard;
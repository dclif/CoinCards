import React, { useState, useEffect } from "react";
import "./App.css";
import CryptoCard from "./CryptoCard";

const ommit = ['btc', 'usdt', 'usdc', 'busd'];

function App() {
  const [allcoins, setAllcoins] = useState([]);
  const [coins, setcoins] = useState([]);
  const [btc, setbtc] = useState([])

  useEffect(() => {
    (async () => {
      let coinData;
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        coinData = await response.json();
      } catch (error) {
        console.log(error);
        coinData = [];
      }
      setAllcoins(coinData);
      setcoins(coinData);
      setbtc(coinData[0].market_cap)
    })();
  }, []);


  

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredcoins = allcoins.filter(coin => (`${coin.name}`.toLowerCase().includes(value)));
    setcoins(filteredcoins);
  }
  
  return (
    <div className="App">
      <div className="header">
      <h1>Bitcoin Market Cap Comparison
      </h1>
      <input className="search-box" onInput={filterCards} placeholder="Search..."/>
      </div>
      <div className="cards-container">
      {coins.filter(x => ommit.includes(x.symbol) ? null : x).map((coin, index) => (
        <CryptoCard key={index} coinData={coin} btc={btc}/>
        ))}
      </div>
    </div>
  );
}

export default App;

// App.js
import React, { useEffect, useState } from 'react';
import Data from './Data';
import './App.css';
import axios from 'axios';

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    

    fetchData();
  }, []); // Empty dependency array triggers the effect only once, simulating componentDidMount


  const fetchData=()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then(response => setCoins(response.data))
    
  }


  return (
    <div id='heading'>
      <h1>Crypto Currency Table</h1>
      <table>
        <thead id='thead'>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <Data key={index} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
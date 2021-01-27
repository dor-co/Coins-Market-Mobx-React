import axios from "axios";
import React, { useState, useEffect } from "react";
import Coins from "./Coins";
import './App.css'
//import Stocks from "./Stocks/Stocks";
//import StocksStore from "./Stocks/StocksStore";

function App() {

  // const Refresh = async () => {
  //   alert('hey');
  //   const response = await fetch("http://api.marketstack.com/v1/tickers?access_key=a8c3276959a85f89f26882a88ece22e6")
  //   const json = await response.data

  //   console.log(json)

  // }

  // /*put the store in Stocks component and display Stocks component to screen*/
  // return (
  //   // <Stocks store={StocksStore} />
  //   <div>
  //     <button onClick={Refresh}>refresh</button>
  //   </div>
  // )




  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('');

  //when reload the page, get data from api website. the [] in the end for taking the data only one time
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      }).catch(error => console.log(error))
  }, []);

  //in every change in the search input field, the data will change in the screen
  const handleChanged = e => {
    setSearch(e.target.value)
  }

  //change the names of the coins to lower case for expmale 'Bitcoin' to 'bitcoin' for find in search 'bit..' and change the input in the search field to lower case
  const filterConis = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLocaleLowerCase())
    )

  //reload the page every 1 minute for getting updates
  // setTimeout(function(){
  //   window.location.reload(true);
  // }, 60000);

  return (
    <div className='coins-app'>
      <h1 className='appTitle'>Test Api Coins</h1>
      <div className='coins-search'>
        <h1 className='coins-text'>search a currency</h1>
        <from>
          <input type='text' placeholder='search' className='coins-input' onChange={handleChanged}/>    
        </from>
      </div>

      {/* 'coin' from 'filterCoins' */}
      {filterConis.map(coin => {
        return (
          //get the data from 'Coins' component
          <Coins key={coin.id} 
          //data fron the json file of api, in the {..} 'coin' from 'filterCoins' dot feild in json
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol} 
          volume={coin.total_volume} 
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h} />
        )
      })}
    </div>
  );
}

export default App;
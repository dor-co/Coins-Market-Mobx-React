import React from "react";
import { observer, inject } from 'mobx-react';
import Coins from './Coins'

class CoinList extends React.Component {

  componentDidMount() {
    this.getCoins(); //call to local function getCoins()
    setInterval(this.getCoins.bind(this), 120000); //gets an update for every coin that have an update every 2 minutes
  }

  getCoins() { //call to function getCoins() from CoinStore. I can do it because this class inject("CoinsStore")
    this.props.CoinsStore.getCoins();
  }

  render() {
    return (
      <div className='coins-app'>
        <h1 className='appTitle'>Coins Market</h1>
        {/* the map() passing on all the the array coinsData from CoinsStore */}
        {this.props.CoinsStore.coinsData.map(coin => {
          return (
            //get the data from 'Coins' component call
            <Coins key={coin.id}
              //data from the json file of api, in the {..} 'coin' from map() dot feild in json
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

}

export default inject("CoinsStore")(observer(CoinList));
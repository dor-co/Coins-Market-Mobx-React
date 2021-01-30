import React from "react";
import { observer, inject } from 'mobx-react';
import Coins from './Coins'

class CoinList extends React.Component {

    componentDidMount() {
        this.getCoins();
        setInterval(this.getCoins.bind(this), 120000);
    }

    getCoins() {
        this.props.CoinsStore.getCoins();
    }

    render(){
        return (
            <div className='coins-app'>
              <h1 className='appTitle'>Test Api Coins</h1>        
              {/* 'coin' from 'filterCoins' */}
              {this.props.CoinsStore.coinsData.map(coin => {
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

}

export default inject("CoinsStore")(observer(CoinList));
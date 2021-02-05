import React from 'react';
import { observer } from 'mobx-react';
import './Coins.css';

const Coins = ({ image, name, symbol, price, volume, priceChange }) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} />
                    <h1 className='coinsText'>{name}</h1>
                    <p className='coinsText'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coinsText'>${price}</p>
                    {/* .toLocaleString() is the ',' every 3 numbers in volume */}
                    <p className='coinsText'>${volume.toLocaleString()}</p> 
                    {priceChange < 0 ? (
                        <p className='red'>{priceChange}%</p>
                    ) : (<p className='green'>{priceChange}%</p>)}
                </div>
            </div>
        </div>
    )
}

export default observer(Coins);

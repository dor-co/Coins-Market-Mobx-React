import React from 'react';
import { observer } from 'mobx-react';
import './Coins.css';

const Coins = ({ image, name, symbol, price, volume, priceChange }) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price}</p>
                    {/* .toLocaleString() is the ',' every 3 numbers in volume */}
                    <p className='coin-volume'>${volume.toLocaleString()}</p> 
                    {/* .toFixed() is the number of numbers after the dot  */}
                    {priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)}
                </div>
            </div>
        </div>
    )
}

export default observer(Coins);

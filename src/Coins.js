import React from 'react';
import { observer } from 'mobx-react';
import './Coins.css';

const Coins = ({ image, name, symbol, price, volume, priceChange }) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} />
                    <h1>{name}</h1>
                    <p>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p>${price}</p>
                    {/* .toLocaleString() is the ',' every 3 numbers in volume */}
                    <p>${volume.toLocaleString()}</p> 
                    {priceChange < 0 ? (
                        <p className='red'>{priceChange}%</p>
                    ) : (<p className='green'>{priceChange}%</p>)}
                </div>
            </div>
        </div>
    )
}

export default observer(Coins);

import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <nav>
            <h3 className='logoTitle'>App Coins</h3>
            <ul className='nav-link'>
                <Link className='link' to='/'>
                    <li>Home</li>
                </Link>
                <Link className='link' to='/pdf'>
                    <li>PDF</li>
                </Link>
                <Link className='link' to='/favorite'>
                    <li>Favorite</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
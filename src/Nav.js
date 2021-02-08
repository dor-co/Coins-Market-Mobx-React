import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

function Nav() {

    return (
        <nav>
            <h3 className='logoTitle'><GiIcons.GiCoins /> Coins Web</h3>
            <ul className='nav-link'>
                <Link className='link' to='/'>
                    <li><AiIcons.AiOutlineHome /> Home</li>
                </Link>
                <Link className='link' to='/pdf'>
                    <li><AiIcons.AiOutlineFilePdf /> PDF</li>
                </Link>
                <Link className='link' to='/favorite'>
                    <li><MdIcons.MdFavoriteBorder /> Favorite</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
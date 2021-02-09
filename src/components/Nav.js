import React from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

function Nav() {

    return (
        <nav>
            <h3 className='logoTitle'><span className='iconTitle'><GiIcons.GiCoins /></span> Coins Market</h3>
            <ul className='nav-link'>
                <Link className='link' to='/'>
                    <li><span className='icon'><AiIcons.AiOutlineHome /></span> Home</li>
                </Link>
                <Link className='link' to='/pdf'>
                    <li><span className='icon'><AiIcons.AiOutlineFilePdf /></span> PDF</li>
                </Link>
                <Link className='link' to='/favorite'>
                    <li><span className='icon'><MdIcons.MdFavoriteBorder /></span> Favorite</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
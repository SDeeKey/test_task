import React, {useState} from 'react';
import './header.scss'
import {Link} from "react-router-dom";

const Header = ({counter}) => {
    const logoPath = process.env.PUBLIC_URL + '/img/logo.png';
    const cart = process.env.PUBLIC_URL + '/img/cart.svg';


    return (
        <div className="mainHeader">
            <div className="header">
                <Link to="/">
                    <img src={logoPath} alt="logo"/>
                </Link>
                <Link to="/">Main</Link>
                <Link to="/">Menu</Link>
                <Link to="/feedback">Feedback</Link>
                <Link to="/Contacts">Contacts</Link>
                <Link className="cart_counter" to="/cart">
                    <img className='cart' src={cart} alt="cart"/>
                    <p className="counter">{counter}</p>
                </Link>

            </div>
        </div>
    );
};

export default Header;
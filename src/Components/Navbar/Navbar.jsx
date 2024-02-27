import React, { useState } from 'react';
import './Navbar.css';
import logo from "../Assets/logo.png";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>Shopper</p>
            </div>
            <div className="nav-menu-container">
                <ul className={toggleMenu ? "nav-menu responsive" : "nav-menu"}>
                    <li onClick={() => { setMenu("shop") }}>
                        <Link to='/' onClick={() => setToggleMenu(false)}>Shop</Link>
                    </li>
                    <li onClick={() => { setMenu("Men") }}>
                        <Link to='/men' onClick={() => setToggleMenu(false)}>Men</Link>
                    </li>
                    <li onClick={() => { setMenu("Women") }}>
                        <Link to='/women' onClick={() => setToggleMenu(false)}>Women</Link>
                    </li>
                    <li onClick={() => { setMenu("kids") }}>
                        <Link to='/kids' onClick={() => setToggleMenu(false)}>Kids</Link>
                    </li>
                    <li>
                        <Link to='/login' onClick={() => setToggleMenu(false)}>Login</Link>
                    </li>
                </ul>
            </div>
            <div className="nav-login-cart">
                <Link to='/cart'><img src={cart_icon} alt='' /></Link>
                <div className="nav-cart-count">0</div>
            </div>
            <div className="menu-icon" onClick={() => setToggleMenu(!toggleMenu)}>
                {toggleMenu ? (
                    <RiCloseLine color="#333" size={27} />
                ) : (
                    <RiMenu3Line color="#333" size={27} />
                )}
            </div>
        </div>
    );
}

export default Navbar;

import React, { useState } from 'react'
import './Navbar.css';
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu,setmenu]=useState("shop");
  return (
   
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>    
            <li onClick={()=>{setmenu("Men")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>    
            <li onClick={()=>{setmenu("Women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>    
            <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>    
        </ul>       
        <div className="nav-login-cart">
            <Link style={{textDecoration:'none'}} to='/login'><button>Login</button></Link>
            <Link style={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt=''/>    </Link>
            <div className="nav-cart-count">
                0
            </div>
        </div> 
    </div>
  )
}

export default Navbar
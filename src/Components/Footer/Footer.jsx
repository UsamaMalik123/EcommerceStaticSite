import React from 'react'
import './Footer.css'
import Footerlogo from '../Assets/logo_big.png'
import Instagram_icon from '../Assets/instagram_icon.png'
import Pintereset_icon from '../Assets/pintester_icon.png'
import Whatsapp_icom from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={Footerlogo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>COntract</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-social-container'>
                <img src={Instagram_icon} alt=''/>
            </div>
            <div className='footer-social-container'>
                <img src={Pintereset_icon} alt=''/>
            </div>
            <div className='footer-social-container'>
                <img src={Whatsapp_icom} alt=''/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 - ALL Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
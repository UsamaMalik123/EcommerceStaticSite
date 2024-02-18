import React from 'react'
import './Hero.css';
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import Hero_img from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVAL ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>New</p>
                    <img src={hand_icon} alt=''></img>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=''></img>
             </div>
        </div>
       
        <div className='hero-right'>
            <img className='hero-right-img' src={Hero_img}  alt=''></img>

        </div>

    </div>
  )
}

export default Hero
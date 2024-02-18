import React from 'react'
import './breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='breadcrums'>
        Home <img src={arrow_icon} alt=''/> SHOP  <img src={arrow_icon}/> {product.category} <img src={arrow_icon}/> {product.name}
    
    </div>
  )
}

export default Breadcrums
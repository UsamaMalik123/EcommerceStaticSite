import React from 'react'
import './productdisplay.css'
import start_icon from '../Assets/star_icon.png'
const ProductDisplay = (props) => {
    const {product}=props;
  return (
    <div className='ProductDisplay'>
        <div className="ProductDisplay-left">
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="ProductDisplay-img">
                <img className='ProductDisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className="ProductDisplay-right">
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img   src={start_icon} alt=''/>
                <img   src={start_icon} alt=''/>
                <img   src={start_icon} alt=''/>
                <img   src={start_icon} alt=''/>
                <p> (122)</p>
            </div>
            <div className='productdisplay-right-price'>
                <div className='productdisplay-right-price-old'>${product.old_price}</div>
                <div className='productdisplay-right-price-new'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
                Our T-shirt is made from 100% combed and ring-spun cotton, ensuring a soft and breathable feel against your skin. Experience unmatched comfort throughout the day, whether you're running errands or kicking back with friends
            </div>
            <div className='productdisplay-right-size'>
                <h4>Select size</h4>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span> Women, T-shirt, Crop top</p>
            <p className='productdisplay-right-category'><span>Tags :</span> Modern,Latest</p>
        </div>

    </div>
  )
}

export default ProductDisplay
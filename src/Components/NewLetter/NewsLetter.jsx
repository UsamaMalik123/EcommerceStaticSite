import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsLetter'>
      <h1>Get Exclusive Offers on your email</h1>
      <p>Subscribe to our News Letter and Stay Updated</p>
      <div>
        <input type="email" placeholder='Your Email Id'/>
        <button>Subscribe</button>
      </div>

    </div>
  )
}

export default NewsLetter
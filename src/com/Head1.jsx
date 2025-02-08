import React from 'react'
import amazonlogo from "../image/amazonlogo.png"
import location from '../image/location.png'
import search from '../image/search.png'
import flag from '../image/flag.png'
import cart from '../image/card.png'
import images from '../image/images.png'
import '../css/head1.css'

const Head1 = () => {
  return (
    <div className='head1'>
      <div className="maintain">
        <div className="images"><img src={images} alt="" /></div>
        <div className="imge"><img src={amazonlogo} alt="" /></div>
      </div>
      <div className="location">
        <img src={location} alt="" />
        <div className="loc-detial">
            <h6>Delivery to Villupuram</h6>
            <h5>Update Location</h5>
        </div>
      </div>
      <div className="input">
        <input type="text" placeholder='Search Amazon.in' />
      <div className="searchicon">
        <img src={search} alt="" />
      </div>
      </div>
      <div className="option">
        <img src={flag} alt="" />
        <select className='select'>
        <option value="">EN</option>
        <option value="">Tamil</option>
        <option value="">Hindi</option>
      </select>
      </div>
      <div className="loginid">
        <small>Hello,Rishi</small>
        <p>Account & List</p>
      </div>
      <div className="return">
        <small>Return</small>
        <h3>& Order</h3>
      </div>
      <div className="cart">
        <img src={cart} alt="" />
      </div>
    </div>
  )
}

export default Head1

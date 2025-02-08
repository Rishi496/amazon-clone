import React from 'react'
import bar from '../image/menu.png'
import '../css/head2.css'

const Head2 = () => {
  return (
    <div className='head2'>
      <div className="bar">
        <img src={bar} alt="" />
        <p>All</p>
      </div>
      <div className='list'>
      <ul>
        <li>Mx Player</li>
        <li>Sell</li>
        <li>Today Deal</li>
        <li>Amazon Pay</li>
        <li>Keep Shopping For</li>
        <li>Best Seller</li>
        <li>By Again</li>
        <li>Prime</li>
        <li>Mobile</li>
        <li>Cutomer Service</li>
        <li>New Releases</li>
        <li>Amazon Basics</li>
        <li>Home Improvement</li>
      </ul>
      </div>
    </div>
  )
}

export default Head2

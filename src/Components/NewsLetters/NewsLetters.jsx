import React from 'react'
import './NewsLetters.css'

const NewsLetters = () => {
  return (
    <div className='newsletters'>

        <h1>Get Exclusive Offers Email </h1>
        <p>Subscribe to our newletter and stay updated</p>

        <div>
            <input type="email" placeholder=' your E-mail id' />
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetters

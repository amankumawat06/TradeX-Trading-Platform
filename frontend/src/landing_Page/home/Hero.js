import React from 'react'
import "./Style.css"

const Hero = () => {
  return (
    <div className='container text-center'>
      <div className='row'>
          <img src='media/Images/homeHero4.png' alt='Hero Image' style={{width:"100%", height:"90%",objectFit:"contain"}}/>
          <h1 className='mt-5'>Invest in everything</h1>
          <p>Online platform to invert in Stocks, derivatives, mutual funds, and more</p>
          <button className='btn btn-primary p-2 fs-5 mt-4 mb-5 signupBtn'>Signup Now</button>
      </div>
    </div>
  )
}

export default Hero

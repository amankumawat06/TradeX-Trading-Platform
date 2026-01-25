import React from 'react'
import "./style.css"

const Hero = () => {
  return (
    <div className='container mt-5 mb-5 text-center productHero'>
      <h2>TradeX Products</h2>
      <big className='mt-3 mb-5 text-muted' style={{fontWeight:"600"}}>Sleek, modern, and intuitive trading platforms</big>
      <p className='mt-3 text-muted'> 
        Check out our 
        <a href='#' style={{textDecoration:"none"}} className='fs-6 mb-5'> investment offerings →</a>
      </p>
    </div>
  )
}

export default Hero

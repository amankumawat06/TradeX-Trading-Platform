import React from 'react'
import "./style.css"

const Hero = () => {
  return (
    <div className='container mt-5 mb-5 text-center'>
      <div className='row aboveRow'>
        <h3>Charges</h3>
        <p className='fs-4' style={{color:"#928f8fff"}}>List of all charges and taxes</p>
      </div>
      <div className='row mt-5 pt-5 pricingContent'>
        <div className='col-lg-4 col-12'>
          <img src='media/Images/pricing01.jpeg' style={{width:"100%"}} className='img-fluid' />
          <h2 className='mb-4'>Free equity delivery</h2>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-lg-4 col-12'>
          <img src='media/Images/pricing20-2.jpg' style={{width:"100%"}} className='img-fluid' />
          <h2 className='mb-4'>Intraday and F&O trades</h2>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades</p>
        </div>
        <div className='col-lg-4 col-12'>
          <img src='media/Images/pricing01.jpeg' style={{width:"100%"}} className='img-fluid' />
          <h2 className='mb-4'>Free direct MF</h2>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero

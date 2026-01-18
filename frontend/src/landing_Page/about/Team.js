import React from 'react'
import "./style.css"

const Team = () => {
  return (
    <div className='container mt-5 mb-5 pt-5'>
      <div className='row'>
        <div className='col-lg-6 col-12 ownerImage text-center'>
          <img src='media/Images/nithinKamath.jpg' alt='OwnerImage' className='img-fluid' />
          <h3 className='mt-3 mb-2'>Kithin Kamath</h3>
          <p>Founder, CEO</p>
        </div>
        <div className='col-lg-6 col-12 mb-5 aboutContent' style={{fontSize:"18px", fontWeight:"500",lineHeight:"30px",color:"#424242"}}>
          <h4 className='mb-4'>People</h4>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>
            Playing basketball is his zen.
            </p>
            <p className='aboutLinks'>
            Connect on <a href='#'>Homepage</a> / <a href='#'>TradingQnA</a> / <a href='#'>Twitter</a>
            </p>
          </p>
        </div>
      </div>
    </div>

  )
}

export default Team

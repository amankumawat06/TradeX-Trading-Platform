import React from 'react'
import "./Style.css"

const Pricing = () => {
  return (
    <div className='container mt-5 mb-5 p-2'>
      <div className='row pricingContainer'>
        <div className='col-sm-12 col-12 col-lg-5 mt-4'>
          <h4>Unbeatable pricing</h4>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href='#' className='achorTagStyling'>See Pricing →</a>
        </div>
        <div className='col-1'></div>
        <div className='col-sm-12 col-lg-6 col-12 mt-4'>
          <div className='row text-center'>
            <div className='col-6 border pt-4 pb-4'>
              <h1>₹0</h1>
              <p>Free equity delivery and <br/> direct mutual funds</p>
            </div>
            <div className='col-6 border pt-4 pb-4'>
              <h1>₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing

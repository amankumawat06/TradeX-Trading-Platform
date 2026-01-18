import React from 'react'
import "./Style.css"

const Education = () => {
  return (
    <div className='container mb-5 mt-5'>
      <div className='row educationContainer'>
        <div className='col-lg-6 col-12'>
          <img src='media/images/education.svg' alt='Education Image' className='img-fluid educationImg'/>
        </div>
        <div className='col-lg-6 col-12 educationRightPanel'>
          <h3 className='mb-4'>Free and open market education</h3>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href='#' className='achorTagStyling pb-5'>Versity →</a>

          <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href='#' className='achorTagStyling'>TradingQ&A →</a>
                 
        </div>
      </div>
    </div>
  )
}

export default Education

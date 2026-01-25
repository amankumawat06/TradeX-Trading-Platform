import React from 'react'
import "./Style.css"

const Awards = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-12 mb-5'>
          {/* <img src='media/Images/largestBroker.svg' alt='Broker Image' className='img-fluid' /> */}
          <img src='media/Images/award.png' alt='Broker Image' className='img-fluid' />
        </div>
        <div className='col-lg-6 col-12 mt-4 mb-5 awardContent'>
          <h2 className='mb-3 heading'>Largest Stock broker in India</h2>
          <p>2+ million Tradex clients contrubite to over 15% of all retail order volums in India daily by trading and inverting in:</p>
          <div className='row mt-4'>
            <ul className='col-6'>
              <li className='p-1'>Futures and Options</li>
              <li className='p-1'>Commmodity derivatives</li>
              <li className='p-1'>Currency derivatives</li>
            </ul>
            <ul className='col-6'>
              <li className='p-1'>Stocks & IOPs</li>
              <li className='p-1'>Direct mutual funds</li>
              <li className='p-1'>Bonds</li>
            </ul>
          </div>
          <img src='media/Images/pressLogos.png' alt='Press Image' style={{width:"90%"}} className='' />

        </div>
      </div>
    </div>
  )
}

export default Awards

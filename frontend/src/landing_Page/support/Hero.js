import React from 'react'
import "./style.css"

const Hero = () => {
  return (
    <div style={{backgroundColor:"#387DE1"}}>
    <div className='container mb-4 pt-5 heroContainer'> 
      <div className='row'>
        <div className='col-lg-6 col-12 leftBox'>
          <h4 className='mb-5'>Support Portal</h4>
          <div>
            <h4>Search for an answer or browser help topics to create a ticket</h4>
            <input type='text' placeholder='Eg. how do I activate F&O, why is my order getting rejected...' className='heroInput' />
            <div className='links'>
              <a href='#'>Track account opening</a>
              <a href='#'>Track segment activation</a>
              <a href='#'>Intraday</a>
              <a href='#'>margins</a>
              <a href='#'>Kite user manual</a>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-12 rightBox'>
          <a href='#' className='mb-5 ticketLink'>Track Tickets</a>
          <div>
            <h3>Featured</h3>
            <ol>
              <li>Current Takeovers and Delisting - january 2024</li>
              <li>Latest Intraday leverages - MIS & CO</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero

import React from 'react'
import "./Style.css"

const Stats = () => {
  return (
    <div className='container mt-5 mb-5'>
        <div className='row statsContainer'>
          <div className='col-lg-6 col-12 statsContent'>
            <h3 className=''>Trust with confidence</h3>

            <div>
              <h4>Customer-first always</h4>
              <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
            </div>
            <div>
              <h4>No spam or gimmicks</h4>
              <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href='https://zerodha.com/about/philosophy' className='achorTagStyling'> Our philosophies.</a></p>
            </div>

            <div>
              <h4>The Zerodha universe</h4>
              <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>

            <div>
              <h4>Do better with money</h4>
              <p>With initiatives like <a href='#' className='achorTagStyling'>Nudge</a> and <a href='#' className='achorTagStyling'>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            
          </div>
          <div className='col-lg-6 col-12'>
            <img src='media/Images/ecosystem.png' className='img-fluid' />
            <div className='text-center statsLinks'>
              <a href='#' className="txtBold achorTagStyling">Explore our products →</a>
              <a href='#' className="txtBold achorTagStyling">Try Kite demo →</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Stats

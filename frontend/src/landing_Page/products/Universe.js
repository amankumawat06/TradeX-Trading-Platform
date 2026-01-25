import React from 'react'
import "./style.css"

const Universe = () => {
  return (
    <div className='container mt-5 mb-5 text-center text-muted'>
        <p className='mb-5' style={{margin:"110px 0 200px 0"}}><big>Want to know more about our technology stack? Check out the <span className='productLinks'><a href='#'>TradeX.tech</a></span> blog. </big></p>

        <div className='mt-5 mb-5 text-muted'>
          <h3>The TradeX Universe</h3>
          <p className='mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
        </div>

        <div className='row universeContent'>
          <div className='col-lg-4 text-center' id='fundhouse'>
            <img src='media/Images/zerodhaFundhouse.png' alt='TradeX Fund House Image' className='img-fluid' />
            <p className='mt-4 mb-5'>
              Our asset management venture
              that is creating simple and transparent index
              funds to help you save for your goals.
            </p>
          </div>
          <div className='col-lg-4' id='senseibull'>
            <img src='media/Images/sensibullLogo.svg' alt='sensibull Image' />
            <p className='mt-4 mb-5'>
              Options trading platform that lets you
              create strategies, analyze positions, and examine
              data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div className='col-lg-4' id='tijori'>
            <img src='media/Images/tijoriLogo.svg' alt='TijoriLogo' />
            <p className='mt-4 mb-5'>
              Investment research platform
              that offers detailed insights on stocks,
              sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className='row universeContent'>
          <div className='col-lg-4' id='streak'>
            <img src='media/Images/streakLogo.png' alt='Streak Image' className='img-fluid' />
            <p className='mt-4 mb-5'>
              Systematic trading platform
              that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className='col-lg-4' id='smallCase'>
            <img src='media/Images/smallcaseLogo.png' alt='Small Case Image' className='img-fluid' />
            <p className='mt-4 mb-5'>
              Thematic investing platform
              that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className='col-lg-4' id='ditto'>
            <img src='media/Images/dittoLogo.png' alt='Ditto Image'className='img-fluid' />
            <p className='mt-4 mb-5'>
              Personalized advice on life
              and health insurance. No spam
              and no mis-selling.
            </p>
          </div>
        </div>

      <div className='btn btn-primary mt-5 mb-5 signupBtn'>Sign up for free</div>
    </div>
  )
}

export default Universe

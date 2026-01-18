import React from 'react'

const CreateTicket = () => {
  return (
    <div className='container mt-5 mb-5 pt-5'>
      <div className='row'>
        <h4 className='mt-2 mb-5'>To create a ticket, select a relevent topic</h4>
        <div className='col-lg-4 col-md-6 col-12'>
            <h5><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h5>
            <div>
              <div><a href='#'>Online Account Opening</a></div>
              <div><a href='#'>Offline Account Opening</a></div>
              <div><a href='#'>Company, Partnership and HUF Account Opening</a></div>
              <div><a href='#'>NRI Account Opening</a></div>
              <div><a href='#'>Charges at Zerodha</a></div>
              <div><a href='#'>Zerodha IDFC FIRST Bank 3-in-1 Account</a></div>
              <div><a href='#'>Getting Started</a></div>
            </div>
        </div>

        <div className='col-lg-4 col-md-6 col-12'>
            <h5><i class="fa-solid fa-user"></i> Your Zerodha Account</h5>
            <div>
              <div><a href='#'>Login Credentials</a></div>
              <div><a href='#'>Account modification and Segment Addition</a></div>
              <div><a href='#'>DP ID and back details</a></div>
              <div><a href='#'>Your Profile</a></div>
              <div><a href='#'>Transfer and conversation fo shares</a></div>
            </div>
        </div>

        <div className='col-lg-4 col-md-6 col-12'>
            <h5><i class="fa-solid fa-chart-line"></i> Your Zerodha Account</h5>
            <div>
              <div><a href='#'>Margin/leverage, Product and Order types</a></div>
              <div><a href='#'>Kite Web and Mobile</a></div>
              <div><a href='#'>Trading FAQs</a></div>
              <div><a href='#'>Corportae Actions</a></div>
              <div><a href='#'>Sentinel</a></div>
              <div><a href='#'>Kite API</a></div>
              <div><a href='#'>PI and other platforms</a></div>
              <div><a href='#'>Stoke reports +</a></div>
              <div><a href='#'>GTT</a></div>
            </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-12'>
            <h5><i class="fa-solid fa-circle-dollar-to-slot"></i> Funds</h5>
            <div>
              <div><a href='#'>Adding Funds</a></div>
              <div><a href='#'>Fund Withdrawal</a></div>
              <div><a href='#'>eMandates</a></div>
              <div><a href='#'>Adding Bank Accounts</a></div>
            </div>
        </div>

        <div className='col-lg-4 col-md-6 col-12'>
            <h5><i class="fa-solid fa-circle-notch"></i> Console</h5>
            <div>
              <div><a href='#'>Reports</a></div>
              <div><a href='#'>Ledger</a></div>
              <div><a href='#'>Portfolio</a></div>
              <div><a href='#'>60 Day Challange</a></div>
              <div><a href='#'>IPO</a></div>
              <div><a href='#'>Peferal Program</a></div>
            </div>
        </div>

        <div className='col-lg-4 col-md-6 col-12'>
            <h5><i class="fa-regular fa-circle"></i> Coin</h5>
            <div>
              <div><a href='#'>Understanding Mutual Funds</a></div>
              <div><a href='#'>About Coin</a></div>
              <div><a href='#'>Buying and Selling the</a></div>
              <div><a href='#'>Starting as SIP</a></div>
              <div><a href='#'>Managing your Portfolio</a></div>
              <div><a href='#'>Coin App</a></div>
              <div><a href='#'>Moving to Coin</a></div>
              <div><a href='#'>Government Securties</a></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTicket

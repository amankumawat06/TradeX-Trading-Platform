import React from 'react'
import "./style.css"

const Brokerage = () => {
  return (
    <div className='container mb-5'>
      <hr style={{margin:"12px 0 100px 0 "}} />
      <div className='row mt-5 mb-5'>
        <div className='col-lg-8 col-12 text-muted'>
          <h4 className='text-center mb-4' style={{color:"#387DE1"}}>Brokerage Calculator</h4>
            <ul style={{lineHeight:"35px"}}>
              <li>Call & Trade and RMS auto-squreoff. Additional changes of ₹50 +GST per order.</li>
              <li>Digital contract notes will be sent via e-mail.</li>
              <li>Physical copies of contract notres,If requred,shall be charged ₹20 per contract note. Courier changes apply.</li>
              <li>For NRI amount (non-PIS), 0.5% or ₹100 per executed order for equity. (whichever is lower)</li>
              <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equlity. (whichever is lower)</li>
              <li>If the account is debit balance, any order placed will be charged ₹40 per executed order instand of ₹200 per executed order. </li>
            </ul>
        </div>
        <div className='col-lg-4 col-12 text-muted chargesList'>
          <h4 className='mb-4' style={{color:"#387DE1"}}>List of charges</h4>
        </div>
      </div>
    </div>
  )
}

export default Brokerage

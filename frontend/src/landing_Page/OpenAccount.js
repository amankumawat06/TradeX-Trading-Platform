import React from 'react'
import { Link } from 'react-router-dom'

const OpenAccount = () => {
  return (
    <div className='container text-center mt-5 pt-5 mb-5 pb-5'>
      <div className='row'>
        <div className='col'>
          <h2 style={{marginBottom:"17px"}}>Open a TradeX account</h2>
          <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
          <button className='btn btn-primary signupBtn p-2'>
          <Link to="/signup" style={{textDecoration:"none",color:"#fff"}}>
            Sign up for free
          </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OpenAccount

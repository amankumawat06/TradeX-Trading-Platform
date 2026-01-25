import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <div className='container text-center mt-5 pt-5 mb-5 pb-5'>
      <div className='row'>
        <div className='col'>
          <h1>404🧐</h1>
          <h2 style={{marginBottom:"17px"}}>The Page you requested does not exist</h2>
          <p>We couldn't find the page you were looking for. </p>
          <button className='btn btn-secondary p-2' >
            <Link to="/" style={{color:"white",textDecoration:"none"}}  className='fs-5 p-3'>Take me back to TradeX home page</Link>
          </button>
        </div>
      </div>
    </div>
    <hr />
    </div>
  )
}

export default PageNotFound

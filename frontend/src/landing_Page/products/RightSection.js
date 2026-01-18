import React from 'react'

const RightSection = ({
  productImg,
  productName,
  productDesc,
  learn
}) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-5 col-12 text-muted leftSection">
          <h3>{productName}</h3>
          <p className="mt-4 mb-4" style={{fontSize:"18px"}}>{productDesc}</p>
          <div className="mt-3 mb-4 productLinks">
            <a href={learn}>Learn →</a> 
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6 col-12">
          <img src={productImg} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default RightSection

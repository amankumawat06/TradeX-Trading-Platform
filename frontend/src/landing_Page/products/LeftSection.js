import React from "react";
import "./style.css"

const LeftSection = ({
  productImg,
  productName,
  productDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container">
      <div className="row leftContainer">
        <div className="col-lg-6 col-12">
          <img src={productImg} alt={productName} className="img-fluid" />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 col-12 text-muted leftSection">
          <h3>{productName}</h3>
          <p className="mt-4 mb-4" style={{fontSize:"18px"}}>{productDesc}</p>
          <div className="mt-3 mb-4 productLinks">
            <a href={tryDemo}>Try Demo →</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href={tryDemo}>Learn More →</a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src={googlePlay} alt="Google Play Image" className="img-fluid" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href={appStore}>
              <img src={appStore} alt="App Store Image" className="img-fluid"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;

import React from 'react'
import Hero from "./Hero"
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"
import Universe from "./Universe"

const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftSection productImg="media/Images/kite.png" productName="Kite" productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="Try Demo" learnMore="Learn More" googlePlay="media/Images/googlePlayBadge.svg" appStore="media/Images/appstoreBadge.svg" />
      <RightSection productImg="media/Images/console.png" productName="Console" productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learn="Learn" />
      <LeftSection productImg="media/Images/coin.png" productName="Coin" productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="Try Demo" learnMore="Learn More" googlePlay="media/Images/googlePlayBadge.svg" appStore="media/Images/appstoreBadge.svg" />
      <RightSection productImg="media/Images/kiteconnect.png" productName="Kite Connect API" productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learn="kite connect" />
      <Universe />
      </>
      )
}

      export default ProductPage

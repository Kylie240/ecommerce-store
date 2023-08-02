import React from 'react'
import Banner from '../components/Banner'
import Banner1 from "../images/banners/banner1.webp"
import BannerReverse from '../components/BannerReverse'
import Featured from '../components/Featured'

const Home = () => {
  return (
    <div>
      <Featured />
      <Banner 
        title="Free Shipping on $100" 
        info="Now until the end of the month, save extra on shipping when you puchase $100 or more." 
        button="Start Saving"
        img={Banner1}
      />
      <BannerReverse 
        title="Free Shipping on $100" 
        info="Now until the end of the month, save extra on shipping when you puchase $100 or more." 
        button="Start Saving"
        img={Banner1}
      />
    </div>
  )
}

export default Home
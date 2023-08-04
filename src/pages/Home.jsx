import React from 'react'
import Banner from '../components/Banner'
import Banner1 from "../images/banners/banner1.webp"
import Banner2 from "../images/banners/banner2.webp"
import BannerReverse from '../components/BannerReverse'
import Grid from '../components/Grid'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div>
      <Hero />
      <Grid />
      <Banner 
        title="Free Shipping on $100" 
        info="Now until the end of the month, save extra on shipping when you puchase $100 or more." 
        button="Start Saving"
        img={Banner1}
      />
      <Carousel header="Nike Collection" category="nike" />
      <BannerReverse 
        title="Free Shipping on $100" 
        info="Now until the end of the month, save extra on shipping when you puchase $100 or more." 
        button="Start Saving"
        img={Banner2}
      />
    </div>
  )
}

export default Home
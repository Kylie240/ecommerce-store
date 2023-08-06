import React from 'react'
import Banner from '../components/Banner'
import Banner1 from "../images/banners/banner1.webp"
import Banner2 from "../images/banners/banner2.avif"
import BannerReverse from '../components/BannerReverse'
import Grid from '../components/Grid'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div>
      <Hero />
      <Grid/>
      <BannerReverse 
        title="Brands You Love" 
        info="We carry your favorite brands, and newest styles." 
        button="Shop"
        img={Banner2}
        path="/shop/all"
      />
      <div id="nike"></div>
      <Carousel header="Nike Collection" category="nike"/>
      <Banner 
        title="Free Shipping on $100+" 
        info="Now until the end of the month, save extra on shipping when you puchase $100 or more." 
        button="Start Saving"
        img={Banner1}
        path="/shop/all"
      />
      
    </div>
  )
}

export default Home
import React from 'react'
import HeroTop from '../components/marketing/pageSection/HeroTop'
import LastProduct from '../components/marketing/pageSection/LastProduct'
import Products from '../components/marketing/pageSection/Products'
import Carousel from '../components/elements/carousel/Carousel'
import Booking from '../components/marketing/pageSection/Booking'
import Footer from '../components/marketing/pageSection/Footer'

export default function HomePages() {
  return (
    <>
    {/* <div className='bg-red-500 sm:bg-blue-500 md:bg-yellow-500 lg:bg-indigo-500 xl:bg-green-500 2xl:bg-pink-500 w-full h-20'>
      <div className='hidden md:block'>Screnn :m</div>
    </div> */}
      <HeroTop />
      <LastProduct />
      <Products />
      <Carousel />
      <Booking/> 
      <Footer/>
    </>
  )
}

import React from 'react'
import HeroTop from '../components/marketing/pageSection/HeroTop'
import LastProduct from '../components/marketing/pageSection/LastProduct'
import Products from '../components/marketing/pageSection/Products'
import Carousel from '../components/elements/carousel/Carousel'

export default function HomePages() {
  return (
    <>
      <HeroTop />
      <LastProduct />
      <Products />
      <Carousel />
    </>
  )
}

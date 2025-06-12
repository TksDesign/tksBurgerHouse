import React from 'react'
import Illustration from '../../../assets/images/background/bg-food.jpg'
import Background from 'three/src/renderers/common/Background.js'
import Container from '../../elements/Container'
import Header from './Header'
import Product from '../../../assets/images/heroTop/burger-hero-top.png'


export default function HeroTop() {
  return (
    <div className="bg-primary w-full h-screen">
       <div className="bg-repeat w-full h-full" style={{backgroundImage:`url(${Illustration})`}}>
        <Container>
            <Header/>
            <div className='bg-gray-500 w-full h-72 flex items-center'>
                <div className='bg-red-500 w-full h-full'></div>
                <div className='bg-green-500 w-full h-full'></div>
            </div>
        </Container>
       </div>
    </div>
  )
}

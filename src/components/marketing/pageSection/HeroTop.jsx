import React from 'react'
import Illustration from '../../../assets/images/background/bg-food.jpg'
import Background from 'three/src/renderers/common/Background.js'
export default function HeroTop() {
  return (
    <div className="bg-primary w-full">
       <div className="bg-repeat w-full h-full" style={{backgroundImage:`url(${Illustration})`}}>
        
       </div>
    </div>
  )
}

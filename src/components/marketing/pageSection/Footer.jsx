import React from 'react'
import Container from '../../elements/Container'
import backgroundImage from '../../../assets/images/background/bg-footer.jpg'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import logo from '../../../assets/svg/Logo-burger-house-white.svg'
import iconIg from '../../../assets/images/icon/instagram-brands.svg'
import iconFac from '../../../assets/images/icon/facebook-f-brands-solid.svg'
import iconTwi from '../../../assets/images/icon/twitter-brands.svg'
import iconWha from '../../../assets/images/icon/whatsapp-brands.svg'

export default function Footer() {
  return (
    <Container>
      <div className='relative p-5 mb-20 text-white h-full'>
        <img src={backgroundImage} alt="un plan de travail de cuisine ou l'on concoit un hambuger" className='bg-black absolute top-0 left-0 w-full h-full object-cover z-0' />
        <div className='relative  grid grid-cols-2 z-10'>
          <div className=' w-full p-5 mt-20 mb-28'>
            <img src={logo} alt="logo burger house" className='w-2/3' />
            <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae</p>
          </div>
          <div className=' h-full w-full flex flex-col items-center justify-center'>
            <div className='flex flex-col items-start'>
              <div className='flex items-center'>
                <MapPinIcon className='w-8 h-8 text-white mr-5' />
                <span className='uppercase font-extrabold text-lg tracking-tighter'>messassi yaounde-cameroun</span>
              </div>
              <div className='flex items-center mt-5'>
                <EnvelopeIcon className='w-8 h-8 text-white mr-5' />
                <span className='uppercase font-extrabold text-lg tracking-tighter'>TksDesign0@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className='relative  z-10 flex items-center justify-between'>
          <div className='uppercase font-extrabold tracking-tighter text-sm'>
           © 2023 TksDesign. All rights reserved
          </div>
          <div className="flex items-center">
            <div>
              <a href="https://instagram.com" target='_blank' rel="noopener noreferrer">
              <img src={iconIg} alt='icone instagram' className='w-7 h-7 mr-2 bg-white rounded-full p-1 hover:bg-primary animate'/>
              </a>
            </div>
            <div>
              <img src={iconFac} alt='icone Facebook' className='w-7 h-7 mr-2 bg-white rounded-full p-1 hover:bg-primary animate'/>
              
            </div>
            <div>
              <img src={iconTwi} alt='icone twitter' className='w-7 h-7 mr-2 bg-white rounded-full p-1 hover:bg-primary animate'/>
              
            </div>
            <div>
              <img src={iconWha} alt='icone whatsapp' className='w-7 h-7 mr-2 bg-white rounded-full p-1 hover:bg-primary animate'/>
              
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

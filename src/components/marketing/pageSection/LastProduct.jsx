import React from 'react'
import Container from '../../elements/Container'
import LastProduct1 from '../../../assets/images/products/LastProducts-1.jpg'
import LastProduct2 from '../../../assets/images/products/LastProducts-2.jpg'
import LastProduct3 from '../../../assets/images/products/LastProducts-3.jpg'
export default function LastProduct() {
  return (
    <div>
      <Container>
        <div className='flex items-center justify-center w-full h-full my-20 lg:px-11 text-white uppercase'>
          <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-rows-2 grid-rows-3 lg:gap-9 gap-3 w-full'>
            <div className="group relative md:row-span-2 bg-yellow-500 w-full h-full rounded-xl lg:p-7 p-4 overflow-hidden ">
              <div className='absolute z-10 top-0 left-0 rounded-xl h-full w-full bg-black opacity-20'></div>
              <img src={LastProduct1} className='absolute top-0 left-0 w-full h-full object-cover object-center rounded-xl z-0  group-hover:scale-109  duration-500' alt="un delicieux burger" srcset="" />
              <div className='relative z-10'>
                <span className='block font-bold text-lg'>Killer Burger</span>
                <span className='text-xl lg:text-2xl font-black '>Burger le plus populaire</span>
              </div>
            </div>

            <div className="group relative bg-yellow-500 w-full h-full rounded-xl lg:p-7 p-4 overflow-hidden">
              <div className='absolute z-10 top-0 left-0 rounded-xl h-full w-full bg-black opacity-20'></div>
              <img src={LastProduct2} className='absolute top-0 left-0 w-full h-full object-cover object-center rounded-xl z-0 group-hover:scale-109  duration-500' alt="deux delicieux burger" srcset="" />
              <div className='relative z-10'>
                <span className='block font-bold text-lg'>Island Burger</span>
                <span className='block text-2xl font-black'>plus de plaisir</span>
                <span className='text-xl lg:text-2xl font-black '>plus de goût</span>
              </div>
            </div>

            <div className="group relative bg-yellow-600 w-full h-full rounded-xl lg:p-7 p-4 overflow-hidden">
              <div className='absolute z-10 top-0 left-0 rounded-xl h-full w-full bg-black opacity-20'></div>
              <img src={LastProduct3} className='absolute top-0 left-0 w-full h-full object-cover object-center rounded-xl z-0 group-hover:scale-109  duration-500' alt="un plat de composition de burger" srcset="" />
              <div className='relative z-10'>
                <span className='block font-bold text-lg'>Orlando's Burger</span>
                <span className='text-xl lg:text-2xl font-black '>frais & pimente</span>
              </div>
            </div>
          </div>


        </div>
      </Container>
    </div>
  )
}

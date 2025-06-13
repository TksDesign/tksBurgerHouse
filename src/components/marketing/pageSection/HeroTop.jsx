import React from 'react'
import Illustration from '../../../assets/images/background/bg-food.jpg'
import Background from 'three/src/renderers/common/Background.js'
import Container from '../../elements/Container'
import Header from './Header'
import Product from '../../../assets/images/heroTop/burger-hero-top.png'
import Button from '../../elements/Button'


export default function HeroTop() {
    return (
        <div className="bg-primary w-full ">
            <div className="bg-repeat w-full h-screen pb-40" style={{ backgroundImage: `url(${Illustration})` }}>
                <Container>
                    {/* header */}
                    <Header />
                    {/* header */}

                    {/* sign up */}
                    <div className='w-full mt-[15%] relative '>
                        <img src={Product} alt="Un menu hamburger avec frites et coca cola." className='absolute -top-60 right-0 w-6/12 z-0' />
                        {/* circle reduction-Prise */}
                        <div className='absolute right-80 top-40 bg-red-primary rounded-full w-40 h-40 p-3'>
                            <div className='w-full h-full flex items-center justify-center rounded-full  text-white'>
                                <div className='flex flex-col text-center'>
                                    <span className='block font-extrabold'>
                                        <span className='text-6xl'>5</span>.49€
                                    </span>
                                    <span className='tracking-widest uppercase text-sm'>Seulement</span>
                                </div>
                            </div>

                        </div>
                        <div className='absolute right-80 top-40' >
                            <svg width="180" height="180">
                                <circle
                                    cx="100"
                                    cy="80"
                                    r="70"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeDasharray="10 10"
                                />
                            </svg>
                        </div>
                        {/* circle reduction-Prise */}

                        <div className='relative text-secondary uppercase z-1  '>
                            <h1 className=' mb-8 font-bold'>C'est le moment de gouter au bon goût des Hamburger </h1>
                            <h2 className='font-secondary shadowTitleSecondary'> <span className='text-8xl block'>Burger</span>
                                <span className='text-6xl'>House</span> <span className='text-4xl ml-3'>Clicks<span className='text-red-700'>&</span>collect</span> </h2>
                        </div>
                    </div>
                    {/* sign up */}
                    <Button className='mt-5' color="secondary" theme="big">
                        Creer Mon compte
                    </Button>

                </Container>
            </div>
        </div>
    )
}

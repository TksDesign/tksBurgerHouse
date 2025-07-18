import React from 'react'
import Container from '../../elements/Container'
import Assiete from '../../../assets/images/background/Assiette-burger-frites.png'
import Burger from '../../../assets/images/background/Burger.png'
import Sauce from '../../../assets/images/background/Sauce-pimente.png'
import Headind from '../../elements/displayTitles/Headind'

export default function Booking() {
    return (
        <Container>
            <div className='relative mb-20 '>
                <img src={Burger} alt="un hamburger" className='absolute -top-20 -left-30' />
                <img src={Assiete} alt="une Assiete de hamburger frite" className='absolute -bottom-52 -right-96' />
                <img src={Sauce} alt="une sauce" className='absolute bottom-0 left-0' />
                <div className='max-w-3xl mx-auto px-10 py-20'>
                    <Headind variant="h3" position="center" >
                        Réservation
                    </Headind>
                    <Headind position="center" theme="secondary" className="mt-5">
                        Reservez votre table
                    </Headind>
                    <form className='grid grid-cols-2 gap-x-7 gap-y-6 mt-20'>
                        <div>
                            <label htmlFor="name" className='block mb-2 uppercase'>Nom</label>
                            <input
                                type="text"
                                name='name'
                                id='name'
                                autoComplete='off'
                                className='w-full px-4 py-4 border border-gray-300 rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400'
                                placeholder='NOM' />
                        </div>
                           <div>
                            <label htmlFor="name" className='block mb-2 uppercase'>email</label>
                            <input
                                type="email"
                                name='email'
                                id='email'
                                autoComplete='off'
                                className='w-full px-4 py-4 border border-gray-300 rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400'
                                placeholder='TksDesign0@gmail.com' />
                        </div>
                           <div>
                            <label htmlFor="name" className='block mb-2 uppercase'>date</label>
                            <input
                                type="date"
                                name='email'
                                id='email'
                                autoComplete='off'
                                className='w-full px-4 py-4 border border-gray-300 rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400'
                                placeholder='' />
                        </div>
                           <div>
                            <label htmlFor="name" className='block mb-2 uppercase'>heure</label>
                            <input
                                type="time"
                                name='email'
                                id='email'
                                autoComplete='off'
                                className='w-full px-4 py-4 border border-gray-300 rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400'
                                placeholder='' />
                        </div>
                          <div>
                            <label htmlFor="name" className='block mb-2 uppercase'>Nombre de personne</label>
                            <input
                                type="number"
                                name='customer'
                                id='customer'
                                autoComplete='off'
                                className='w-full px-4 py-4 border border-gray-300 rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400'
                                placeholder='5' />
                        </div>
                        <div>
                            <label htmlFor='sendBooking' className='invisible block mb-2 uppercase'>
                                Reserver votre repas
                            </label>
                            <input type="button" 
                            name='sendBooking'
                            id='sendBooking'
                            className='bg-red-primary hover:bg-red-primary-hover w-full text-white font-secondary tracking-widest uppercase py-4 rounded cursor-pointer animate'
                            value="Reserver votre repas" />
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}

import React from 'react'
import Container from '../../elements/Container'
import HeadingTitle from '../../elements/displayTitles/HeadingTitle'
import Headind from '../../elements/displayTitles/Headind'
import Button from '../../elements/Button'
import Product1 from '../../../assets/images/products/Product-1.jpg'
import Product2 from '../../../assets/images/products/Product-2.jpg'
import Product3 from '../../../assets/images/products/Product-3.jpg'

export default function Products() {
    return (
        <Container>
            <HeadingTitle >
                Toujours des delecieux burger
            </HeadingTitle>
            <Headind theme="secondary" position="center">
                choississez savourez
            </Headind>

            <p className='text-center'>
                Découvrez nos burgers savoureux, préparés avec des ingrédients frais et de qualité. Commandez en ligne et profitez d’une expérience gourmande unique, à déguster sur place ou à emporter. Rejoignez-nous et laissez-vous tenter par le vrai goût du plaisir !
            </p>
            <div className='grid lg:grid-cols-3 gap-x-1 mt-20 mb-20 '>
                <div className='w-full h-full '>
                    <div className='relative w-full md:w-2/3 lg:w-full mx-auto h-96 bg-primary'>
                        <img src={Product1} alt='' className=' absolute top-0 left-0 w-full h-full object-cover z-0 ' />
                    </div>
                    <div className='flex flex-col items-center justify-center px-5 pb-5'>
                        <Headind variant="h3">
                            Burger Classique
                        </Headind>
                        <p className='text-center w-full md:w-2/3 lg:w-full mx-auto'>
                            Un burger classique avec un steak juteux, de la laitue croquante, des tomates fraîches et notre sauce spéciale.
                        </p>
                        <Button color="danger" className='font-secondary  mb-10'>
                            Ajouter au panier
                        </Button>
                    </div>
                    
                </div>
                 <div className='w-full h-full '>
                    <div className='relative w-full md:w-2/3 lg:w-full mx-auto h-96 bg-primary'>
                        <img src={Product2} alt='' className=' absolute top-0 left-0 w-full h-full object-cover z-0' />
                    </div>
                    <div className='flex flex-col items-center justify-center px-5 pb-5'>
                        <Headind variant="h3">
                            Burger Classique
                        </Headind>
                        <p className='text-center w-full md:w-2/3 lg:w-full mx-auto'>
                            Un burger classique avec un steak juteux, de la laitue croquante, des tomates fraîches et notre sauce spéciale.
                        </p>
                        <Button color="danger" className='font-secondary mb-10'>
                            Ajouter au panier
                        </Button>
                    </div>
                    
                </div>
                 <div className='w-full h-full '>
                    <div className='relative w-full md:w-2/3 lg:w-full mx-auto h-96 bg-primary'>
                        <img src={Product3} alt='' className=' absolute top-0 left-0 w-full h-full object-cover z-0' />
                    </div>
                    <div className='flex flex-col items-center justify-center px-5 pb-5'>
                        <Headind variant="h3">
                            Burger Classique
                        </Headind>
                        <p className='text-center w-full md:w-2/3 lg:w-full mx-auto '>
                            Un burger classique avec un steak juteux, de la laitue croquante, des tomates fraîches et notre sauce spéciale.
                        </p>
                        <Button color="danger" className='font-secondary mb-10'>
                            Ajouter au panier
                        </Button>
                    </div>
                    
                </div>
            </div>

        </Container>
    )
}

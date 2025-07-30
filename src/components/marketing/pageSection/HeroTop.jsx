
import Illustration from '../../../assets/images/background/bg-food.jpg'
import Container from '../../elements/Container'
import Header from './Header'
import Product from '../../../assets/images/heroTop/burger-hero-top.png'
import Button from '../../elements/Button'


export default function HeroTop() {
    return (
        <div className="bg-primary w-full ">
            <div className="bg-repeat w-full h-screen pb-20 md:pb-40" style={{ backgroundImage: `url(${Illustration})` }}>
                <Container>
                    {/* header */}
                    <Header />
                    {/* header */}

                    {/* sign up */}
                    <div className='w-full mt-10 md:mt-[15%] relative animate'>
                        <img src={Product} alt="Un menu hamburger avec frites et coca cola." className='block absolute max-sm:top-8/8 max-sm:left-1/4  max-lg:-top-0 -top-60 right-0 max-sm:w-9/12 w-6/12 z-0 animate' />
                        {/* circle reduction-Prise */}
                        <div className='block absolute right-80 max-lg:top-60 max-sm:top-85 max-sm:right-1/2 max-lg:right-1/4 top-40 bg-red-primary rounded-full w-40 h-40 p-3 '>
                            <div className='w-full h-full flex items-center justify-center rounded-full  text-white'>
                                <div className='flex flex-col text-center'>
                                    <span className='block font-extrabold'>
                                        <span className='text-6xl'>5</span>.49€
                                    </span>
                                    <span className='tracking-widest uppercase text-sm'>Seulement</span>
                                </div>
                            </div>

                        </div>
                        <div className='block absolute right-80 top-40 max-lg:top-60 max-sm:top-85 max-sm:right-1/2 max-lg:right-1/4' >
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

                        <div className='relative text-secondary uppercase z-1 text-left md:text-center lg:text-left '>
                            <h1 className=' mb-8 font-bold'>C'est le moment de gouter au bon goût des Hamburger </h1>
                            <h2 className='font-secondary shadowTitleSecondary'> <span className='text-7xl md:text-8xl block max-sm:text-4xl'>Burger</span>
                                <span className='text-5xl md:text-6xl block sm:inline-block max-sm:text-3xl'>House</span> <span className='text-4xl ml-0 sm:ml-3 max-sm:text-3xl'>Clicks<span className='text-red-700'>&</span>collect</span> </h2>
                        </div>
                    </div>
                    {/* sign up */}
                    <div className='block md:flex lg:block flex-row items-center justify-center mt-10 animate'>
                        <Button className='relative mt-5 z-3' color="secondary" theme="big">
                            Creer Mon compte
                        </Button>
                    </div>


                </Container>
            </div>
        </div>
    )
}

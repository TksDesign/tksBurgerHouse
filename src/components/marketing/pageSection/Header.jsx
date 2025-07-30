import Logo from '../../../assets/svg/Logo-burger-house.svg'
import Icone from '../../../assets/svg/ico-bag-clickAndCollect.svg'
import Button from '../../elements/Button'
import logo2 from '../../../assets/svg/picto-burger-house.svg'


export default function Header() {
    return (
        <div className=' relative flex items-center justify-between py-10 z-1 '>
            <div className='flex flex-col items-start justify-center h-20 w-full'>
                <img src={Logo} alt='Burger House App' className='w-64 hidden md:block' />
                <img src={logo2} alt='Burger House App' className='w-10 md:hidden' />

            </div>
            <div className='w-full text-secondary flex flex-col items-end justify-start'>
                <div className=' items-center justify-end hidden md:flex'>
                    <img src={Icone} alt="Burger House App" className='w-5 h-5 mr-1' />
                    <span>Commander votre repas en ligne</span>
                </div>
                <div className='flex items-center justify-end md:mt-5'>
                    {/* boutonn */}
                    <Button className="mr-2 tracking-widest" theme="small" >
                        Inscription
                    </Button >
                    <Button className=" tracking-widest" color="secondary" theme="small">
                        Connexion
                    </Button>
                </div>
            </div>
        </div>
    )
}

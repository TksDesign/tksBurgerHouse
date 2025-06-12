import React from 'react'
import Logo from '../../../assets/svg/Logo-burger-house.svg'
import Icone from '../../../assets/svg/ico-bag-clickAndCollect.svg'
import Button from '../../elements/Button'


export default function Header() {
    return (
        <div className=' relative flex items-center justify-between py-10 z-1 '>
            <div className='h-20 w-full'>
                <img src={Logo} alt='Burger House App' className='w-64' />

            </div>
            <div className='w-full  text-secondary flex flex-col items-end justify-start'>
                <div className='flex items-center justify-end'>
                    <img src={Icone} alt="Burger House App" className='w-5 h-5 mr-1' />
                    <span>Commander votre repas en ligne</span>
                </div>
                <div className='flex items-center justify-end mt-5'>
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

import React from 'react'

export default function Button({ children, className = "", color, theme }) {

    let background

    switch(color){
        case 'secondary':   background = " bg-secondary hover:bg-secondary-hover"
        break
        case 'danger': background ="bg-red-primary hover:bg-red-primary-hover"
        break
        default : background = " bg-primary hover:bg-primary-hover"
    }


    switch (theme) {
        case 'small':
            return (
                
                    <button className={`${className} ${background} px-4 py-2 uppercase shadow-xs text-white 
                         text-xs font-medium animate`}>{children}</button>
                
            )
        case 'big':
            return (
                
                    <button className={`${className} ${background} px-4 py-3 md:px-8  md:py-4 uppercase shadow-2xl text-white 
                        text-sm md:text-base font-medium animate`}>{children}</button>
                
            )
        default:
            return (
                
                    <button className={`${className} ${background} px-4 py-3 uppercase shadow-2xl text-white 
                         text-xs md:text-sm font-medium animate`}>{children}</button>
                
            )
    }


}

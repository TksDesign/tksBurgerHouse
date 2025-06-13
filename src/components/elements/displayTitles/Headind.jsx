import React from 'react'

export default function Headind(props) {
    const {
        children,
        variant,
        theme, //style
        display, //color
    } = props;

    const classDefault = "mt-5 uppercase "
    let font,color;

     switch(display){
        case "gray" :
            color = "text-gray-600"
        break;
        default:
            color = "text-secondary"
    }

    switch(theme){
        case "secondary" :
            font = "font-secondary"
        break;
        default:
            font = "tracking-tighter"
    }

    switch (variant) {
        case "h3":
            return (
                <div className='flex items-center justify-center my-5 '>
                    <h3 className={`text-2xl ${classDefault} ${font} ${color}`}>
                        {children}
                    </h3>
                </div>
            )
        default:
            return (
                <div className='flex items-center justify-center my-5'>
                    <h2 className={`${theme==="secondary" ? "text-5xl" : "text-3xl" } ${classDefault} ${font} ${color}`}>
                        {children}
                    </h2>
                </div>
            )
    }

}

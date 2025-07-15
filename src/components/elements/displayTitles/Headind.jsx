import React from 'react'

export default function Headind(props) {
    const {
        children,
        variant,
        theme, //style
        display, //color
        position,
        margin,
    } = props;

    let classDefault = "mt-5 uppercase "
    let font, color, positionClass;

    switch (display) {
        case "gray":
            color = "text-gray-600"
            break;
        default:
            color = "text-secondary"
    }

    switch (theme) {
        case "secondary":
            font = "font-secondary"
            break;
        default:
            font = "tracking-tighter"
    }

    // Correction ici : on définit positionClass selon la prop position
    switch (position) {
        case "center":
            positionClass = "center"
            break;
        default:
            positionClass = ""
    }
    switch (margin) {
        case "marg":
            classDefault = "uppercase"
            break;

        default:
            classDefault = " mt-5 uppercase"
            break;
    }

    switch (variant) {
        case "h3":
            return (
                <div className={`flex my-0 ${positionClass === "center" ? "items-center justify-center" : ""}`}>
                    <h3 className={`text-2xl ${classDefault} ${font} ${color} `}>
                        {children}
                    </h3>
                </div>
            )
        default:
            return (
                <div className={`flex my-0 ${positionClass === "center" ? "items-center justify-center" : ""}`}>
                    <h2 className={`${theme === "secondary" ? "text-5xl" : "text-3xl"} ${classDefault} ${font} ${color}`}>
                        {children}
                    </h2>
                </div>
            )
    }

}

import React, { useRef, useState, useEffect } from "react";
import imagecarousel1 from "../../../assets/images/photos/carou0.jpg";
import imagecarousel2 from "../../../assets/images/photos/carou2.webp";
import imagecarousel3 from "../../../assets/images/photos/carou3.jpeg";
import Container from "../Container";
import "./carousel.css";
import Headind from "../displayTitles/Headind";

export default function Carousel() {
    const [index, setIndex] = useState(0);
    const startY = useRef(null);

    const evenements = [
        {
            titre: "Événement A venir",
            description: "Description de l'événement",
            image: imagecarousel1,
            descriptionLongue: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            titre: "Événement A venir",
            description: "Description de l'événement",
            image: imagecarousel2,
            descriptionLongue: "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        },
        {
            titre: "Événement A venir",
            description: "Description de l'événement",
            image: imagecarousel3,
            descriptionLongue: "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        }
    ];

    // Autoplay toutes les 5 secondes

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % evenements.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    //  Swipe vertical
    const handleTouchStart = (e) => {
        startY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        if (startY.current === null) return;
        const endY = e.changedTouches[0].clientY;
        const diff = startY.current - endY;
        if (diff > 50) {
            setIndex((prev) => (prev + 1) % evenements.length);
        } else if (diff < -50) {
            setIndex((prev) => (prev - 1 + evenements.length) % evenements.length);
        }
        startY.current = null;
    };

    // Swipe vertical à la souris
    const handleMouseDown = (e) => {
        startY.current = e.clientY;
    };

    const handleMouseUp = (e) => {
        if (startY.current === null) return;
        const diff = startY.current - e.clientY;
        if (diff > 50) {
            setIndex((prev) => (prev + 1) % evenements.length);
        } else if (diff < -50) {
            setIndex((prev) => (prev - 1 + evenements.length) % evenements.length);
        }
        startY.current = null;
    };

    return (
        <Container>
            <div
                className="w-full h-full flex items-center gap-22 justify-center mb-20"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ userSelect: "none" }}
            >
                {evenements.map((evenement, i) =>
                    i === index && (
                        <div
                            key={i}
                            className={`w-full max-w-4xl h-full animate-3d-entry`}
                        >
                            <div className="flex w-full h-90 bg-white rounded shadow-2xl shadow-black p-8 overflow-hidden gap-8">
                                <div className="flex flex-col mb-4">
                                    <Headind margin="marg" variant="h3">{evenement.titre}</Headind>
                                    <Headind  margin="marg" variant="h3" theme="secondary">{evenement.description}</Headind>
                                    {evenement.descriptionLongue && (
                                        <p className="text-gray-600 mt-8 max-w-4xl">{evenement.descriptionLongue}</p>  
                                    )}
                                </div>
                                <div className="relative w-full h-full bg-amber-500 ">
                                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10"></div>
                                    <img
                                        src={evenement.image}
                                        alt={evenement.titre}
                                        className="absolute top-0 left-0 w-full h-full object-cover  rounded mb-2 z-0"
                                    />
                                </div>

                            </div>
                        </div>
                    )
                )}

                <div className="relative flex flex-col gap-2 justify-center">
                    {evenements.map((_, i) => (
                        <button
                            key={i}
                            className={`h-4 w-3 rounded-full transition-colors duration-300 ${i === index ? "bg-amber-500" : "bg-gray-300"}`}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}

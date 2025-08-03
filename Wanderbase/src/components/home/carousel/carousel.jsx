import React from "react";
import {useState, useEffect} from 'react';
import Slider from "react-slick";

export default function Carousel() {

    const HotelList = () => {
        const hotelList = [
        {
            id: 1,
            name: "Placeholder Hotel",
            image: "placeholder hotel image",
            location: "placeholder location",
            rating: 4.9,
        },
        {
            id: 2,
            name: "Placeholder Villa",
            image: "placeholder villa image",
            location: "placeholder location",
            rating: 4.7,

        },
        {
            id: 3,
            name: "Placeholder BnB",
            image: "placeholder bnb image",
            location: "placeholder location",
            rating: 4.5,
        },
    ];

    const[activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % hotelList.length;
                return nextIndex;
            });
        }, 4000);
        
        return () => clearInterval(interval);
    }, [hotelList.length]);

    return (
        <section className="hotel-carousel">
            {hotelList.map((hotel, index) => {
            let cardClass = 'hotel-card';
            if (index === activeIndex) {
                cardClass += ' active';
            }

      return (
        <div key={hotel.id} className={cardClass}>
            <p>{hotel.image}</p>
            <h2>{hotel.name}</h2>
            <p>{hotel.location}</p>
            <p>{hotel.rating}</p>
        </div>
            );
        })}
        </section>
    );
};

  return <HotelList />;

}




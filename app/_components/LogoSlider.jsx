import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function LogoSlider() {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            <div>
                <img src={'/logo-1.png'} alt="logo" className="flex items-center mx-auto justify-center"/>
            </div>
            <div>
                <img src={'/logo-2.png'} alt="logo" className="flex items-center mx-auto justify-center"/>
            </div>
            <div>
                <img src={'/logo-3.png'} alt="logo" className="flex items-center mx-auto justify-center"/>
            </div>
            <div>
                <img src={'/logo-4.png'} alt="logo" className="flex items-center mx-auto justify-center"/>
            </div>
            <div>
                <img src={'/logo-5.png'} alt="logo" className="flex items-center mx-auto justify-center"/>
            </div>
            <div>
                <img src={'/logo-3.png'} alt="logo" className="flex items-center mx-auto justify-center"/>
            </div>
            <div>
                <img src={'/logo-4.png'} alt="logo" className="flex items-center mx-auto justify-center"/>
            </div>
        </Slider>
    );
}
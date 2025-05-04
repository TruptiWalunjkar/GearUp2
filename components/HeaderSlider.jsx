import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Gear Up for the Wild – Adventure Starts Here!",
      offer: "Limited Stock – Up to 40% Off on Outdoor Essentials",
      buttonText1: "Shop Now",
      buttonText2: "Explore More",
      imgSrc: "/images/shop1.jpg",

    },
    {
      id: 2,
      title: "Unleash the Explorer in You – Gear Built for the Wild!",
      offer: "Adventure Essentials at Up to 40% Off – Limited Stock!",
      buttonText1: "Buy Now",
      buttonText2: "Learn more",
      imgSrc: "/images/about.jpeg",
    },
    {
      id: 3,
      title: "Built for the Bold – Premium Gear for Every Expedition",
      offer: "Adventure Sale – Flat 40% Off on Pro-Grade Essentials",
      buttonText1: "Order Now",
      buttonText2: "Explore ",
      imgSrc: "/images/banner.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          // <div
          //   key={slide.id}
          //   className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#E6E9F2] py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
          // >
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-cover bg-center bg-no-repeat py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
            style={{
              backgroundImage: `url(${slide.imgSrc})`,
            }}
          >

            <div className="md:pl-8 mt-10 md:mt-0">
              <p className="md:text-base text-orange-600 pb-1">{slide.offer}</p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl text-gray-500 font-semibold">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 ">
                <button className="md:px-10 px-7 md:py-2.5 py-2 bg-orange-600 rounded-full text-white font-medium">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                  {slide.buttonText2}
                  <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon} alt="arrow_icon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${currentSlide === index ? "bg-orange-600" : "bg-gray-500/30"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;

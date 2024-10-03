import React, { lazy, useEffect, useState } from "react";
// import slide_1 from "../../../images/slide-1.jpg";
// import slide_2 from "../../../images/slider-2.jpg";

import styles from "./carousal.module.scss";
import classNames from "classnames";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useMemo } from "react";
import slide_1 from "../../../images/slide-1.jpg";
import slide_2 from "../../../images/slider-2.jpg";
// import bannerImg from "../../../images/ad-banner-1.jpg";




function Carousal() {
  const [sliderIdx, setSliderIdx] = useState(0);
  const [debounced, setDebounced] = useState(false);
  const slides = [
    {
      id: 1,
      image: slide_1, // Replace with image path or URL
      title: "SuperMarket Daily Fresh Grocery",
      subtitle: "Opening Sale Discount 50%",
      description:
        "Introduced a new model for online grocery shopping and convenient home delivery.",
    },
    {
      id: 2,
      image: slide_2, // Replace with image path or URL
      title: "Free Shipping on orders over",
      title_focus: "$100",
      color: "#0aad0a",
      subtitle: "Free Shipping - orders over $100",
      description:
        "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
    },
  ];
  // useEffect(() => {
  //   slides.forEach((slide) => {
  //     const img = new Image();
  //     img.src = slide.image;
  //   });
  // }, [slides]);


  const debounce = (fn , delay) => {
    if(!debounced){
      fn();
      setDebounced(true);
      setTimeout(() => setDebounced(false), delay);
    }

  }


  const handleLeft = () => {
    console.log("handleLeft");
    let newIndex = sliderIdx - 1;
    if (newIndex < 0) {
      newIndex = slides.length - 1; // Wrap to last slide
    }
    setSliderIdx(newIndex);
  };
  const handleRight = () => {
    console.log("handleRight");
    let index_k = (sliderIdx + 1) % slides.length;
    setSliderIdx(index_k);
  };
  
  
  
  const handleLeftDebounced = () => debounce(handleLeft, 300);
  const handleRightDebounced = () => debounce(handleRight, 300);
  
  const renderedSlids = useMemo(() => {
    
    return slides.map((slide , idx) => {
      return (
        <div
        key={slide.id}
        className={classNames({
          [styles.carousal_slide]: true,
          [styles.active]: idx === sliderIdx,
        })}
        style={{ backgroundImage: `url(${slide?.image})` }}
      >
        <div
          className="absolute left-10 top-[50%] z-10 w-15 h-15 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-400 hover:bg-opacity-30 "
          onClick={handleLeftDebounced}
        >
          <ChevronLeftIcon className=" h-10 w-10 text-[#ecece8] hover:text-white  hover:w-12 hover:h-12 transition-all duration-100 ease-linear" />
        </div>

        <div
          className="md:w-6/12 px-4 md:px-6 xl:px-10 xl:w-5/12 w-7/12  gap-3 h-full overflow-hidden  flex flex-col justify-center items-start
              "
        >
          <h2 className="xl:text-5xl md:text-4xl text-3xl font-[700] text-[#001e2b] ">
            {slide?.title}{" "}
            {slide?.title_focus ? (
              <span className={`text-[#0aad0a]`}>{slide?.title_focus}</span>
            ) : (
              ""
            )}
          </h2>
          <p className="xl:text-2xl md:text-xl text-[1rem] text-[#5c6c75] font-[400] ">
            {slide?.description}
          </p>

          <button className="px-4 py-2 bg-[#001e2b] text-white flex items-center justify-center rounded-md font-[600] ">
            Shop Now
          </button>
        </div>

        <div
          className="absolute right-10 top-[50%] z-10 w-15 h-15 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-400 hover:bg-opacity-30 "
          onClick={handleRightDebounced}
        >
          <ChevronRightIcon className=" h-10 w-10 text-[#ecece8] hover:text-white  hover:w-12 hover:h-12 transition-all duration-100 ease-linear" />
        </div>
      </div>
      )
    })
  }, [slides , sliderIdx , handleLeftDebounced , handleRightDebounced])

  return (
    <>
     <div>
      {renderedSlids}
     </div>
    </>
  );
}

export default Carousal;

import { FaFacebookSquare } from "react-icons/fa";
import one from '../assets/company/1.png'
import two from '../assets/company/2.png'
import three from '../assets/company/3.png'
import four from '../assets/company/4.png'
import five from '../assets/company/5.png'
import React from "react";

const LOGOS = [
  one,
  two,
  three,
  four,
  five
];

// 411501507657
export const InfiniteSlider = () => {
  return (
    <div className="pt-20  w-[95vw] lg:w-auto mx-auto">
      <p className="text-black font-medium text-center text-2xl pb-6">Our learners are from</p>
    <div className="relative m-auto w-full rounded-3xl  container  overflow-hidden  before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] b after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 ">
    <div className="relative m-auto mt-6 w-full py-8 border-theme rounded-3xl bg-gradient-to-r from-[#F3EBFD] via-[#EDFFFE] to-[#F3EBFD] container border overflow-hidden  before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] b after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 ">
      <div className="animate-infinite-slider  flex w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
        <div
        className="slide flex items-center justify-center mx-3"
        key={index}
      >
       <div className=" min-w-[160px] flex items-center justify-center mx-2">
       <img src={logo}/>
        </div>
      </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex items-center justify-center mx-3"
            key={index}
          >
           <div className=" min-w-[160px] flex items-center justify-center mx-2">
           <img src={logo}/>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

import React from "react";

import SatisfactionBg from "../assets/SatisfactionBg.png";
import Sparkle from "../assets/Sparkle.png";
import { IoSparklesOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

function JoinEnglishYaari() {
  const backgroundStyle = {
    backgroundImage: `url(${SatisfactionBg})`,
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
  
  };
  return (
    <div
      className=" py-12  !mt-10 container rounded-2xl px-4 flex flex-wrap justify-between"
      style={backgroundStyle}
    >
      <div className="w-full lg:w-[46%]">
        <div className="w-[90%] mx-auto flex items-center justify-between px-4">
          <IoSparklesOutline className="text-white text40" />
          <div className="w-[20%] border-b border-white "></div>
          <p className="text24 font-semibold text-white">Join EnglishYaari</p>
          <div className="w-[20%] border-b border-white "></div>
          <IoSparklesOutline className="text-white text40" />
        </div>

        <p
          style={{ textShadow: "1px 1px 2px black" }}
          className="text30 text-white text-shadow-sm font-bold text-center mt-5"
        >
          Improve your English over{" "}
          <span className="text-[#F0D819] "> 1-on-1 classes</span> <br />
          with expert English tutor{" "}
        </p>
      </div>

      <div className="w-full lg:w-[46%] flex justify-center items-center mt-5 lg:mt-0">
        <button className="bg-[#ECCD19] w-full lg:w-[70%] py-3 rounded-full text24 font-medium justify-between px-4 flex">
        @ ₹999 per month
          <div className="flex items-center">
          Subscribe
          <BsArrowRight className="mx-2"/>
          </div>
        </button>
       
      </div>
    </div>
  );
}

export default JoinEnglishYaari;

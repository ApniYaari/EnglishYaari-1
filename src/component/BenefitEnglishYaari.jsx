import React, { useEffect } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import SmileyNervous from "../assets/SmileyNervous.png";
import Sparkle from "../assets/Sparkle.png";
import voice from "../assets/voice.png";
import { FaArrowRight } from "react-icons/fa";

function BenefitEnglishYaari() {
  const data = [
    {
      tittle: "Refine Natural Speech",
      subTittle:
        "Get undivided attention from our friendly tutors to speak naturally .",
      bg: "bg-[#ECF8EF]",
      icon: voice,
      iconBg: "bg-[#D2F4D9]",
    },
    {
      tittle: "Eradicate Hesitation",
      subTittle:
        "Unlock your confidence with personalized attention & remove hesitation.",
      bg: "bg-[#EBEEFC]",
      icon: SmileyNervous,
      iconBg: "bg-[#DADEF8]",
    },
    {
      tittle: "Refine Natural Speech",
      subTittle:
        "Get undivided attention from our friendly tutors to speak naturally .",
      bg: "bg-[#F9F3E3]",
      icon: Sparkle,
      iconBg: "bg-[#F2E9D2]",
    },
    {
      tittle: "Refine Natural Speech",
      subTittle:
        "Get undivided attention from our friendly tutors to speak naturally .",
      bg: "bg-[#EEF9FD]",
      icon: Sparkle,
      iconBg: "bg-[#D5F0FA]",
    },
  ];

  return (
    <div className="my-20 mx-auto flex flex-col items-center">
      <div className="flex items-center justify-center  flex-col md:flex-row px-3  md:p-0">
        <div className="bg-theme h-12 w-12 lg:h-20 lg:w-20 rounded-full flex justify-center items-center text-white ">
          <FaArrowTrendUp className="text-2xl lg:text-[40px]" />
        </div>
        <div className="text-black font-bold text40 lg:ml-4 text-center md:text-start">
          English fluency at your finger tips
        </div>
      </div>

      {
        <div className="w-full flex flex-wrap  justify-center md:justify-between container pt-5">
          {data.map((ele, ind) => {
            return <BenifiCard key={ind} item={ele} />;
          })}
        </div>
      }

      <button className="bg-theme text-white text-xl z-50 px-20 rounded-full mx-auto flex mt-12 py-3 items-center ">
        Begin now
        <FaArrowRight className="mx-2" />
      </button>
    </div>
  );
}

export default BenefitEnglishYaari;

const BenifiCard = ({ item }) => {
  return (
    <div
      className={`w-[90vw] md:w-[47%] ${item.bg} mt-7 p-4 py-8 rounded-2xl flex items-center justify-evenly`}
    >
      <div
        className={` ${item.iconBg} h-20 w-20 rounded-full flex justify-center items-center text-white text-2xl`}
      >
        <img className="h-10 w-10" src={item?.icon} />
      </div>

      <div className="w-2/3">
        <p className="text-xl text-black font-semibold">{item?.tittle}</p>
        <p className="text-base text-secondry font-medium">{item?.subTittle}</p>
      </div>
    </div>
  );
};

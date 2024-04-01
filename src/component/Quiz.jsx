import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import box from "../assets/box.png";
function Quiz() {
  return (
    <div className=" container !mt-24">
      <div className="bg-lightPurpule container  items-center py-10 rounded-3xl   flex">
        <div className="relative w-[20%] bg-red-400">
            <img className="w-56 object-contain h-60 -bottom-16 absolute left-8" src={box} />
        </div>

        <div className="w-[70%]   flex justify-between items-center">
          <div>
            <p className="text36 text-black font-medium">
              Take a 5 min quiz to evaluate your
            </p>
            <p className="text-[50px]  text-pur font-semibold">
              English fluency
            </p>
          </div>

          <button className="bg-[#7429D4] text-2xl text-white flex items-center px-10 py-2 rounded-full">
            Start Quiz
            <FaArrowRight className="mt-1 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;

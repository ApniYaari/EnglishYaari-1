import { Avatar } from "@material-tailwind/react";
import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import alena from "../assets/alena.png";
import janvi from "../assets/janvi.png";
import { FaYoutube ,FaPlay} from "react-icons/fa";

function TrustedByYoutuber() {
  return (
    <div className=" w-[90vw] lg:w-[70vw] mx-auto pt-16 flex flex-col justify-center  items-center">
      <div className="w-full flex items-center justify-between">
        <BsPatchCheck className="text-sucess text40" />
        <div className="w-[27%] border-b border-black "></div>
        <p className="text40 font-semibold">Trusted by</p>
        <div className="w-[27%] border-b border-black "></div>
        <BsPatchCheck className="text-sucess text40" />
      </div>

      <div className=" w-full mt-9 flex flex-wrap justify-between">
        <Card name='Aleena Rais' photo={alena} bgC={'bg-[#F9F3E3]'} subs={'3.8 Million +'}/>
        <Card name={'Jhanvi Pawar'} photo={janvi} bgC={'bg-[#E9F8D8]'} subs={'1.5 Million'}/>
      </div>
    </div>
  );
}

export default TrustedByYoutuber;

const Card = ({name,bgC,subs ,photo}) => {
  return (
    <div className={`w-full md:w-[48%] mt-5 md:mt-0 ${bgC} p-5 py-8 rounded-2xl flex justify-between items-center`}>
      <div className="flex items-center">
        <img className="w-20 h-20 rounded-full" src={photo} />
        <div className="ml-3">
          <p className="text26 font-semibold">{name}</p>
          <div className="text-base flex items-center">
            <FaYoutube className="text-errror"/>
            <p className="mx-1">{subs}</p>
          </div>
        </div>
      </div>

      <button className="border text-theme border-theme flex font-medium items-center px-8 rounded-full py-1">
        <FaPlay className="text-black mr-2"/>
        Watch
      </button>
    </div>
  );
};

import React from "react";
import ChalkboardTeacher from "../../../assets/icon/Class.png";
import Page from "../../../assets/icon/Page.png";
import Simile from "../../../assets/icon/Simile.png";
import Image from "next/image";

function NumberMatter() {
  return (
    <div className="w-screen bg-gradient-to-r from-[#5C17CD] to-[#9114CC]  pb-10  margin120 lg:py-10">
      <div className=" w-[90vw] lg:w-[90vw] mx-auto">


        <div className="flex flex-wrap   justify-between ">
          <Card
            bgg={`bg-[#DBF4EC]`}
            circleBg={"bg-[#B8EBDB]"}
            subTittle={"Sessions Conducted"}
            value={"1,50,000+"}
            icon={ChalkboardTeacher}
          />
          <Card
            bgg={`bg-[#FFFEE2]`}
            circleBg={"bg-[#FDFABC]"}
            subTittle={"Overall Ratings"}
            value={4.8}
            icon={Page}
          />
          <Card
            bgg={`bg-[#EBEEFC]`}
            circleBg={"bg-[#CED4EE]"}
            subTittle={"Happy Learners"}
            value={"10,000+"}
            icon={Simile}
          />
        </div>
      </div>
    </div>
  );
}

export default NumberMatter;

const Card = ({ bgg, circleBg, subTittle, value, icon }) => {
  return (
    <div
      className={` w-[70%] flex   text-white mx-auto lg:w-[31%]     items-center   lg:justify-center mt-8 lg:mt-2`}
    >
      <div
        className={`h-24 w-24 rounded-full ${circleBg} flex items-center justify-center`}
      >
        <Image className="h-12 w-12" src={icon}/>
      </div>

      <div className="ml-3 w-[50%] ">
        <p className="text36 font-bold ">{value}</p>
        <p className="text24 mt-2 font-semibold">{subTittle}</p>
      </div>
    </div>
  );
};

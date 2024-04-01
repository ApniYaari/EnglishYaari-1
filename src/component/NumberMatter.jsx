import React from "react";
import ChalkboardTeacher from "../assets/icon/ChalkboardTeacher.png";
import ChalkboardTeacher from "../assets/icon/ChalkboardTeacher.png";
import Page from "../assets/icon/Page.png";
import Simile from "../assets/icon/Simile.png";

function NumberMatter() {
  return (
    <div className="w-screen bg-purpleShade rounded-2xl py-10">
      <div className=" w-[90vw] lg:w-[90vw] mx-auto">
        <div className="font-inter font-semibold text-white text32 text-center">
          Some numbers that matter
        </div>

        <div className="flex flex-wrap   justify-between mt-10">
          <Card
            bgg={`bg-[#DBF4EC]`}
            circleBg={"bg-[#B8EBDB]"}
            subTittle={"Sessions Conducted"}
            value={"50,000+"}
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
      className={` ${bgg} flex w-[95%] mx-auto lg:w-[31%] p-6 rounded-2xl py-10 items-center mt-2`}
    >
      <div
        className={`h-16 w-16 rounded-full ${circleBg} flex items-center justify-center`}
      >
        <img src={icon}/>
      </div>

      <div className="ml-3">
        <p className="text36 font-bold ">{value}</p>
        <p className="text24 text-secondry font-light">{subTittle}</p>
      </div>
    </div>
  );
};

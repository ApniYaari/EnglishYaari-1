import React from "react";
// import Experience from "../assets/WhatWillGet/Experience.png";
// import Expert from "../assets/WhatWillGet/Expert.png";
// import Notes from "../assets/WhatWillGet/Notes.png";

import Experience from '@/assets/WhatWillGet/Experience.png'
import Expert from '@/assets/WhatWillGet/Expert.png'
import Notes from '@/assets/WhatWillGet/Notes.png'
import Image from "next/image";

function WhatWillGet() {
  return (
    <div className="w-[90vw] mx-auto ">
      <p className="h3 font-bold text-center">
        What will i get with EnglishYaari Subscription?
      </p>

  



      <Card
        type={1}
        img={Expert}
        tittle={
          <p className="text h3 font-extrabold">
            Access to <span className="text-purpleShade"> 100+ </span> Expert
            Tutors
          </p>
        }
        bg={"bg-[#EBEEFC]"}
        decription={
          "Enhance your spoken English with expert guidance. With subscription, get access to 100+ certified tutors, receive tailored support to enhance fluency and confidence."
        }
      />

   

      <Card
      type={2}
        img={Notes}
        tittle={
          <p className="text h3 font-extrabold">
            <span className="text-purpleShade"> 500+ </span> Curriculum Notes
            
          </p>
        }
        bg={"bg-[#E9F8D8]"}
        decription={
          `Session notes provide a complete solution for effective speech, focusing on mastering grammar, building vocabulary and improving fluency.`
        }
      />

      <Card
      type={1}
        img={Experience}
        tittle={
          <p className="text h3 font-extrabold">
             <span className="text-purpleShade"> Progress </span> Report
            
          </p>
        }
        bg={"bg-[#EBEEFC]"}
        decription={
          `Track your progress effectively with daily session feedback and recordings, allowing you to work towards improvement.
          `
        }
      />
    </div>
  );
}

export default WhatWillGet;

const Card = ({ tittle, bg, decription, img,type }) => {
  return (
    <div
      className={`  bg-white rounded-2xl overflow-hidden flex ${type==1?'flex-row':'flex-row-reverse'} mt-10 ${type==1?'flex-wrap-reverse':'flex-wrap-reverse'}`}
    >
      <div className="w-full lg:w-[60%] px-6 py-4 lg:p-8   flex flex-col justify-center  lg:gap-y-6  lg:text-start  lg:mt-0">
        {tittle}
        <div className="lg:w-[80%] 2xll:w-[50%] 3xxl:w-[90%]">
        <p className="text-secondry text-start lg:text-start h14 mt-4 lg:mt-0 leading-8">{decription}</p>
        </div>
      </div>

      <div className={`w-full lg:w-[40%] p-4 lg:py-8 flex ${type==1?'justify-center':'justify-center'} ${bg}`}>
        <Image className="w-full lg:w-[80%] 3xxl:w-[70%]" src={img} />
      </div>
    </div>
  );
};

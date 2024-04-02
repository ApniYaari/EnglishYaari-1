import React from "react";
import Experience from "../../assets/WhatWillGet/Experience.png";
import Expert from "../../assets/WhatWillGet/Expert.png";
import Gaming from "../../assets/WhatWillGet/Gaming.png";
import Notes from "../../assets/WhatWillGet/Notes.png";

function WhatWillGet() {
  return (
    <div className="w-[90vw] mx-auto ">
      <p className="text40 font-bold text-center">
        What will i get with EnglishYaari Subscription?
      </p>

      <Card
        type={1}
        img={Expert}
        tittle={
          <p className="text text40 font-extrabold">
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
        img={Gaming}
        tittle={
          <p className="text text40 font-extrabold">
            <span className="text-purpleShade"> Gamified </span> Gamified
            Learning Experience
          </p>
        }
        bg={"bg-[#F9F3E3]"}
        decription={
          `Embark on a fun and engaging English learning journey with Gamified features. Earn points as you learn,allowing you to track your progress and improvement.`
        }
      />

      <Card
      type={1}
        img={Notes}
        tittle={
          <p className="text text40 font-extrabold">
            <span className="text-purpleShade"> 500+ </span> Curriculum Notes
            
          </p>
        }
        bg={"bg-[#E9F8D8]"}
        decription={
          `Session notes provide a complete solution for effective speech, focusing on mastering grammar, building vocabulary and improving fluency.`
        }
      />

      <Card
      type={2}
        img={Experience}
        tittle={
          <p className="text text40 font-extrabold">
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
      className={`${bg} p-4 lg:p-10 rounded-2xl flex ${type==1?'flex-row':'flex-row-reverse'} mt-10 ${type==1?'flex-wrap-reverse':'flex-wrap'}`}
    >
      <div className="w-full lg:w-[50%]    flex flex-col justify-center  lg:gap-y-6 text-center lg:text-start mt-6 lg:mt-0">
        {tittle}

        <p className="text-secondry text-center lg:text-start">{decription}</p>
      </div>

      <div className={`w-full lg:w-[50%] flex ${type==1?'justify-end':'justify-start'}`}>
        <img className="w-full lg:w-[70%]" src={img} />
      </div>
    </div>
  );
};

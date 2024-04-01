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
          "Lorem ipsum dolor sit amet consectetur. Nec tortor gravida praesent eu sagittis potenti sit ultricies sit.praesent eu sagittis potenti sit ultricies sit."
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
          "Lorem ipsum dolor sit amet consectetur. Nec tortor gravida praesent eu sagittis potenti sit ultricies sit.praesent eu sagittis potenti sit ultricies sit."
        }
      />

      <Card
      type={1}
        img={Notes}
        tittle={
          <p className="text text40 font-extrabold">
            Access to <span className="text-purpleShade"> 100+ </span> Expert
            Tutors
          </p>
        }
        bg={"bg-[#E9F8D8]"}
        decription={
          "Lorem ipsum dolor sit amet consectetur. Nec tortor gravida praesent eu sagittis potenti sit ultricies sit.praesent eu sagittis potenti sit ultricies sit."
        }
      />

      <Card
      type={2}
        img={Experience}
        tittle={
          <p className="text text40 font-extrabold">
            Access to <span className="text-purpleShade"> 100+ </span> Expert
            Tutors
          </p>
        }
        bg={"bg-[#EBEEFC]"}
        decription={
          "Lorem ipsum dolor sit amet consectetur. Nec tortor gravida praesent eu sagittis potenti sit ultricies sit.praesent eu sagittis potenti sit ultricies sit."
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

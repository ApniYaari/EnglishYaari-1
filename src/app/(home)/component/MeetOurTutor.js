import React, { useState } from "react";
import { MeetTutorCard } from "./MeetTutorCard";
import ScrollSection from "@/component/ScrollSection";
import CustomButton from "@/component/CustomButton";
import Megha from "@/assets/Tutor/Megha.jpeg"
import Bhaubali from "@/assets/Tutor/Bhaubali.jpeg"
import Pritam from "@/assets/Tutor/Pritam.jpeg"
import Priya from "@/assets/Tutor/Priya.jpeg"
import Radhika from "@/assets/Tutor/Radhika.jpeg"
import Shele from "@/assets/Tutor/Shele.jpeg"

import nandakumar from "@/assets/Tutor/nandakumar.png"
import Vishnu from "@/assets/Tutor/Vishnu.png"
import lamika from "@/assets/Tutor/lamika.png"


import VedioModal from "@/component/VedioModal";
import { TeacherSlider } from "./TeacherSlider";
import Link from "next/link";

export const MeetOutTutor = (props) => {
  const [initialState, setInitialState] = useState({
    selectDateIndex: 0,
    selectedSlot: null,
    activeDot: 1,
  });

  const [link,setLink]=useState()
  const [vedioModal,setVedioModal] = useState(false)
  const { selectDateIndex, selectedSlot, activeDot } = initialState;

  const updateStateHandler = (name, value) => {
    setInitialState((pre) => ({ ...pre, [name]: value }));
  };

  const slideLeft = () => {
    let dot = activeDot == 1 ? 2 : 1;
    updateStateHandler("activeDot", dot);
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    let dot = activeDot == 1 ? 2 : 1;
    updateStateHandler("activeDot", dot);
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };


  

  const FaqVedios = [
    {
        url: "xbxIiH6Qugg",
        title: "How to use EnglishYaari App? How EnglishYaari works?",
        name: 'Megha Nayak',
        sessionTaken: '971',
        img: Megha

    },

    {
        url: "NFzJPieKlIs",
        title: "How to use EnglishYaari App? How EnglishYaari works?",
        name: 'Madhav Anand',
        sessionTaken: '1115',
        img: Bhaubali

    },

    {
        url: "Iv10jc5_USY",
        title: "How to use EnglishYaari App? How EnglishYaari works?",
        name: 'Moupriya Mukherjee',
        sessionTaken: '450',
        img: Priya

    },

    {
        url: "r3rwPnMZ6lM",
        title: "How to Subscribe a Plan on EnglishYaari App?",
        name: 'Pritam Pradhan',
        sessionTaken: '950',
        img: Pritam

    },

    {
        url: "N5IbaYKDMF0",
        title: "How to Join your upcoming Session on EnglishYaari App? ",
        name: 'Radhika Bansal',
        sessionTaken: '500',
        img: Radhika

    },


    {
        url: "yqZP3srtbHA",
        title: "How to Join your upcoming Session on EnglishYaari App? ",
        name: 'Vishnu Mehta',
        sessionTaken: '500',
        img: Vishnu

    },


    {
        url: "K2IIRJrbUOs",
        title: "How to Join your upcoming Session on EnglishYaari App? ",
        name: 'Lamika',
        sessionTaken: '500',
        img: lamika
    },

    {
        url: "s-eo-NpKuCA",
        title: "How to Join your upcoming Session on EnglishYaari App? ",
        name: 'Nandakumar Gopalan',
        sessionTaken: '500',
        img: nandakumar
    },


];
  return (
    <div className="w-full      lg:ml-auto lg:w-[90vw] mx-auto ">


       <p className="h3 font-semibold text-black text-center   ">
         Meet Our Tutors
      </p>
      {
        //#region Introductory Video
        <div className=" margin24 overflow-hidden rounded-xl relative ">
          <div className="border border-[#DBDBDB] py-8 lg:py-4 bg-white overflow-hidden lg:rounded-2xl lg:h-[420px]">

            <div className="h-[250px] lg:h-[320px]">

            <TeacherSlider setLink={setLink} setVedioModal={setVedioModal} images={FaqVedios} speed={60000}/>

        </div>

            <Link href={'/our-tutors'} className="flex mx-auto mt-3 lg:mt-0 justify-center items-center pb-4 pt-2">
            <CustomButton name={'View all tutors'}/>
            </Link>

         
          </div>

         
        </div>
        //#endregion
      }
      {vedioModal && <VedioModal
      setVedioModal={setVedioModal}
       link={link}
      />}
    </div>
  );
};



export default MeetOutTutor;

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
import VedioModal from "@/component/VedioModal";
import { TeacherSlider } from "./TeacherSlider";

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
      url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Megha.mp4",
      title: "How to use EnglishYaari App? How EnglishYaari works?",
      name:'Megha Nayak',
      sessionTaken:'971',
      img:Megha

    },

    {
      url: "https://www.youtube.com/watch?v=z6c836gUoeo&t=6s",
      title: "How to use EnglishYaari App? How EnglishYaari works?",
      name:'Madhav Anand',
      sessionTaken:'1115',
      img:Bhaubali

    },

    {
      url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Megha.mp4",
      title: "How to use EnglishYaari App? How EnglishYaari works?",
      name:'Moupriya Mukherjee',
      sessionTaken:'450',
      img:Priya

    },
 
    {
      url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Amal.mp4",
      title: "How to Subscribe a Plan on EnglishYaari App?",
      name:'Pritam Pradhan',
      sessionTaken:'950',
      img:Pritam

    },

    {
      url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Sarika.mp4",
      title: "How to Join your upcoming Session on EnglishYaari App? ",
      name:'Radhika Bansal',
      sessionTaken:'500',
      img:Radhika

    },


    {
      url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Sarika.mp4",
      title: "How to Join your upcoming Session on EnglishYaari App? ",
      name:'Shailee Shah',
      sessionTaken:'500',
      img:Shele

    },

  ];
  return (
    <div className="w-full     lg:ml-auto lg:w-[90vw] mx-auto ">


       <p className="h3 font-semibold text-black text-center   ">
         Meet Our Tutors
      </p>
      {
        //#region Introductory Video
        <div className=" margin24 overflow-hidden rounded-xl relative ">
          <div className="border border-[#DBDBDB] py-8 lg:py-4 bg-white overflow-hidden lg:rounded-2xl h-[420px]">

            <div className="h-[290px] lg:h-[320px]">

            <TeacherSlider setLink={setLink} setVedioModal={setVedioModal} images={FaqVedios} speed={40000}/>

        </div>

            <div className="flex mx-auto mt-3 lg:mt-0 justify-center items-center pb-4 pt-2">
            <CustomButton name={'View all tutors'}/>
            </div>

         
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

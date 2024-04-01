import React, { useState } from "react";
import { MeetTutorCard } from "./MeetTutorCard";
import { FaArrowRight } from "react-icons/fa6";
import ReactPlayer from "react-player";
import { GoStarFill } from "react-icons/go";
import VedioModal from "./VedioModal";

function OurStudent() {
  const [link,setLink]=useState()
  const [vedioModal,setVedioModal] = useState(false)
  const teasomonail = [
    {
      url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Arundhati.mp4",
      title: "How to use EnglishYaari App? How EnglishYaari works?",
      name: "Arundhati Roktima",
      months:3
    },
    {
      url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/0918.mp4",
      title: "How to Book a Trial Session on EnglishYaari App?",
      name: "Gaurav Anand",
      months:6
    },
    {
      url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Sumadhur.mp4",
      title: "How to Subscribe a Plan on EnglishYaari App?",
      name: "Sumadhur",
      months:3
    },

    {
      url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Kunal.mp4",
      title: "How to Join your upcoming Session on EnglishYaari App? ",
      name:'Kunal',
      months:5
    },
  ];
  return (
    <div className="relative p-4 w-[90vw] mx-auto">
      <p className="text36 font-semibold text-black text-center pt-10 ">
        What our learners speaks about us?
      </p>

      <div className="  mx-auto pt-10 flex w-full justify-around lg:justify-between overflow-scroll   relative">
        {teasomonail.map((item, ind) => (
          <StudentCard 
          setVedioModal={setVedioModal} setLink={setLink} item={item} key={ind}

            />
        ))}
      </div>

      {vedioModal && <VedioModal
      setVedioModal={setVedioModal}
       link={link}
      />}
    </div>
  );
}

export default OurStudent;

const StudentCard = ({ item,setVedioModal,setLink }) => {
  return (
    <div
    onClick={()=>{
      setLink(item?.url)
      setVedioModal(true);
    }}
     className="min-w-[24rem] ml-4   mt-6 rounded-lg  relative overflow-hidden">
      <p className="text24 font-semibold  m-0 p-0">
        “I saw progress in just {item?.months} month after joining EnglishYaari”
      </p>

      <video className="w-full rounded-lg" autoPlay={false}>
          <source src={item?.url} type="video/mp4" className="object-cover" />
          Your browser does not support the video tag.
        </video>

      <div className=" w-full text24 font-medium flex justify-between items-center mt-3">
        {item?.name}
        <div className="w-[200px]  flex justify-end gap-2">
          {[1, 1, 1, 1, 1].map((ele, ind) => {
            return <GoStarFill key={ind} className="text-yellow-700" />;
          })}
        </div>
      </div>
    </div>
  );
};

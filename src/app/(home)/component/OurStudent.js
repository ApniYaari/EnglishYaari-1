import React, { useState } from "react";
import { MeetTutorCard } from "./MeetTutorCard";
import { FaArrowRight } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { HorizontalSlider } from "./HorizontalSlider";
import { StudentSlider } from "./StudentSlider";
// import VedioModal from "./VedioModal";

// import One from '@/assets/EnglishYaari2.0_Product Design/one.png';
// import Two from '@/assets/EnglishYaari2.0_Product Design/two.png';
// import Three from '@/assets/EnglishYaari2.0_Product Design/three.png';
// import Four from '@/assets/EnglishYaari2.0_Product Design/four.png';
// import Five from '@/assets/EnglishYaari2.0_Product Design/five.png';
// import Six from '@/assets/EnglishYaari2.0_Product Design/six.png';
// import Seven from '@/assets/EnglishYaari2.0_Product Design/seven.png';
// import Eight from '@/assets/EnglishYaari2.0_Product Design/eight.png';
// import Nine from '@/assets/EnglishYaari2.0_Product Design/nine.png';
// import Ten from '@/assets/EnglishYaari2.0_Product Design/ten.png';


function OurStudent() {
    const [link, setLink] = useState()
    const [vedioModal, setVedioModal] = useState(false)
    const teasomonail = [
        {
            url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Arundhati.mp4",
            title: "How to use EnglishYaari App? How EnglishYaari works?",
            name: "Arundhati Roktima",
            months: 3
        },
        {
            url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/0918.mp4",
            title: "How to Book a Trial Session on EnglishYaari App?",
            name: "Gaurav Anand",
            months: 6
        },
        {
            url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Sumadhur.mp4",
            title: "How to Subscribe a Plan on EnglishYaari App?",
            name: "Sumadhur",
            months: 3
        },

        {
            url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Kunal.mp4",
            title: "How to Join your upcoming Session on EnglishYaari App? ",
            name: 'Kunal',
            months: 5
        },
    ];

    //   const images = [
    //     One, Two, Three, Four, Five, Six, Seven, Eight,Nine, Ten
    //   ].map((image) => ({
    //     id: crypto.randomUUID(),
    //     image
    //   }));




    return (
        <div className="relative p-4 margin120 w-[90vw] mx-auto  h-[300px]">

            {/* <HorizontalSlider images={images} speed={10000} /> */}

            <p className="text36 font-semibold text-black text-center mb-3  ">
                Get inspired by our learner's success stories
            </p>


            <StudentSlider  images={teasomonail} speed={20000}  />
            {/* <div className=" sectionsss mx-auto  mt-4 flex w-full justify-around lg:justify-between overflow-scroll   relative">
                {teasomonail.map((item, ind) => (
                    <StudentCard
                        setVedioModal={setVedioModal} setLink={setLink} item={item} key={ind}

                    />
                ))}
            </div> */}

            {/* {vedioModal && <VedioModal
      setVedioModal={setVedioModal}
       link={link}
      />} */}
        </div>
    );
}

export default OurStudent;

const StudentCard = ({ item, setVedioModal, setLink }) => {
    return (
        <div
            onClick={() => {
                setLink(item?.url)
                setVedioModal(true);
            }}
            className="min-w-[24rem] ml-4   mt-6 rounded-lg  relative overflow-hidden">


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

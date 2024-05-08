import React, { useState } from "react";
import { GoStarFill } from "react-icons/go";
import { StudentSlider } from "./StudentSlider";
import Arundhati from "@/assets/Learner/Arundhati.png"
import Gaurav from "@/assets/Learner/Gaurav.png"
import Sumadhur from "@/assets/Learner/Sumadhur.png"
import Kunal from "@/assets/Learner/Kunal.png"

function OurStudent() {
    const [link, setLink] = useState()
    const [vedioModal, setVedioModal] = useState(false)
    const teasomonail = [
        {
            url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Arundhati.mp4",
            title: "How to use EnglishYaari App? How EnglishYaari works?",
            name: "Arundhati Roktima",
            months: 3,
            img: Arundhati
        },
        {
            url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/0918.mp4",
            title: "How to Book a Trial Session on EnglishYaari App?",
            name: "Gaurav Anand",
            months: 6,
            img: Gaurav
        },
        {
            url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Sumadhur.mp4",
            title: "How to Subscribe a Plan on EnglishYaari App?",
            name: "Sumadhur",
            months: 3,
            img: Sumadhur
        },

        {
            url: "https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Kunal.mp4",
            title: "How to Join your upcoming Session on EnglishYaari App? ",
            name: 'Kunal',
            months: 5,
            img: Kunal
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


            <StudentSlider setLink={setLink} setVedioModal={setVedioModal} images={teasomonail} speed={20000}  />

        </div>
    );
}

export default OurStudent;


import React, { useState } from "react";
import { GoStarFill } from "react-icons/go";
import { StudentSlider } from "./StudentSlider";
import Arundhati from "@/assets/Learner/Arundhati.png"
import Gaurav from "@/assets/Learner/Gaurav.png"
import Sumadhur from "@/assets/Learner/Sumadhur.png"
import Kunal from "@/assets/Learner/Kunal.png"
import neha from "@/assets/Learner/neha.jpeg"

import sweta from "@/assets/Learner/sweta.jpeg"
import VedioModal from "@/component/VedioModal";

function OurStudent() {
    const [link, setLink] = useState()
    const [vedioModal, setVedioModal] = useState(false)
    const teasomonail = [
        {
            url: "yaFyR8f4bzI",
            title: "How to use EnglishYaari App? How EnglishYaari works?",
            name: "Arundhati Roktima",
            months: 3,
            img: Arundhati
        },
        {
            url: "DciqY0n3D4w",
            title: "How to Book a Trial Session on EnglishYaari App?",
            name: "Gaurav Anand",
            months: 6,
            img: Gaurav
        },
 

        {
            url: "gLYYsBN3kik",
            title: "How to Join your upcoming Session on EnglishYaari App? ",
            name: 'Neha',
            months: 5,
            img: neha
        },

        {
            url: "avu2n5mEzUY",
            title: "How to Subscribe a Plan on EnglishYaari App?",
            name: "Sumadhur",
            months: 3,
            img: Sumadhur
        },

        {
            url: "DAW9x8j7x4Y",
            title: "How to Join your upcoming Session on EnglishYaari App? ",
            name: 'Shweta',
            months: 5,
            img: sweta
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


            <StudentSlider setLink={setLink} setVedioModal={setVedioModal} images={teasomonail} speed={30000}  />
            {vedioModal && <VedioModal
      setVedioModal={setVedioModal}
       link={link}
      />}
        </div>
    );
}

export default OurStudent;


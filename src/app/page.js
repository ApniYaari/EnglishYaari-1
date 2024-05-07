
"use client"
import React from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa6";
import ones from "../assets/newCard/1s.png";
import Composition from "../assets/newCard/Composition.png";
import iltes from "../assets/newCard/iltes.png";

import interview from "../assets/newCard/interview.png";
import pers from "../assets/newCard/pers.png";
import spoken from "../assets/newCard/spoken.png";

import { LuArrowLeftCircle } from "react-icons/lu";
import { LuArrowRightCircle } from "react-icons/lu";
import Card from '../app/(home)/component/CourseNeed'
import HeroSection from "./(home)/component/HeroSection";
import MeetOutTutor from "./(home)/component/MeetOurTutor";
import ScrollSection from "@/component/ScrollSection";
import WhatWillGet from "./(home)/component/WhatWillGet";
import OurStudent from "./(home)/component/OurStudent";
import NumberMatter from "./(home)/component/NumberMatter";
import OurLearner from "./(home)/component/OurLearner";
import Organzation from "./(home)/component/Ourganzation";
import FAQ from "@/component/FAQ";
import MobileSectionEnglishYaariWork from "./(home)/component/MobileSectionEnglishYaariWork";
import HomeNavbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Link from "next/link";
export default function Home() {


  const slideLeft = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = window.innerWidth > 600 ? slider.scrollLeft - 400 : slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = window.innerWidth > 600 ? slider.scrollLeft + 400 : slider.scrollLeft + 300;
  };
  return (
    <div className="bg-background overflow-x-hidden">
      <HomeNavbar />
      <HeroSection />


      <div className="margin120">
        <MeetOutTutor />

      </div>


      {/* home page crad */}
      <div className=" margin120 bg-white py-10">
        <div className=" w-full    mx-auto px-4 lg:px-0  ">
          <div className="flex justify-between flex-wrap items-center lg:w-[90%] mx-auto">
            <div className="h3 font-bold ">
              <p> <i className="text-theme">Specialized courses</i> for your goals </p>

            </div>

            <div className="text-6xl text-theme hidden lg:flex gap-4">
              <button onClick={slideLeft}>
                <LuArrowLeftCircle />
              </button>

              <button onClick={slideRight}>
                <LuArrowRightCircle />
              </button>
            </div>
          </div>

          <div
            id="slider2"
            className="flex justify-between w-[95%] ml-auto  overflow-scroll    scroll-smooth">

            <Card
              width={"w-full lg:min-w-[18rem]"}
              img={ones}
              bg={"bg-[#F4EAFF]"}
              tittle={"Business English"}
              desc={
                "Stand out in the global business world by mastering spoken English for corporate success."
              }
            />


            <Card
              width={" w-full lg:min-w-[18rem]"}
              img={interview}
              bg={"bg-[#EBEEFC]"}
              tittle={"Interview Skills"}
              desc={
                "Master your interview skills. Prepare thoroughly for any interview and secure your dream job."
              }
            />

            <Card
              width={"w-full lg:min-w-[18rem]"}
              img={spoken}
              bg={"bg-[#E9F8D8]"}
              tittle={"Everyday Conversation"}
              desc={
                "Develop language skills for everyday interactions, improving communication at work. "
              }
            />

            <Card
              width={" w-full lg:min-w-[18rem]"}
              img={Composition}
              bg={"bg-[#FFF8E5]"}
              tittle={"Public Speaking"}
              desc={
                "Perfect your public speaking skills to confidently captivate and impact the audience."
              }
            />





            <Card
              width={"w-full lg:min-w-[18rem]"}
              img={iltes}
              bg={"bg-[#F8EFFF]"}
              tittle={"IELTS speaking"}
              desc={
                "Achieve a 7+ band score with fluent English and turn your dream of going abroad into reality."
              }
            />

            <Card
              width={"w-full lg:min-w-[18rem]"}
              img={pers}
              bg={"bg-[#FFFF]"}
              tittle={"Personality development"}
              desc={
                "Improve your personality with fluent English and boost your confidence to create a lasting impression."
              }
            />
          </div>


          <div className="text-6xl text-theme flex my-8 justify-center lg:hidden gap-4">
            <button onClick={() => {
              slideLeft()
              // alert('Please')
            }}>
              <LuArrowLeftCircle />
            </button>

            <button
              onClick={() => {
                slideRight()
                // alert('Please')
              }}
            //  onClick={slideRight}
            >
              <LuArrowRightCircle />
            </button>
          </div>
        </div>
      </div>

      <div className=" margin120 justify-center flex flex-col">

        <OurLearner />
      </div>

      <div className=" hidden relative lg:flex flex-col customContainer mx-auto">

        <ScrollSection />

      </div>
      <div className="  lg:hidden flex-col customContainer mx-auto">

        <MobileSectionEnglishYaariWork />
      </div>

      <div>
        <WhatWillGet />
      </div>



      <div>
        <OurStudent />
      </div>


      <div className="margin120 border border-transparent">
        <NumberMatter />
      </div>



      <div className="margin120">
        <Organzation />
      </div>

      <div className="margin120">
        <div className="bg-white py-10  w-[100vw] mx-auto">
          <p className="h1 text-black font-semibold text-center mb-4 lg:mb-2">
            Have a question?
          </p>
          {/* <p className="text24 font-semibold hidden lg:flex text-center text-secondry">
            Find the answers in our FAQs
          </p> */}
          <div className="w-[90vw] mx-auto  flex  flex-wrap-reverse px-4 md:px-0">
            <div className="  w-full lg:w-[30%] px-4 flex justify-center items-start flex-col mt-8 lg:mt-0">
              <p className="text-theme text-lg !font-semibold">
                For any other questions{" "}
              </p>

              <div className="flex mt-4">
                <svg
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.732422"
                    width="37.5"
                    height="37.5"
                    rx="18.75"
                    fill="#EEECF8"
                  />
                  <path
                    d="M27.1585 22.3847L22.9143 20.4827C22.722 20.4003 22.5122 20.3672 22.3038 20.3863C22.0955 20.4055 21.8952 20.4763 21.7211 20.5923C21.7035 20.6037 21.6867 20.6163 21.6708 20.6301L19.4526 22.5168C19.4296 22.5293 19.404 22.5363 19.3778 22.5373C19.3516 22.5382 19.3255 22.533 19.3017 22.5222C17.8758 21.834 16.3988 20.3659 15.7079 18.9599C15.6964 18.9364 15.6904 18.9105 15.6904 18.8844C15.6904 18.8582 15.6964 18.8324 15.7079 18.8089L17.6009 16.5628C17.6145 16.5462 17.6271 16.5288 17.6386 16.5107C17.7531 16.336 17.8222 16.1355 17.8398 15.9273C17.8574 15.7192 17.8228 15.5099 17.7393 15.3185L15.8508 11.0815C15.7435 10.8313 15.558 10.6228 15.3222 10.487C15.0863 10.3513 14.8128 10.2957 14.5426 10.3286C13.3686 10.4829 12.2909 11.0595 11.511 11.9505C10.731 12.8416 10.3022 13.9861 10.3047 15.1702C10.3047 22.205 16.0277 27.9281 23.0625 27.9281C24.2466 27.9303 25.391 27.5015 26.282 26.7216C27.173 25.9417 27.7497 24.8641 27.9042 23.6901C27.937 23.4212 27.8822 23.149 27.7478 22.9137C27.6135 22.6785 27.4068 22.493 27.1585 22.3847ZM23.0625 26.8499C16.6225 26.8499 11.3828 21.6102 11.3828 15.1702C11.3798 14.2484 11.7126 13.357 12.3189 12.6625C12.9252 11.9681 13.7636 11.5182 14.6774 11.3968H14.6981C14.7343 11.3975 14.7694 11.4091 14.7989 11.4301C14.8284 11.4511 14.8509 11.4805 14.8634 11.5145L16.7591 15.747C16.7699 15.7706 16.7755 15.7962 16.7755 15.8221C16.7755 15.848 16.7699 15.8736 16.7591 15.8971L14.8625 18.1486C14.8483 18.1646 14.8354 18.1818 14.8238 18.1998C14.7052 18.381 14.6353 18.5897 14.621 18.8058C14.6066 19.0219 14.6484 19.2381 14.7421 19.4333C15.539 21.0649 17.1831 22.6965 18.8327 23.4934C19.0291 23.5866 19.2463 23.6273 19.4631 23.6116C19.6799 23.5958 19.8889 23.5241 20.0698 23.4035C20.0869 23.3918 20.104 23.3793 20.1201 23.3658L22.3375 21.4791C22.3594 21.4673 22.3836 21.4604 22.4084 21.4589C22.4332 21.4573 22.458 21.4611 22.4812 21.4701L26.7263 23.3721C26.761 23.3868 26.7902 23.4121 26.8097 23.4444C26.8292 23.4766 26.8381 23.5142 26.8351 23.5518C26.7143 24.466 26.2648 25.305 25.5705 25.912C24.8763 26.519 23.9847 26.8524 23.0625 26.8499Z"
                    fill="#30237B"
                  />
                </svg>

                <div className="ml-4 font-medium">
                  <p>+91 6209848131</p>
                  <p className="text-secondry font-medium font-inter">
                    Support Number
                  </p>
                </div>
              </div>

              <div className="flex mt-4">
                <svg
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.732422"
                    width="37.5"
                    height="37.5"
                    rx="18.75"
                    fill="#EEECF8"
                  />
                  <path
                    d="M27 13.084H10.5C10.3632 13.084 10.2321 13.1358 10.1354 13.2281C10.0387 13.3204 9.98438 13.4456 9.98438 13.5762V24.7324C9.98438 25.037 10.1111 25.3291 10.3368 25.5445C10.5624 25.7599 10.8684 25.8809 11.1875 25.8809H26.3125C26.6316 25.8809 26.9376 25.7599 27.1632 25.5445C27.3889 25.3291 27.5156 25.037 27.5156 24.7324V13.5762C27.5156 13.4456 27.4613 13.3204 27.3646 13.2281C27.2679 13.1358 27.1368 13.084 27 13.084ZM18.75 20.1272L11.8252 14.0684H25.6748L18.75 20.1272ZM16.4873 19.4824L11.0156 24.2698V14.6951L16.4873 19.4824ZM17.2504 20.1502L18.4062 21.1575C18.5013 21.2405 18.6255 21.2865 18.7543 21.2865C18.8831 21.2865 19.0073 21.2405 19.1023 21.1575L20.2539 20.1502L25.6748 24.8965H11.826L17.2504 20.1502ZM21.0127 19.4824L26.4844 14.6951V24.2698L21.0127 19.4824Z"
                    fill="#30237B"
                  />
                </svg>

                <a
                  href="mailto:help@englishyaari.com?body=My custom mail body"
                  className="ml-4 font-medium">
                  <p>help@englishyaari.com</p>
                  <p className="text-secondry font-medium font-inter">
                    Support Email
                  </p>
                </a>
              </div>

              <button className="bg-sucess text-white text-base items-center font-semibold flex px-8 rounded-full py-2 mt-8">
                <Link className={'flex items-center'} href='https://api.whatsapp.com/send/?phone=916209848131&text&type=phone_number&app_absent=0'>
                  <FaWhatsapp className="mr-3" />
                  WhatsApp us
                </Link>

              </button>
            </div>
            <div className="w-full lg:w-[70%] ">
              <FAQ
                question={"What is EnglishYaari?"}
                answer={`EnglishYaari is a dynamic language learning platform that offers a unique blend of learning and interactive practice, making it an effective tool for mastering spoken English.
              Our focus on fun activities foster a friendly Environment , ensuring that acquiring spoken English skills becomes an enjoyable journey for our learners.`}
              />
              <FAQ
                question={"How to book a trial? "}
                answer={`To Book a Trial session, visit the EnglishYaari home page, and Click on “Book A Trial”

              Complete your signup & Make a payment for trial
              
              Select a date and time & Meet your tutor at the session time
              
              “If you find value in your trial session and wish to continue your learning journey with EnglishYaari ,simply subscribe to our plan and schedule your personalised 1-on-1 session with us,”`}
              />

              <FAQ
                question={"What comes with our subscription plan?"}
                answer={`
                With our subscription plan at EnglishYaari, you’ll enjoy a personalized learning experience.

1. You’ll have access to expert tutors who will provide constructive feedback during the sessions.

2. Tailored session notes can help you significantly improve your speech.

3. We offer you session flexibility, you can book your session based on your availability.

4. Plus, you can take multiple sessions in a day by choosing your preferred tutor.

5. Get access to session recordings for your convenience and track your progress.`}
              />

              <FAQ
                question={"How can EnglishYaari help me in my career? "}
                answer={`At EnglishYaari, we understand that strong communication skills are essential for career success. By joining us, you'll not only enhance your spoken English but also gain confidence in expressing yourself fluently. This skill is invaluable in job interviews, presentations, and daily workplace interactions. Moreover, our personalised lesson plans are tailored to address your specific needs, ensuring your professional growth. Our 1-on-1 sessions and constructive feedback from our expert tutors will empower you to excel in your career by mastering this vital language."`}
              />

              <FAQ
              border={1}
                question={"How to book your regular Sessions at EnglishYaari? "}
                answer={`Once you've taken a subscription, you can book your EnglishYaari Sessions according to your availability.

                Steps To Book Your Session
                
                >> Login to your dashboard
                
                >> Click on "Book a session" present on your dashboard
                
                >> Select the time interval and date, You will get the list of available tutors in your selected time interval.
                
                >> select the available time slots and click on the "Book Now" button. Your session will be reserved and can be found in the "My Sessions" section."`}
              />
            </div>




          </div>
        </div>
      </div>
      {/* 
      <div className="mt-20 pb-20">
        <OurAppNow/>
      </div> */}



      {/* <Footer/> */}

    </div>
  );
}




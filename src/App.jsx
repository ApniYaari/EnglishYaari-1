import { NavbarDefault } from "./component/Navbar";
import Home from "./pages/Home";
import React, { useEffect } from "react";
import Bg from "./assets/bg.png";
import { FaArrowRight } from "react-icons/fa6";
import { svgIcon } from "./Helper";
import { Route, Routes } from "react-router";
import PlanAndPricing from "./pages/PlanAndPricing";
import AllTutorList from "./pages/AllTutorList";
import TutorDetails from "./pages/TutorDetails";
import Footer from "./component/Footer";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import india from './assets/india.png'
import { NavLink } from "react-router-dom";
import phoneView from './assets/phoneView.png'
import TermsAndConditions from "./pages/TermAndCondition";
import ScrollToTop from "./customHook/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BecomeATutor from "./pages/BecomeATutor";
import { Helmet } from "react-helmet";
export default function App() {

  const width = window.innerWidth
  const backgroundStyle = {
    backgroundImage: `url(${Bg})`,
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="w-screen overflow-hidden">
      <NavbarDefault />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<HomeComponent backgroundStyle={backgroundStyle} />}
        />
        <Route
          path="/plan-and-pricing"
          element={<PlanAndPricing backgroundStyle={backgroundStyle} />}
        />
        {/* <Route path="/AllTutorList" element={<AllTutorList />} /> */}
        {/* <Route path="/TutorDetails" element={<TutorDetails />} />/ */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/become-a-tutor" element={<BecomeATutor />} />



      </Routes>
      <Footer />
    </div>
  );
}

const HomeComponent = ({ backgroundStyle }) => {

  return (
    <>
      <Helmet>
        <meta name="description" content=" EnglishYaari gives you instant access to expert English tutors and helps you to speak English fluently and confidently." />
        <title>EnglishYaari: 1-on-1 Online Spoken English Tutor</title>
        <link rel="canonical" href="https://englishyaari.com/" />
      </Helmet>
      {
        <div
          className=" hidden lg:absolute  top-20 lg:top-0   lg:h-[85%]  inset-0 bg-theme lg:flex justify-center items-center"
          style={backgroundStyle}
        >
          <div className="text-center lg:leading-[10px]  text-white bg-fixed flex flex-col justify-center items-center lg:h-[70%] w-full">


            <p className="text-2xl lg:text-5xl  font-bold text-white leading-none lg:leading-[30px] 2xll:leading-[40px] pb-8">
              <br /> Boost your
              <span className="text-[#FFCA7A] leading-[50px] lg:leading-[100px] ml-2 mr-2">
                confidence
              </span>

              with
              <br /> 1-on-1 live English session
            </p>

            <div className="justify-start  items-start px-3 ">
              {[
                "Enhance fluency with 25 minutes of daily practice",
                "Receive personalised mentorship from expert tutors",
                "Get a judgment free space to practice effectively",
              ].map((ele, ind) => {
                return (
                  <div key={ind} className="text24 flex items-center  mt-4 lg:gap-2 font-semibold">
                    <IoIosCheckmarkCircleOutline />
                    {ele}
                  </div>
                );
              })}
            </div>


            <NavLink to={'https://user.englishyaari.com/Register'} className="bg-white text28 text-black flex items-center p-2 px-16 mt-6 rounded-full">
              Book your trial
              <GoArrowRight />
            </NavLink>


            <div className="flex gap-3 text28 mt-6 items-center">
              <img className="h-6" src={india} />
              Proudly Made in India
            </div>
          </div>
        </div>
      }
      <div className="lg:mt-[80vh]"></div>


      {
        <div
          className=" lg:hidden bg-theme py-10 mt-20 justify-center items-center"
        >
          <img src={phoneView} />
          <div className="text-center lg:leading-[10px]  text-white bg-fixed flex flex-col justify-center items-center lg:h-[70%] w-full">


            <p className="text-2xl lg:text-5xl  font-bold text-white leading-none lg:leading-[30px] 2xll:leading-[40px] pb-8">
              <br /> Boost your
              <span className="text-[#FFCA7A] leading-[50px] lg:leading-[100px] ml-2 mr-2">
                confidence
              </span>

              with
              <br /> 1-on-1 live English session
            </p>

            <div className="justify-start  items-start px-3 ">
              {[
                "Enhance fluency with 25 minutes of daily practice",
                "Receive personalised mentorship from expert tutors",
                "Get a judgment free space to practice effectively",
              ].map((ele, ind) => {
                return (
                  <div key={ind} className="text24 flex items-center  mt-4 lg:gap-2 font-semibold">
                    <IoIosCheckmarkCircleOutline />
                    {ele}
                  </div>
                );
              })}
            </div>


            <NavLink to={'https://user.englishyaari.com/Register'} className="bg-white text28 text-black flex items-center p-2 px-16 mt-6 rounded-full">
              Book your trial
              <GoArrowRight />
            </NavLink>


            <div className="flex gap-3 text28 mt-6 items-center">
              <img className="h-6" src={india} />
              Proudly Made in India
            </div>
          </div>
        </div>
      }
      <Home />
    </>
  );
};

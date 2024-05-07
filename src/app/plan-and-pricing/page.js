"use client"

import React, { useEffect, useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRegCircle, FaWhatsapp } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import bank from '@/assets/bank.png'
import face from '@/assets/face.png'
import SatisfactionBg from '@/assets/SatisfactionBg.png'
import { planList } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";
import NavBar2 from "@/component/NavBar2";
import PlanPurchase from "@/assets/PlanPurchase.png"
import { GoCheckCircle } from "react-icons/go";
import FAQ from "@/component/FAQ";

const monthlyDiscount = {
  2: "15",
  3: "25",
  4: "35",
  5: "40",
};

const planType = {
  1: "1 Month",
  2: "2 Month",
  3: "3 Month",
  4: "6 Month",
  5: "12 Month",
};

export const PlanAndPricing = (props) => {

  const staticAarray = [
    "Step into 1-on-1 live English conversation ",
    "Get access to personalized lesson plans  ",
    "Constructive feedback after every session",
    "Tips and techniques to speak fluently",
    "Notice remarkable change in just 2-3 months"
    // "500+ Curriculum notes",
  ];

  const whyConsiderUse = [
    "1-on-1 sessions with certified tutors, each lasting  25 minutes.",
    "Flexibility to choose your preferred tutor for each session.",
    "Schedule sessions from 6AM to 12AM midnight, seven days a week. ",
  ];
  const [planPrice, setPlanPrice] = useState(null);
  let planData=[1]
  const navigate = ''
  const [recmended, setRecommended] = useState(3);
  const [recommendedPlan, setRecommendedPlan] = useState(null);
  const [selectedPlan,setSelectedPlan] = useState(null);
  const setPlanData = () => {
        let recommended = planList.find((ele) => ele.planType == 3);
        setPlanPrice(recommended);
        let findRecommended = recommended?.subscriptionPlans?.findIndex(
          (ele) => ele.isRecommended
        );

        let selected = recommended?.subscriptionPlans.find((ele) => ele.isRecommended);
        if(selected){

        
        navigateHandler({
          ...selected,
          discountPrice: Number(afterDistcountPrice(selected)),
          planType: planPrice?.planType,
        },findRecommended);
      }
        // setRecommendedPlan(findRecommended);
        scrollToBottom();
  };

  let calculateMonthlyPrice = (ele) => {
    let discount = (ele.originalPrice * ele?.discountPercent) / 100;
    let final = ele.originalPrice - discount;
    let total = final / planPrice?.planType;
    return total.toFixed(0);
  };

  let afterDistcountPrice = (ele) => {
    let discount = (ele.originalPrice * ele?.discountPercent) / 100;
    let final = ele.originalPrice - discount;
    return final.toFixed(0);
  };

  let perClasssPrice = (ele) => {
    let discount = (ele.originalPrice * ele?.discountPercent) / 100;
    let final = ele.originalPrice - discount;
    let res = final / ele?.totalSessions;
    return res.toFixed(0);
  };

  const myStyle = {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  };

  const navigateHandler = (item,index) => {
    setRecommendedPlan(index)

    setSelectedPlan(item)
    // navigate("/CheckoutView", { state: { item } });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: adds smooth scrolling behavior
    });
  };


  console.log(selectedPlan,'yess');
  
  useEffect(() => {
    setPlanData();
  }, []);

  return (

    <div className="bg-background">
                  <NavBar2/>

    <div className=" rounded-md overflow-hidden w-[90vw]  mx-auto    topSpace ">
        <Image 
          className="h-40 w-full "
          src={SatisfactionBg}
        />
      </div>
 
    <div className="sideMargin">
           {/* <Helmet>
        <meta name="description" content="Flexible plan for professionals" />
        <title>Pricing For Spoken English</title>
        <link rel="canonical" href="https://englishyaari.com/plan-and-pricing" />
      </Helmet> */}


      {/* Select Plan */}
      <div className="container mx-auto  ">
          <p className="font-bold h3 text-start lg:text-center pt-10">
            Choose a plan that suits your budget & schedule
          </p>


          <div className="lg:bg-white lg:shadow-xl  lg:px-10 flex-wrap-reverse rounded-2xl flex justify-between mt-10">
            {/* MObile View */}
            <div className="w-full hidden lg:block lg:w-[48%] ">
              <p className="h6 font-bold">Select Number of Month</p>
              {planList.map((ele, ind) => {
                return (
                  <button
                    onClick={() => {
                      setPlanPrice(ele);
                      setRecommended(ind + 1);
                    }}
                    key={ind}
                    className={` border h14 p-3 px-5  mx-2 mt-4 rounded-lg relative ${
                      planPrice?.planType == ele?.planType
                        ? "border-theme text-theme bg-lightPurpule"
                        : "border-stroke_Color text-secondry"
                    }`}
                  >
                    <span className=" "> {planType[ele.planType]}</span>
                    {recmended == ind && (
                      <p className="absolute w-full left-0 -top-5 bg-lightPurpule text-sm font-semibold text-theme py-1 px-1 rounded-full ">
                        Save {monthlyDiscount[ele.planType]}%
                      </p>
                    )}
                  </button>
                );
              })}

              <div className="mt-7 w-full">
                <p className="h6 font-bold">Spoken English Classes for Professionals</p>

                <div className="flex flex-col items-start">
                  {whyConsiderUse.map((item, index) => {
                    return (
                      <div key={index} className="mt-4 ">
                        <div className="flex flex-col items-center justify-center ">
                          <div className="flex items-center justify-center ">
                            <div className=" rounded-full flex justify-center items-center text-sucess">
                              <CiCircleCheck />
                            </div>
                            <div className="text-secondry font-normal  ml-4 h18">
                              {item}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between mt-16">
                  <div>
                    <div className="h-14 w-14 rounded-full bg-purpleShade/10 flex items-center justify-center">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_9485_4263)">
                          <path
                            d="M10.5 10.5H17.5"
                            stroke="#7B17CA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.5 14H17.5"
                            stroke="#7B17CA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.5 17.5H14"
                            stroke="#7B17CA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.138 23.625H5.25C5.01794 23.625 4.79538 23.5328 4.63128 23.3687C4.46719 23.2046 4.375 22.9821 4.375 22.75V5.25C4.375 5.01794 4.46719 4.79538 4.63128 4.63128C4.79538 4.46719 5.01794 4.375 5.25 4.375H22.75C22.9821 4.375 23.2046 4.46719 23.3687 4.63128C23.5328 4.79538 23.625 5.01794 23.625 5.25V17.138C23.6249 17.3697 23.5328 17.592 23.3691 17.7559L17.7559 23.3691C17.592 23.5328 17.3697 23.6249 17.138 23.625Z"
                            stroke="#7B17CA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23.5462 17.499H17.5V23.5453"
                            stroke="#7B17CA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9485_4263">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-xl font-medium mt-4">Customized notes</p>
                    <p className="text-lg text-secondry">
                      Get access to customized notes <br /> for every sessions
                    </p>
                  </div>

                  <div className="w-[50%]">
                    <div className="h-14 w-14 rounded-full bg-purpleShade/10 flex items-center justify-center">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_9485_2845)">
                          <path
                            d="M21 7H3.5C3.01675 7 2.625 7.39175 2.625 7.875V20.125C2.625 20.6082 3.01675 21 3.5 21H21C21.4832 21 21.875 20.6082 21.875 20.125V7.875C21.875 7.39175 21.4832 7 21 7Z"
                            stroke="#7B17CA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21.875 12.25L27.125 8.75V19.25L21.875 15.75"
                            stroke="#7B17CA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9485_2845">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="text20 font-medium mt-4">Session Recording</p>
                    <p className="text18 text-secondry">
                   Get access privately saved session recordings to track your progress.
                    </p>
                  </div>
                </div>

                <div className="p-4 border rounded-lg text20 font-medium text-secondry  bg-[#fafafa] mt-14">
                  <div className="flex">
                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-lightPurpule mr-4">
                      <Image  className="h-8 w-8" src={face}/>
                    </div>
                    <div className="">
                    Not sure, which subscription <br /> plan to choose?
                    <Link 
                    href='https://api.whatsapp.com/send/?phone=916209848131&text&type=phone_number&app_absent=0'>
                  <div className="bg-lightPurpule border-purpleShade border p-2 rounded-full w-[100%] px-6 flex items-center justify-center text20 mt-3">
                 
                    <p className="font-semibold text-theme text-lg">
                    Connect with our counsellor
                    </p>
                  </div>
                    </Link>
                    </div>

                  </div>
              
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[48%]">
              <div className="lg:hidden mb-6">
                <p className="text-xl font-bold">Select Number of Months</p>
                {planList.map((ele, ind) => {
                  return (
                    <button
                      onClick={() => {
                        setPlanPrice(ele);
                        setRecommended(ind + 1);
                      }}
                      key={ind}
                      className={` border p-3 px-4  mx-1 mt-4 rounded-lg relative ${
                        planPrice?.planType == ele?.planType
                          ? "border-theme text-theme bg-lightPurpule"
                          : "border-stroke_Color text-secondry"
                      }`}
                    >
                      <span className=" "> {planType[ele.planType]}</span>
                      {recmended == ind && (
                        <p className="absolute -top-3 bg-purpleShade text-sm  font-semibold text-white px-1 rounded-full ">
                          Save {monthlyDiscount[ele.planType]}%
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>

              <p className="text-xl font-bold">Select Number of session</p>
              <p className="text20 font-normal text-secondry">
                You can take as many sessions as you want in a week.
              </p>

              <div>
                {planPrice?.subscriptionPlans?.map((ele, ind) => {
                  return (
                    <Card
                      key={ind}
                      item={ele}
                      index={ind}
                      recommendedPlan={recommendedPlan}
                      navigateHandler={navigateHandler}
                      planPrice={planPrice}
                    />
                  );
                })}
                {/* <Card status={true} />
      <Card /> */}
              </div>

              <div className="mt-10">
                <a  href={'https://user.englishyaari.com/Register?public=true'}>
                <div
                onClick={()=>{
                   navigate('');
                }}
                 className="bg-theme flex items-center justify-center text-white w-full rounded-full p-2.5 text32 font-medium ">
                  Subscribe Now

                </div>
                  </a>

                <div className="my-4 text-center">
                  <p>OR</p>
                </div>

                <a  href={'https://user.englishyaari.com/Register?public=true'}>
                <div className="border flex justify-center items-center border-theme text-theme w-full rounded-full p-2.5 text32 font-medium ">
                  Book Trial @ ₹99/-
                </div>
                  </a>
              </div>

              <div className="p-4 border rounded-lg mt-7 text20 font-medium text-secondry">
                Tight on budget? Don’t worry! EMI option available
                <Image className=" h-6 mt-4 lg:mt-0 lg:h-10 object-contain" src={bank} />
              </div>
            </div>
          </div>

          <div className=" lg:hidden mb-10">
          <div className="mt-7 w-full">
                <p className="text24 font-bold">Spoken English Classes for Professionals</p>

                <div className="flex flex-col items-start">
                  {whyConsiderUse.map((item, index) => {
                    return (
                      <div key={index} className="mt-4 ">
                        <div className="flex flex-col items-center justify-center ">
                          <div className="flex items-center justify-center ">
                            <div className=" rounded-full flex justify-center items-center text-sucess">
                              <CiCircleCheck />
                            </div>
                            <div className="text-secondry font-normal  ml-4 text18">
                              {item}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between mt-16">
                  <div className=" w-full">
                    <div className="h-14 w-14 rounded-full bg-lightPurpule flex items-center justify-center">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_9485_4263)">
                          <path
                            d="M10.5 10.5H17.5"
                            stroke="#30237B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.5 14H17.5"
                            stroke="#30237B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.5 17.5H14"
                            stroke="#30237B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.138 23.625H5.25C5.01794 23.625 4.79538 23.5328 4.63128 23.3687C4.46719 23.2046 4.375 22.9821 4.375 22.75V5.25C4.375 5.01794 4.46719 4.79538 4.63128 4.63128C4.79538 4.46719 5.01794 4.375 5.25 4.375H22.75C22.9821 4.375 23.2046 4.46719 23.3687 4.63128C23.5328 4.79538 23.625 5.01794 23.625 5.25V17.138C23.6249 17.3697 23.5328 17.592 23.3691 17.7559L17.7559 23.3691C17.592 23.5328 17.3697 23.6249 17.138 23.625Z"
                            stroke="#30237B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23.5462 17.499H17.5V23.5453"
                            stroke="#30237B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9485_4263">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="text20 font-medium mt-4">Customized notes</p>
                    <p className="text18 text-secondry">
                      Get access to customized notes <br /> for every sessions
                    </p>
                  </div>

                  <div className="w-[100%]">
                    <div className="h-14 w-14 rounded-full bg-lightPurpule flex items-center justify-center">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_9485_2845)">
                          <path
                            d="M21 7H3.5C3.01675 7 2.625 7.39175 2.625 7.875V20.125C2.625 20.6082 3.01675 21 3.5 21H21C21.4832 21 21.875 20.6082 21.875 20.125V7.875C21.875 7.39175 21.4832 7 21 7Z"
                            stroke="#30237B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21.875 12.25L27.125 8.75V19.25L21.875 15.75"
                            stroke="#30237B"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9485_2845">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="text20 font-medium mt-4">Session Recording</p>
                    <p className="text18 text-secondry">
                   Get access privately saved session recordings to track your progress.
                    </p>
                  </div>
                </div>

                <div className="p-4 border rounded-lg text20 font-medium text-secondry  bg-background mt-14">
                  <div className="flex">
                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-lightPurpule mr-4">
                      <Image  className="h-8 w-8" src={face}/>
                    </div>
                    Not sure, which subscription plan to choose?
                  </div>

                  <div className="bg-lightPurpule mx-auto border border-purpleShade p-2 rounded-full w-[80%] flex items-center justify-center text20 mt-3">
                    <Link 
                    href='https://api.whatsapp.com/send/?phone=916209848131&text&type=phone_number&app_absent=0'>
                    <p className="font-semibold text-theme">
                      Talk to our counsellor
                    </p>
                    </Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>



    
    <div className="flex w-[90%] flex-wrap mx-auto bg-white rounded-2xl overflow-hidden   margin120">
      <Image className=" w-full lg:w-[45%] h-[300px] lg:h-[500px] object-fill" src={PlanPurchase}/>
      <div className="w-full lg:w-[55%] p-4 lg:p-8 ">
        <p className="h3 font-semibold text-center mb-10">EnglishYaari Learning Approach</p>

        {
          staticAarray?.map((ele,ind)=>{
            return(
              <div key={ind} className="flex gap-3 mt-8  font-medium ">
                <GoCheckCircle  className="h28 text-sucess"/>

                {ele}
              </div>
            )
          })
        }
      </div>
    </div>

    <p className="w-full pb-20"></p>

    <div className="w-full">
        <div className="bg-white py-10  w-[100vw] mx-auto">
          <p className="h1  text-black font-semibold text-center">
            Have a question?
          </p>
          <p className="text24 font-semibold text-center text-secondry">
            Find the answers in our FAQs
          </p>
          <div className="container flex !mt-10 flex-wrap-reverse px-4 md:px-0">
            <div className="  w-full lg:w-[30%] px-4 flex justify-center items-start flex-col">
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
                  <p>+91 9798286015</p>
                  <p className="text-secondry font-medium mt-3 font-inter">
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
                  <p className="text-secondry font-medium mt-3 font-inter">
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
                question={"How EnglishYaari works?"}
                answer={<div>
                  <p className='text-secondry font-medium mt-3'>
                    (a) 1-on-1 Live classes : we provide 25 minute calls to our learners to enhance their spoken English skills and provide personalised learning experience.
                  </p>
                  <p className='text-secondry font-medium mt-3'>
                    (b) Personalised tutors : learners get connected with expert tutors like you to attain fluency .
                  </p>
                  <p className='text-secondry font-medium mt-3'>
                    (c) Personalised lesson plan : We provide customised lesson plans to tutors as well as learners for better learning.
                  </p>
                  <p className='text-secondry font-medium mt-3'>
                    (d) Progress report: By the end of every session ,tutors provide constructive feedback to the learners.
                  </p>

                  <p className='text-secondry font-medium mt-3'>
                    (e) Recorded Sessions: All sessions are recorded for our learners so that they can revise what they have learnt in the previous session .
                  </p>
                </div>}
              />
              <FAQ
                question={"Who can apply to become a tutor at EnglishYaari? "}
                answer={<div>
                  <p className='text-secondry font-medium mt-3'>
                    We are seeking for passionate tutors who can dedicate their teaching methodologies in their classes to help learners achieve their learning Goal.
                  </p>

                  <p className='text-secondry font-medium mt-3'>
                    Tutors can be educators, graduate/postgraduate College Students, or even working professionals With any language certification (like CELTA, TEFL/ TESOL) .
                  </p>
                </div>}
              />

              <FAQ
                question={"What qualities do you need to become a tutor at EnglishYaari ?"}
                answer={<div>
                  <p className='text-secondry font-medium mt-3'>
                  We are seeking dedicated individuals to join our team at EnglishYaari as tutors. Here are some qualities which can help you become a perfect fit .
                  </p>


                  <p className='text-secondry font-medium mt-3'>
                    (a) Exceptional Spoken English Skills
                  </p>
                  <p className='text-secondry font-medium mt-3'>
                    (b) Passion for teaching
                  </p>
                  <p className='text-secondry font-medium mt-3'>
                    (c) Open to Learning and new Experience.
                  </p>
                  <p className='text-secondry font-medium mt-3'>
                    (d)  Ability to empathise with learner’s challenges and tailor instructions accordingly.
                  </p>

                  <p className='text-secondry font-medium mt-3'>
                    (e) Capability to motivate and inspire learners to communicate confidently in English .
                  </p>

                </div>}
              />

              <FAQ
                question={"What age group of learners should I be teaching?"}
                answer={
                  <div>
                  <p className='text-secondry font-medium mt-3'>
                    At EnglishYaari , we offer spoken English courses tailored for a diverse range of learners ,including housewives,working professionals ,kids,college students ,entrepreneurs,business owners,employees,and individuals of all age groups.”
                    </p>
                  </div>
                }
              />

              <FAQ
                question={"What is the procedure of becoming a tutor at EnglishYaari?"}
                answer={<div>
                  <p className='my-3'>
                    (a) Application Submission :
                    <p>
                    Start by submitting your application through our official website .
                    </p>
                  </p>

                  <p className='my-3'>
                    (b) Application Assessment :
                    <p>
                    Our recruitment team will review your application within 7 working days and revert via Email.
                    </p>
                  </p>


                  <p  className='my-3'>
                    (c) Interview and Evaluation :
                    <p>
                    If your application meets our criteria , you will be invited for an interview and assessment to gauge your teaching skills (excellent Communication & conversational skills)
                    </p>
                  </p>


                  <p className='my-3'>
                    (a) Feedback and Training :
                    <p>
                    After successful evaluation, you will receive feedback and necessary training to align your teaching approach with our methodologies.
                    </p>
                  </p>


                  <p className='my-3'>
                    (a)  Onboarding :
                    <p>
                    Finally, once you’ve completed the above steps ,you will officially join us as a tutor, now you are ready to empower learners with improved spoken English skills.
                    </p>
                  </p>
                </div>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};





export default PlanAndPricing;

const Card = ({ status, item, recommendedPlan, index, navigateHandler,planPrice }) => {
  // let calculateMonthlyPrice = (ele) => {
  //   let discount = (ele.originalPrice * ele?.discountPercent) / 100;
  //   let final = ele.originalPrice - discount;
  //   let total = final / planPrice?.planType;
  //   return total.toFixed(0);
  // };

  let afterDistcountPrice = (ele) => {
    let discount = (ele.originalPrice * ele?.discountPercent) / 100;
    let final = ele.originalPrice - discount;
    return final.toFixed(0);
  };

  let perClasssPrice = (ele) => {
    let discount = (ele.originalPrice * ele?.discountPercent) / 100;
    let final = ele.originalPrice - discount;
    let res = final / ele?.totalSessions;
    return res.toFixed(0);
  };
  const myStyle = {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  };
  return (
    <div
      onClick={() => {
        navigateHandler({
          ...item,
          discountPrice: Number(afterDistcountPrice(item)),
          planType: planPrice?.planType,
        },index);
      }}
      className={`${
        recommendedPlan == index ? "bg-[#F5EDFF] border-theme" : "bg-white "
      } border flex justify-between items-center p-3 lg:px-6 lg:p-6 rounded-2xl mt-5 relative`}
    >
      <div className="flex items-center ">
        <>
          { recommendedPlan == index  ? (
            <IoIosCheckmarkCircleOutline className="text-3xl lg:text-4xl text-theme" />
          ) : (
            <FaRegCircle className="text-3xl lg:text-2xl text-secondry" />
          )}
        </>

        <div className="ml-3">
          <p className="text36">
            {" "}
            <span className="text40 font-bold">{item?.totalSessions}</span>{" "}
            session
          </p>

          <p className="font-medium text28 mt-2">
            ₹{afterDistcountPrice(item)}
            <span
              style={myStyle}
              className="text28 font-normal text-secondry  ml-3"
            >
              ₹{item?.originalPrice}
            </span>
          </p>
        </div>
      </div>

      <div className=" ">
        <div className="border-b border-t border-secondry">
          <p className="text24 font-bold text-theme">
            ₹{perClasssPrice(item)}
            <span className="text-secondry font-extralight ml-2 ">
              Per session
            </span>
          </p>
        </div>
        <div>
          <p style={myStyle} className="font-normal text-secondry mt-2">
            ₹{Number(item?.originalPrice/item?.totalSessions).toFixed(0)} <span>Per class</span>
          </p>
        </div>
      </div>

      {item?.isRecommended && (
        <button class="bg-[#7F34DF] text-white font-bold py-1  px-4 rounded-full absolute  text-sm -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          Recommended
        </button>
      )}
    </div>
  );
};
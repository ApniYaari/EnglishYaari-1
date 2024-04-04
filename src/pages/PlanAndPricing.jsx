import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { RiSparklingLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { PiCrown, PiSparkle } from "react-icons/pi";
import Odometer from "../../Components/Common/Odometer";
import { CiCircleCheck } from "react-icons/ci";
import bank from '../../src/assets/bank.png'
import face from '../../src/assets/face.png';

import { planList, tempData } from "../utils/Constant";

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
    "25 Minutes Live 1-on-1 Classes",
    "Access to 500+ expert tutors",
    "Flexible Class Timings",
    "500+ Curriculum notes",
  ];

  const whyConsiderUse = [
    "1-on-1 sessions with certified tutors, each lasting  25 minutes.",
    "Flexibility to choose your preferred tutor for each.",
    "Take classes from 6AM to 12AM midnight, seven days a week. ",
  ];
  const [planPrice, setPlanPrice] = useState(null);
  let planData=[1]
  const navigate = useNavigate();
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
    // window.scrollTo({
    //   top: 140,
    //   behavior: "smooth", // Optional: adds smooth scrolling behavior
    // });
  };


  console.log(selectedPlan,'yess');
  
  useEffect(() => {
    setPlanData();
  }, []);

  return (
    <div className="sideMargin topSpace">
      {/* <div className="h-40 rounded-md overflow-hidden bg-yellow-400 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://t4.ftcdn.net/jpg/02/18/18/55/360_F_218185587_P4zituDtWJOfClUKL6merI0BgLMIxoeC.jpg"
        />
      </div> */}

      {/* Select Plan */}
      <div className="container mx-auto ">
          <p className="font-bold text36 text-center">
            Choose a plans that suits your budget & schedule
          </p>

          <div className="flex justify-center mt-8 flex-wrap">
            {staticAarray.map((item, index) => {
              return (
                <div key={index} className=" mx-3">
                  <div className="flex flex-col items-center justify-center ">
                    <div className="flex items-center justify-center ">
                      <div className=" rounded-full flex justify-center items-center text-sucess">
                        <CiCircleCheck />
                      </div>
                      <div className="text-secondry font-normal text20 ml-4">
                        {item}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white shadow-xl p-6 lg:px-10 flex-wrap-reverse rounded-2xl flex justify-between mt-10">
            {/* MObile View */}
            <div className="w-full lg:w-[48%] ">
              <p className="text24 font-bold">Select Number of Months</p>
              {planList.map((ele, ind) => {
                return (
                  <button
                    onClick={() => {
                      setPlanPrice(ele);
                      setRecommended(ind + 1);
                    }}
                    key={ind}
                    className={` border p-3 px-5  mx-2 mt-4 rounded-lg relative ${
                      planPrice?.planType == ele?.planType
                        ? "border-theme text-theme bg-lightPurpule"
                        : "border-stroke_Color text-secondry"
                    }`}
                  >
                    <span className=" "> {planType[ele.planType]}</span>
                    {recmended == ind && (
                      <p className="absolute -top-3 bg-lightPurpule text-sm font-semibold text-theme px-1 rounded-full ">
                        Save {monthlyDiscount[ele.planType]}%
                      </p>
                    )}
                  </button>
                );
              })}

              <div className="mt-7 w-full">
                <p className="text24 font-bold">Why you should consider us?</p>

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
                  <div>
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
                      Get access to customized notes <br /> after every sessions
                    </p>
                  </div>

                  <div>
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
                    <p className="text20 font-medium mt-4">Customized notes</p>
                    <p className="text18 text-secondry">
                      Get access to customized notes <br /> after every sessions
                    </p>
                  </div>
                </div>

                <div className="p-4 border rounded-lg text20 font-medium text-secondry  bg-background mt-14">
                  <div className="flex">
                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-lightPurpule mr-4">
                      <img  className="h-8 w-8" src={face}/>
                    </div>
                    Not sure about which subscription <br /> plan to choose?
                  </div>

                  <div className="bg-lightPurpule p-2 rounded-full w-[80%] flex items-center justify-center text20 mt-3">
                    <NavLink 
                    to='https://api.whatsapp.com/send/?phone=916209848131&text&type=phone_number&app_absent=0'>
                    <p className="font-semibold text-theme">
                      Talk to our counsellor
                    </p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[48%]">
              <div className="lg:hidden mb-6">
                <p className="text24 font-bold">Select Number of Months</p>
                {planList.map((ele, ind) => {
                  return (
                    <button
                      onClick={() => {
                        setPlanPrice(ele);
                        setRecommended(ind + 1);
                      }}
                      key={ind}
                      className={` border p-3 px-5  mx-2 mt-4 rounded-lg relative ${
                        planPrice?.planType == ele?.planType
                          ? "border-theme text-theme bg-lightPurpule"
                          : "border-stroke_Color text-secondry"
                      }`}
                    >
                      <span className=" "> {planType[ele.planType]}</span>
                      {recmended == ind && (
                        <p className="absolute -top-3 bg-lightPurpule text-sm font-semibold text-theme px-1 rounded-full ">
                          Save {monthlyDiscount[ele.planType]}%
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>

              <p className="text24 font-bold">Select Number of classes</p>
              <p className="text20 font-normal text-secondry">
                You can take as many classes as you want in a week.
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
                <div
                onClick={()=>{
                   navigate('');
                }}
                 className="bg-theme flex items-center justify-center text-white w-full rounded-full p-2.5 text32 font-medium ">
                  <a  href={'https://user.englishyaari.com/Register?public=true'}>
                  Subscribe Now

                  </a>
                </div>

                <div className="my-4 text-center">
                  <p>OR</p>
                </div>

                <div className="border flex justify-center items-center border-theme text-theme w-full rounded-full p-2.5 text32 font-medium ">
                <a  href={'https://user.englishyaari.com/Register?public=true'}>
                  Book Trial @ ₹99/-
                  </a>
                </div>
              </div>

              <div className="p-4 border rounded-lg mt-7 text20 font-medium text-secondry">
                Tight on budget? Don’t worry! EMI option available
                <img className="h-8 object-contain mt-6" src={bank} />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};





export default PlanAndPricing;

const Card = ({ status, item, recommendedPlan, index, navigateHandler,planPrice }) => {
  console.log(item);
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
      } border flex justify-between items-center px-6 p-6 rounded-2xl mt-5 relative`}
    >
      <div className="flex items-center ">
        <>
          {true ? (
            <IoIosCheckmarkCircleOutline className="text-4xl text-theme" />
          ) : (
            <FaRegCircle className="text-3xl text-secondry" />
          )}
        </>

        <div className="ml-3">
          <p className="text36">
            {" "}
            <span className="text40 font-bold">{item?.totalSessions}</span>{" "}
            session
          </p>

          <p className="font-medium text28 mt-2">
            @₹{afterDistcountPrice(item)}
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
              Per class
            </span>
          </p>
        </div>
        <div>
          <p style={myStyle} className="font-normal text-secondry mt-2">
            {/* ₹{Number(item?.originalPrice/item?.totalSessions).toFixed(0)} <span>Per class</span> */}
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
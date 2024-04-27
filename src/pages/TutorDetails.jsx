import React, { useState } from "react";
import { GiRoundStar } from "react-icons/gi";
import { RxArrowRight } from "react-icons/rx";
import useWeekArray from "../../src/customHook/useWeekArray"
import { slotTimingArray } from "../utils/Helper";
import { GoStarFill } from "react-icons/go";
import Experience, { TimelineWithIcon } from "../component/TimelineWithIcon";

function TutorDetails() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container flex flex-wrap-reverse justify-between !mt-10">
        <div className=" w-full lg:w-[60%]">
          <Card />
        </div>

        <div className=" w-full lg:w-[35%] bg-white shadow-xl  rounded-2xl overflow-hidden">
          <div className="w-full  ">
            <img
              className="w-full h-[70%]"
              src="https://images.thequint.com/thequint/2019-09/f2873f26-22fa-468d-b29e-b8049a51a787/hero_image_2__1_.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0"
            />
          </div>

          <div className="p-4 hidden lg:flex">
            <button className="bg-theme w-[80%] mx-auto justify-center gap-3 p-2 rounded-full text-white flex items-center">
              Book a class <RxArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* othet infotrmation */}
      <div className="container mx-auto pt-10">
        <div className="flex ">
          {["Availability", "Reviews", "Exp. & Edu."].map((ele, ind) => {
            return (
              <button key={ind} className="px-4 font-semibold">
                {ele}
              </button>
            );
          })}
        </div>

        <div className=" w-full lg:w-[60%]">
          <Availability />

          <Reviews />




        </div>

        <div>
            <p className="text20 font-semibold mt-10">Recommended tutors</p>

            <div className="flex overflow-scroll">
            {
              [1,1,1,1,1,1,].map((ele,ind)=>{
                return(
                  <RecommendedCrad key={ind}/>
                )
              })
            }
            </div>
          </div>
      </div>
      
    </div>
  );
}

export default TutorDetails;

const Card = () => {
  return (
    <div className="bg-white p-4 shadow-xl rounded-lg h-full">
      <div className=" flex gap-6 ">
        <div className=" w-40 rounded-md overflow-hidden h-20 lg:h-36 rounded-t-lg border">
          <img
            className="h-full w-full object-cover"
            src="https://img.freepik.com/premium-vector/avatar-profile-colorful-illustration-2_549209-82.jpg"
          />
        </div>
        <div className="w-[70%] lg:w-auto border">
          <p className="  text20 font-semibold">Abhijeet Chawla</p>

          <p className="text-sm font-normal text-secondry">
            Professional Teacher
          </p>

          <div className="flex items-center text-xs gap-2">
            <div className="text-yellow-700 font-semibold flex items-center">
              <GiRoundStar className="text-yellow-700 mr-2" /> 4.9
            </div>
            <p className="text-xs text-secondry mr-2">Rating</p>
          </div>

          <div className="flex overflow-scroll  lg:w-auto">
            {["NPTEL speaker", "NPTEL speaker", "NPTEL speaker"].map(
              (ele, ind) => {
                return (
                  <div

                    key={ind}
                    className="border min-w-[110px] lg:w-auto text-xs lg:text-base bg-white shadow mr-3 p-1 px-3 rounded-full mt-3  "
                  >
                    {ele}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="text20 font-semibold">About Me</p>

        <div className="flex">
          {["NPTEL speaker", "NPTEL speaker", "NPTEL speaker"].map(
            (ele, ind) => {
              return (
                <div
                  key={ind}
                  className="border bg-lightPurpule text-theme font-semibold mr-3 p-1 px-3 rounded-full mt-3"
                >
                  {ele}
                </div>
              );
            }
          )}
        </div>

        <div className="mt-4">
          <p className="font-normal">
            Lorem ipsum dolor sit amet consectetur. Augue risus nec sociis nunc
            cursus justo faucibus enim neque. AliqueLorem ipsum dolor sit amet
            consectetur. Augue risus nec sociis nunc Aliquet{" "}
            <span className="text-theme font-semibold">Read more</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Availability = () => {
  const weekArray = useWeekArray();
  const [selectDateIndex, setSelectedDateIndex] = useState(1);
  const timeArray = slotTimingArray();
  return (
    <div className="bg-white w-full mt-6 p-4 shadow-2xl rounded-lg">
      <div>
        {weekArray.map((day, ind) => {
          return (
            <button
              key={ind}
              //   onClick={() => changeDayHanlder(ind, day.timestamp)}
              className={`${selectDateIndex == ind
                  ? "bg-theme text-white"
                  : "bg-white text-secondry border border-stroke_Color "
                } min-w-[80px] md:min-w-[60px] py-1 font-semibold text18 rounded-md mr-3 mt-2 `}
            >
              <p className="text-xs"> {day.day.slice(0, 3)}</p>
              <p>{day.date}</p>
            </button>
          );
        })}
      </div>

      <p className="font-medium mt-4">Choose your timing</p>

      <div className="flex flex-wrap w-full  mb-5  lg:pr-10 h-[175px] overflow-hidden relative ">
        {timeArray.map((ele, ind) => {
          return (
            <button
              key={ind}
              onClick={() => searchSlot(ele)}
              // data-dropdown-toggle="dropdown"
              class="text-black mt-3 h-[36px]  text-sm flex w-[160px]   justify-between items-center "
              type="button"
            >
              <li
                className={
                  " flex rounded-full items-center justify-between px-4 hover:bg-gray-100  border "
                }
              >
                <a href="#" class="block  text-start text-sm  py-2 text-[#94939F]">
                  {ele.startTime}- {ele?.endTime}
                </a>
              </li>
            </button>
          );
        })}

        <div className="h-full absolute w-full bg-white/30 flex justify-center items-center">
          <button className="bg-theme text18 text-white flex items-center gap-3 px-6 rounded-full py-2">
            Login to see slot availability
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.4199 6.4125H13.7574V4.375C13.7574 3.42354 13.3795 2.51104 12.7067 1.83825C12.0339 1.16547 11.1214 0.7875 10.1699 0.7875C9.21846 0.7875 8.30596 1.16547 7.63318 1.83825C6.96039 2.51104 6.58242 3.42354 6.58242 4.375V6.4125H3.91992C3.6315 6.4125 3.35489 6.52708 3.15094 6.73102C2.947 6.93497 2.83242 7.21158 2.83242 7.5V16.25C2.83242 16.5384 2.947 16.815 3.15094 17.019C3.35489 17.2229 3.6315 17.3375 3.91992 17.3375H16.4199C16.7083 17.3375 16.985 17.2229 17.1889 17.019C17.3928 16.815 17.5074 16.5384 17.5074 16.25V7.5C17.5074 7.21158 17.3928 6.93497 17.1889 6.73102C16.985 6.52708 16.7083 6.4125 16.4199 6.4125ZM7.50742 4.375C7.50742 3.66886 7.78793 2.99164 8.28725 2.49233C8.78657 1.99301 9.46378 1.7125 10.1699 1.7125C10.8761 1.7125 11.5533 1.99301 12.0526 2.49233C12.5519 2.99164 12.8324 3.66886 12.8324 4.375V6.4125H7.50742V4.375ZM16.5824 16.25C16.5824 16.2931 16.5653 16.3344 16.5348 16.3649C16.5044 16.3954 16.463 16.4125 16.4199 16.4125H3.91992C3.87682 16.4125 3.83549 16.3954 3.80502 16.3649C3.77454 16.3344 3.75742 16.2931 3.75742 16.25V7.5C3.75742 7.4569 3.77454 7.41557 3.80502 7.38509C3.83549 7.35462 3.87682 7.3375 3.91992 7.3375H16.4199C16.463 7.3375 16.5044 7.35462 16.5348 7.3851C16.5653 7.41557 16.5824 7.4569 16.5824 7.5V16.25ZM10.8143 12.3056C10.8995 12.1781 10.9449 12.0283 10.9449 11.875C10.9449 11.6695 10.8633 11.4723 10.7179 11.327C10.5726 11.1817 10.3755 11.1 10.1699 11.1C10.0166 11.1 9.8668 11.1455 9.73936 11.2306C9.61191 11.3158 9.51257 11.4368 9.45392 11.5784C9.39526 11.72 9.37991 11.8759 9.40981 12.0262C9.43972 12.1765 9.51353 12.3146 9.62191 12.423C9.7303 12.5314 9.86839 12.6052 10.0187 12.6351C10.1691 12.665 10.3249 12.6497 10.4665 12.591C10.6081 12.5323 10.7292 12.433 10.8143 12.3056Z" fill="#EEECF8" stroke="#EEECF8" stroke-width="0.3" />
            </svg>

          </button>
        </div>
      </div>
    </div>
  );
};


const Reviews = () => {
  const timeArray = slotTimingArray();
  return (
    <div className="bg-white w-full mt-6 p-4 shadow-2xl rounded-lg">
      <div>

      </div>

      <p className="font-medium mt-4">What student speaks about the tutor.</p>

      <div className="flex flex-wrap justify-between w-full  mb-5  lg:pr-10 h-[375px] overflow-hidden relative backdrop-blur-sm bg-white/30 ">

        {
          [1, 1, 1, 1, 1,1].map((ele, ind) => {
            return (
              <div key={ind} className="w-full lg:w-[48%] bg-lightPurpule mt-4 p-2 rounded-xl border">

                <div className="flex justify-between items-center">
                  <div className="flex">
                    <img className="h-6 w-6 object-cover  rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Giorgia_Meloni_Official_2023_%28cropped%29.jpg/640px-Giorgia_Meloni_Official_2023_%28cropped%29.jpg" />
                    <p className="text-base font-bold">Giorgia Meloni</p>
                  </div>
                  <div className="flex">
                    {
                      [1, 1, 1, 1, 1].map((ele, ind) => {
                        return (

                          <GoStarFill key={ind} className="text-theme text-sm"/>
                        )
                      })
                    }
                  </div>

                </div>

                <p className="text-xs mt-3">
                My name is Precious. I am 25 years old and I am from South Africa. I have a Bachelor's Degree in IT and I  also have a 120-hour TEFL 
                </p>
              </div>
            )
          })
        }

        <div className="h-full absolute w-full  flex justify-center items-center backdrop-blur-sm bg-white/30">
          <button className="bg-theme text18 text-white flex items-center gap-3 px-6 rounded-full py-2">
            Login to see slot availability
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.4199 6.4125H13.7574V4.375C13.7574 3.42354 13.3795 2.51104 12.7067 1.83825C12.0339 1.16547 11.1214 0.7875 10.1699 0.7875C9.21846 0.7875 8.30596 1.16547 7.63318 1.83825C6.96039 2.51104 6.58242 3.42354 6.58242 4.375V6.4125H3.91992C3.6315 6.4125 3.35489 6.52708 3.15094 6.73102C2.947 6.93497 2.83242 7.21158 2.83242 7.5V16.25C2.83242 16.5384 2.947 16.815 3.15094 17.019C3.35489 17.2229 3.6315 17.3375 3.91992 17.3375H16.4199C16.7083 17.3375 16.985 17.2229 17.1889 17.019C17.3928 16.815 17.5074 16.5384 17.5074 16.25V7.5C17.5074 7.21158 17.3928 6.93497 17.1889 6.73102C16.985 6.52708 16.7083 6.4125 16.4199 6.4125ZM7.50742 4.375C7.50742 3.66886 7.78793 2.99164 8.28725 2.49233C8.78657 1.99301 9.46378 1.7125 10.1699 1.7125C10.8761 1.7125 11.5533 1.99301 12.0526 2.49233C12.5519 2.99164 12.8324 3.66886 12.8324 4.375V6.4125H7.50742V4.375ZM16.5824 16.25C16.5824 16.2931 16.5653 16.3344 16.5348 16.3649C16.5044 16.3954 16.463 16.4125 16.4199 16.4125H3.91992C3.87682 16.4125 3.83549 16.3954 3.80502 16.3649C3.77454 16.3344 3.75742 16.2931 3.75742 16.25V7.5C3.75742 7.4569 3.77454 7.41557 3.80502 7.38509C3.83549 7.35462 3.87682 7.3375 3.91992 7.3375H16.4199C16.463 7.3375 16.5044 7.35462 16.5348 7.3851C16.5653 7.41557 16.5824 7.4569 16.5824 7.5V16.25ZM10.8143 12.3056C10.8995 12.1781 10.9449 12.0283 10.9449 11.875C10.9449 11.6695 10.8633 11.4723 10.7179 11.327C10.5726 11.1817 10.3755 11.1 10.1699 11.1C10.0166 11.1 9.8668 11.1455 9.73936 11.2306C9.61191 11.3158 9.51257 11.4368 9.45392 11.5784C9.39526 11.72 9.37991 11.8759 9.40981 12.0262C9.43972 12.1765 9.51353 12.3146 9.62191 12.423C9.7303 12.5314 9.86839 12.6052 10.0187 12.6351C10.1691 12.665 10.3249 12.6497 10.4665 12.591C10.6081 12.5323 10.7292 12.433 10.8143 12.3056Z" fill="#EEECF8" stroke="#EEECF8" stroke-width="0.3" />
            </svg>

          </button>
        </div>
      </div>
    </div>
  );
};


const RecommendedCrad=()=>{
  return(
    <div
    onClick={()=>{
      // setLink(item?.url)
      // setVedioModal(true);
    }}
     className="min-w-[24rem] mr-4   mt-6 rounded-lg  relative overflow-hidden">
    

      <video className="w-full rounded-lg" autoPlay={false}>
          <source src={'https://englishyaarilp.s3.ap-south-1.amazonaws.com/7th+Sept+Arundhati.mp4'} type="video/mp4" className="object-cover" />
          Your browser does not support the video tag.
        </video>

      <div className=" w-full text24 font-medium flex justify-between items-center mt-3">
        Sachin
        <div className="w-[200px]  flex justify-end gap-2">
       
        </div>
      </div>
    </div>
  )
}
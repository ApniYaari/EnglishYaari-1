import React, { useState } from "react";
import { GiRoundStar } from "react-icons/gi";
import { RxArrowRight } from "react-icons/rx";
import useWeekArray from "../../src/customHook/useWeekArray"
import { slotTimingArray } from "../utils/Helper";

function TutorDetails() {
  return (
    <div className="mt-10 bg-background min-h-screen">
      <div className="container flex flex-wrap-reverse justify-between ">
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
          <p className=" text-base lg:text20 font-semibold">Abhijeet Chawla</p>

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
              className={`${
                selectDateIndex == ind
                  ? "bg-theme text-white"
                  : "bg-white text-secondry border border-stroke_Color "
              } min-w-[80px] md:min-w-[100px] py-2 font-semibold rounded-md mr-3 mt-2 `}
            >
              {day.day.slice(0, 3)}
              <p>{day.date}</p>
            </button>
          );
        })}
      </div>

      <p className="font-medium mt-4">Choose your timing</p>

      <div className="flex flex-wrap w-full  gap-x-8 lg:pr-10">
        {timeArray.map((ele, ind) => {
          return (
            <button
              key={ind}
              onClick={() => searchSlot(ele)}
              // data-dropdown-toggle="dropdown"
              class="text-black mt-3  text-sm flex   justify-between items-center h-full"
              type="button"
            >
              <li
                className={
                  " flex rounded-full items-center justify-between gap-x-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border "
                }
              >
                <a href="#" class="block  text-start text-base  py-2">
                  {ele.startTime}- {ele?.endTime}
                </a>
              </li>
            </button>
          );
        })}
      </div>
    </div>
  );
};

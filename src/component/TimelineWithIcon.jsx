
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { FaRegCircle } from "react-icons/fa6";
 
export function TimelineWithIcon({ data, setExperience,setEdit,setDelteModal }) {

  return (
    <div className="w-[32rem]">
    <div className="mt-4 w-[440px]">
      <Timeline>
        {data?.map((ele, ind) => {
          return (
            <TimelineItem key={ind} className=" w-full">
              {/* <TimelineConnector  /> */}
              <span
                class="absolute left-0 grid justify-center bg-transparent transition-opacity duration-200"
                style={{
                  top: "26px",
                  width: "26px",
                  opacity: 1, // Assuming the intended opacity value is 1 instead of 10
                  height: `calc(100% - 26px)`,
                }}
              >
                {ind !== data.length - 1 && (
                  <span class="w-0.5 h-full bg-theme"></span>
                )}
              </span>
              <TimelineHeader>
                <TimelineIcon className="p-1 bg-white border border-theme">
                  <FaCircle
                    className={
                      ind !== data.length - 1 ? "text-theme" : "bg-white"
                    }
                  />
                  {/* <HomeIcon className="h-4 w-4" /> */}
                </TimelineIcon>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="font-urbanistMedium"
                >
                  {'MCA'}
                </Typography>

                

                <button
                  onClick={() => {
                    setEdit(true)
                    setExperience(ele)}}
                  className="absolute right-6"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5649 1.4178C8.69736 1.28534 8.85461 1.18027 9.02767 1.10858C9.20074 1.0369 9.38623 1 9.57355 1C9.76087 1 9.94636 1.0369 10.1194 1.10858C10.2925 1.18027 10.4497 1.28534 10.5822 1.4178C10.7147 1.55026 10.8197 1.70751 10.8914 1.88057C10.9631 2.05364 11 2.23913 11 2.42645C11 2.61377 10.9631 2.79926 10.8914 2.97233C10.8197 3.14539 10.7147 3.30265 10.5822 3.4351L3.7738 10.2435L1 11L1.75649 8.2262L8.5649 1.4178Z"
                      stroke="#30237B"
                      stroke-width="1.3493"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>


                <button
                  onClick={() => {
                    setExperience(ele)
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth"
                    });
                    setDelteModal(true)
                  }
                  }
                  className="absolute right-0"
                >
                  <FaTrash className="text-errror"/>
                </button>
              </TimelineHeader>

              <TimelineBody className="pb-8  w-full">
                <div className="flex">
                  <p>{moment(ele?.startDateTimestamp).format("MMM D YYYY")}</p>-
                  <p>{moment(ele?.endDateTimestamp).format("MMM D YYYY")}</p>
                </div>
                <div className="bg-background w-[400px] py-4 rounded-md mt-2 text-secondry pl-2">
                  {ele?.schoolName}
                </div>
              </TimelineBody>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
    </div>
  );
}
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

export function MeetTutorCard({ item, setLink, setVedioModal, buttonShow }) {
  return (
    <div
      onClick={() => {
        setLink(item?.url)
        setVedioModal(true);
      }}
      className={twMerge(" min-w-[18rem]  relative lg:min-w-[24rem] ", buttonShow ? 'bg-white p-1 rounded-xl' : '')}>



      <CardHeader style={{ boxShadow: 'none' }} floated={false} colorName="blue-gray shadow-none p-0 m-0">
        <Image className="min-w-[18rem]  lg:min-w-[24rem]" src={item?.img} />

        <div className="absolute  h-full w-full bg-black/35 flex justify-start p-3 items-end top-0">
          <svg width="50" height="50" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_480_643)">
              <path d="M20.5506 35.234C28.8552 35.234 35.5875 28.5017 35.5875 20.1971C35.5875 11.8924 28.8552 5.16016 20.5506 5.16016C12.2459 5.16016 5.51367 11.8924 5.51367 20.1971C5.51367 28.5017 12.2459 35.234 20.5506 35.234Z" stroke="white" stroke-width="2.00492" stroke-miterlimit="10" />
              <path d="M26.5673 20.1985L17.0439 13.8496V26.5474L26.5673 20.1985Z" fill="white" stroke="white" stroke-width="1.90467" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_480_643">
                <rect width="40.0984" height="40.0984" fill="white" transform="translate(0.50293 0.148438)" />
              </clipPath>
            </defs>
          </svg>

        </div>



      </CardHeader>
      <CardBody className="p-2 w-full">
        <div className=" flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-semibold font-urbanist"
          >
            {item?.name}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            5.0
          </Typography>
        </div>
        <Typography className="mt-0 p-0 font-urbanist font-medium" color="gray">
          {item?.sessionTaken}+ sessions taken
        </Typography>


        {buttonShow && <div className=" flex bg-primary-100 py-2.5 h14 text-primary-500 mt-3 text-center items-center justify-center rounded-full">
          Book a class
        </div>}
      </CardBody>



    </div>
  );
}



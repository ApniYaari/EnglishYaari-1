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
  import React from "react";
  
  export function MeetTutorCard({ item,setLink ,setVedioModal}) {
    return (
      <div
      onClick={()=>{
        setLink(item?.url)
        setVedioModal(true);
      }}
       className=" min-w-[22rem]  lg:min-w-[24rem] ">
        <CardHeader style={{boxShadow:'none'}} floated={false} color="blue-gray shadow-none p-0 m-0">
        <Image src={item?.img}/>
        </CardHeader>
        <CardBody className="p-2">
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
        </CardBody>
  
      </div>
    );
  }

  
  
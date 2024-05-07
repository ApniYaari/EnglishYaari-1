"use client"

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { LuPlus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

const  FAQ=({question,answer,border})=> {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} className={twMerge("lg:my-6  border-b  lg:py-3 px-0 border-blue-gray-100 lg:px-4",border?'border-none border-transparent':'')}>
        <div
          onClick={() => handleOpen(1)}

          className={twMerge(`border-b-0  transition-colors px-0 mx-0 py-3 lg:py-1 flex justify-between  font-urbanist text18 text-secondry  open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
        `,)}
        >
            <div className=" w-full flex justify-between  text-black  h18">
                <div className="flex text gap-3">
          {question}
                </div>
          <>
          {
            open === 1?
            <RxCross2 className="text-2xl text-sucess"/>:
            <LuPlus className="text-2xl text-sucess"/>

          }
          </>
          </div>
        </div>
        <AccordionBody className="pt-0 text-base font-normal font-urbanist">
         {answer}
        </AccordionBody>
      </Accordion>
   
    </>
  );
}


export default FAQ
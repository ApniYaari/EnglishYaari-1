import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { CiCircleCheck } from "react-icons/ci";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp, IoIosCheckmarkCircleOutline } from "react-icons/io";

export function FAQ({question,answer}) {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} className="my-4 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors px-0 mx-0 flex justify-between  font-urbanist text18 text-secondry  open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
        `}
        >
            <div className=" w-full flex justify-between">
                <div className="flex gap-3">
            <IoIosCheckmarkCircleOutline className="text-sucess  text-2xl"/>
          {question}
                </div>
          <>
          {
            open === 1?
            <IoIosArrowDown className="text-2xl"/>:
            <IoIosArrowUp className="text-2xl"/>

          }
          </>
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal font-urbanist">
         {answer}
        </AccordionBody>
      </Accordion>
   
    </>
  );
}
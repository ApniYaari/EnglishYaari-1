import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { CiCircleCheck } from "react-icons/ci";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const  FAQ=({question,answer})=> {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} className="my-6  border-b  py-3  border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors px-0 mx-0 flex justify-between  font-urbanist text18 text-secondry  open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
        `}
        >
            <div className=" w-full flex justify-between text-black  h18">
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
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal font-urbanist">
         {answer}
        </AccordionBody>
      </Accordion>
   
    </>
  );
}


export default FAQ
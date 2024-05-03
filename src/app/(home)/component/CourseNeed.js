import React from 'react'
import Image from "next/image";

const CourseNeed = ({ width, img, tittle, desc, bg }) => {
    return (
      <div
        className={`${bg}  border break-words border-stroke_Color min-w-[18rem] mr-6 rounded-3xl  flex px-4 py-6  flex-col gap-3 margin24 `}
      >
        <Image
          className={`h-[60px] w-[60px] object-contain ${tittle == "IELTS speaking" ? "w-[120px]" : "w-[60px]"
            }`}
          src={img}
        />
        <p className="text h5 font-bold ">{tittle}</p>
        <p className="text-secondry font-medium  h7 break-words ">{desc}</p>
      </div>
    );
  };

export default CourseNeed
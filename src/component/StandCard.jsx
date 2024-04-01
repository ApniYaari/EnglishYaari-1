import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";

export function StandCard({ bg, icon,title,subTitle }) {
  return (
    <Card className="w:full lg:w-[48%] h-[200px] flex-row  lg:mt-0">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-[25%] shrink-0 rounded-r-none"
      >
        <div className={`h-full w-full ${bg} flex justify-center items-center`}>
          {icon}
        </div>
      </CardHeader>
      <div className="flex justify-center flex-col border  p-5 h-full">
        <Typography
          color="black"
          className=" uppercase text-2xl font-semibold font-urbanist"
        >
          {title}
        </Typography>

        <Typography color="gray" className="mt-2 text-base font-urbanist font-normal">
          {subTitle}
        </Typography>
      </div>
    </Card>
  );
}

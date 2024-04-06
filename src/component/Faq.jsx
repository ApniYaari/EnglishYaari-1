import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function Faq() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion  className="py-3" open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className="font-urbanist text-black"
          onClick={() => handleOpen(1)}
        >
        sss  What is EnglishYaari?
        </AccordionHeader>
        <AccordionBody className="font-normal font-urbanist text-base text-black">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion  className="py-3" open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          className="font-urbanist text-black"
          onClick={() => handleOpen(2)}
        >
         How to book a trial? 
        </AccordionHeader>
        <AccordionBody className="font-normal font-urbanist text-base text-black">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="font-urbanist text-black py-3"
        open={open === 3}
        icon={<Icon id={3} open={open} />}
      >
        <AccordionHeader
          className="font-urbanist text-black py-3"
          onClick={() => handleOpen(3)}
        >
           What is included in the subscription plan?
        </AccordionHeader>
        <AccordionBody className="font-normal font-urbanist text-base text-black">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>

      <Accordion
        className="font-urbanist text-black py-3"
        open={open === 4}
        icon={<Icon id={4} open={open} />}
      >
        <AccordionHeader
          className="font-urbanist text-black"
          onClick={() => handleOpen(4)}
        >
          How to book regular Classes at EnglishYaari?
        </AccordionHeader>
        <AccordionBody className="font-normal font-urbanist text-base text-black">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>

      <Accordion
        className="font-urbanist text-black py-3"
        open={open === 5}
        icon={<Icon id={5} open={open} />}
      >
        <AccordionHeader
          className="font-urbanist text-black"
          onClick={() => handleOpen(5)}
        >
           How many sessions can I book  in a day / week? 
        </AccordionHeader>
        <AccordionBody className="font-normal font-urbanist text-base text-black">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default Faq;

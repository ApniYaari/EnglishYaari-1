import React from "react";
import org from "@/assets/org.png";
import person from "@/assets/person.png";
import { FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
function Organzation() {
  const backgroundStyle = {
    backgroundImage: `url(${org})`,
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={backgroundStyle}
      className=" w-[90vw] bg-white mx-auto  rounded-2xl overflow-hidden  flex flex-wrap lg:flex-nowrap items-center py-6 lg:p-0 px-4"
    >
      <Image  className="w-auto h-52 rounded-2xl " src={person} />
      <div className="flex justify-around h-full items-center bg w-full flex-wrap">
        <div className="">
          <p className="h36 font-bold">Are you an organisation?</p>
          <p className="text-secondry mt-2 !font-normal h6">
            Looking to train your team to speak English fluently? <br />{" "}
            WhatsApp us your specific needs at +91-6209848131
          </p>
        </div>

        <div>
          <button className="bg-sucess text-white text24 items-center font-semibold flex px-8 rounded-full py-2 mt-8">
            <FaWhatsapp className="mr-3" />
            WhatsApp us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Organzation;

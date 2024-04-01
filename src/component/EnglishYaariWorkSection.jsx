import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";

const EnglishYaariWorkSection = () => {
  return (
    <div className="bg-neutral-800 w-screen overflow-x-scroll">
      <HorizontalScrollCarousel />
  
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-10%"]);

  return (
    <section ref={targetRef} className="relative h-[100vh] bg-red-100 bg-neutral-900">
      <div className=" flex h-screen items-center overflow-hidden ">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
     </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] min-w-[450px] mx-10 overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default EnglishYaariWorkSection;

const cards = [
  {
    url: "https://images.pexels.com/photos/3285137/pexels-photo-3285137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://images.pexels.com/photos/3285137/pexels-photo-3285137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://images.pexels.com/photos/3285137/pexels-photo-3285137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://images.pexels.com/photos/3285137/pexels-photo-3285137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://images.pexels.com/photos/3285137/pexels-photo-3285137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://images.pexels.com/photos/3285137/pexels-photo-3285137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://images.pexels.com/photos/3285137/pexels-photo-3285137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Title 7",
    id: 7,
  },
];
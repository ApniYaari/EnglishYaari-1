import { useRef, useEffect } from "react";
import React from "react";

 const useScroll = (direction) => {
  const elRef = useRef();
  
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if ((direction === "horizontal" && e.deltaY === 0) ||
            (direction === "vertical" && e.deltaX === 0)) {
          return;
        }
        e.preventDefault();
        if (direction === "horizontal") {
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth"
          });
        } else if (direction === "vertical") {
          el.scrollTo({
            top: el.scrollTop + e.deltaX,
            behavior: "smooth"
          });
        }
      };
      
      el.addEventListener("wheel", onWheel);
      
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [direction]);
  
  return elRef;
};



export const AnimatedScroll = () => {
    const horizontalScrollRef = useScroll("horizontal");
    const verticalScrollRef = useScroll("vertical");
  
    return (
      <div className="h-screen bg-red-500 sticky top-0" ref={verticalScrollRef} style={{ width:400, overflow: "auto" }}>
        <div ref={horizontalScrollRef} className="text-red-200 " style={{ whiteSpace: "nowrap" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ratione nihil ipsum veritatis est consequuntur accusamus, impedit sapiente at ut velit! Rem tenetur unde ipsam consectetur eaque, doloribus at beatae?
        </div>
      </div>
    );
  };
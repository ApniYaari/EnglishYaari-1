// // ParallaxComponent.jsx

// import React, { useEffect, useState } from "react";
// import Bg from "../assets/bg.png";
// import { NavbarDefault } from "../component/Navbar";
// import { InfiniteSlider } from "../component/InfiniteSlider";
// import { StandCard } from "../component/StandCard";
// import MeetOutTutor from "../component/MeetOutTutor";
// import TrustedByYoutuber from "../component/TrustedByYoutuber";
// import { FaArrowRight } from "react-icons/fa";
// import BenefitEnglishYaari from "../component/BenefitEnglishYaari";
// import Satisfaction from "../component/Satisfaction";
// import { PiShootingStar } from "react-icons/pi";
// import JoinEnglishYaari from "../component/JoinEnglishYaari";
// import EnglishYaariWork from "../component/EnglishYaariWork";
// import OurStudent from "../component/OurStudent";
// import Quiz from "../component/Quiz";
// import Footer from "../component/Footer";
// import Faq from "../component/Faq";
// import { FaWhatsapp } from "react-icons/fa6";
// import OurAppNow from "../component/OurAppNow";
// import Organzation from "../component/Organzation";
// // import { svgIcon } from "../Helper";

// const Home = () => {
//   const backgroundStyle = {
//     backgroundImage: `url(${Bg})`,
//     backgroundSize: "cover",
//     backgroundAttachment: "fixed",
//   };

//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 200) {
//         console.log(window.scrollY);
//         setScrolling(true);
//       } else {
//         console.log(window.scrollY)
//         setScrolling(false);
//       }
//     };

//     console.log(window.scrollY);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   },[]);

//   return (
//     <>
//         {/* <NavbarDefault /> */}
//       <div className="relative h-screen w-full   bg-cover bg-fixed bg-center bg-theme bg-no-repeat shadow-lg">
//         {false&&<div
//           className="absolute  h-[80%] inset-0 bg-theme flex justify-center items-center"
//           style={backgroundStyle}
//         >
//           <div className="text-center leading-[10px] text-white bg-fixed flex flex-col justify-center items-center h-[70%] w-full">
//             <p className="text-4xl lg:text-5xl font-bold text-white leading-[10px] pb-8">
//               Unlock your potential in{" "}
//               <span className="text-[#FFCA7A] leading-[100px]">1-on-1 classes</span>
//               <br /> with certified English tutors
//             </p>

//             {iatlicText}

//             <button className="text-theme bg-white rounded-full text28 flex items-center p-3 px-20 mt-8">
//               Book your trial
//               <FaArrowRight className="ml-3" />
//             </button>
//             <div className="flex flex-wrap mt-5 w-full lg:w-[40%] items-center justify-center">

//             <div className="flex mt-3 items-center justify-center">
//                 <p className="">Business English </p>
//                 {/* <div className="mx-3">{svgIcon.hand}</div> */}
//               </div>

//               <div className="flex mt-3 items-center justify-center">
//                 <p className="">Daily Conversational Skills </p>
//                 {/* <div className="mx-3">{svgIcon.chat}</div> */}
//               </div>

//               <div className="flex mt-3 items-center justify-center">
//                 <p className="">Interview Skills </p>
//                 {/* <div className="mx-3">{svgIcon.person}</div> */}
//               </div>

//               <div className="flex mt-3 items-center justify-center">
//                 <p className="">Soft Skills </p>
//                 {/* <div className="mx-3">{svgIcon.addPerson}</div> */}
//               </div>

//               <div className="flex mt-3 items-center justify-center">
//                 <p className="">IELTS & TOEFL </p>
//                 {/* <div className="mx-3">{svgIcon.notes}</div> */}
//               </div>
//             </div>
//           </div>
//         </div>}

//         <div className="min-h-screen w-screen rounded-t-[60px]  bg-background">
//           {/* <TrustedByYoutuber /> */}
//           <MeetOutTutor />

//           <div>
//             <button

//             className="bg-theme text-white text-xl z-50 px-20 rounded-full mx-auto flex mt-12 py-3 items-center ">
//               View all tutors
//               <FaArrowRight className="mx-2" />
//             </button>
//           </div>
//           {/* <InfiniteSlider /> */}

//           <BenefitEnglishYaari />

//           <Satisfaction />

//           <div class=" w-[95vw] lg:container  mx-auto  pt-20 flex flex-col items-center  ">
//             <div className="flex items-center pb-10">
//               <div className="bg-[#7C17CC] h-20 w-20 rounded-full flex justify-center items-center text-white text-4xl">
//                 <PiShootingStar />
//               </div>
//               <div
//               // data-aos="fade-up"
//               className="text-black font-bold text40 ml-4">
//                 How does EnglishYaari stand differently?
//               </div>
//             </div>

//             {/* <div className="  overflow-scroll"> */}
//             <ul id="cards">
//               <li class="card" id="card1">
//                 <div class="card-body w-full  flex !p-0 overflow-hidden !justify-between  flex-wrap">
//                   <StandCard
//                     bg={"bg-[#DCF3E5]"}
//                     title={"1-on-1 Live classes "}
//                     subTitle={
//                       "25+ minutes 1:1 private classes to enhance your language speaking skills and elevate your confidence"
//                     }
//                     icon={
//                       <svg
//                         width="74"
//                         height="74"
//                         viewBox="0 0 74 74"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M62.4375 12.1406H11.5625C10.4892 12.1406 9.45986 12.567 8.70093 13.3259C7.94199 14.0849 7.51563 15.1142 7.51562 16.1875V57.8125C7.51562 58.8858 7.94199 59.9151 8.70093 60.6741C9.45986 61.433 10.4892 61.8594 11.5625 61.8594H15.433C15.7612 61.8593 16.0827 61.7661 16.36 61.5906C16.6373 61.4151 16.8592 61.1645 16.9998 60.8679C18.171 58.3944 20.0204 56.3043 22.3328 54.8407C24.6453 53.3771 27.3258 52.6001 30.0625 52.6001C32.7992 52.6001 35.4797 53.3771 37.7922 54.8407C40.1046 56.3043 41.954 58.3944 43.1252 60.8679C43.2658 61.1645 43.4877 61.4151 43.765 61.5906C44.0423 61.7661 44.3638 61.8593 44.692 61.8594H62.4375C63.5108 61.8594 64.5401 61.433 65.2991 60.6741C66.058 59.9151 66.4844 58.8858 66.4844 57.8125V16.1875C66.4844 15.1142 66.058 14.0849 65.2991 13.3259C64.5401 12.567 63.5108 12.1406 62.4375 12.1406ZM22.5469 41.625C22.5469 40.1385 22.9877 38.6855 23.8135 37.4495C24.6393 36.2136 25.8131 35.2503 27.1864 34.6815C28.5597 34.1126 30.0708 33.9638 31.5287 34.2538C32.9866 34.5438 34.3258 35.2596 35.3768 36.3107C36.4279 37.3617 37.1437 38.7009 37.4337 40.1588C37.7237 41.6167 37.5749 43.1278 37.006 44.5011C36.4372 45.8744 35.4739 47.0482 34.238 47.874C33.002 48.6998 31.549 49.1406 30.0625 49.1406C28.0692 49.1406 26.1576 48.3488 24.7482 46.9394C23.3387 45.5299 22.5469 43.6183 22.5469 41.625ZM63.0156 57.8125C63.0156 57.9658 62.9547 58.1129 62.8463 58.2213C62.7379 58.3297 62.5908 58.3906 62.4375 58.3906H45.7499C43.7276 54.7607 40.5129 51.9412 36.6502 50.4096C38.4953 49.0268 39.8584 47.0984 40.5464 44.8977C41.2345 42.697 41.2125 40.3356 40.4838 38.1481C39.755 35.9606 38.3563 34.0578 36.4859 32.7095C34.6155 31.3611 32.3682 30.6356 30.0625 30.6356C27.7568 30.6356 25.5095 31.3611 23.6391 32.7095C21.7687 34.0578 20.37 35.9606 19.6412 38.1481C18.9125 40.3356 18.8905 42.697 19.5786 44.8977C20.2666 47.0984 21.6297 49.0268 23.4748 50.4096C19.6121 51.9412 16.3974 54.7607 14.3751 58.3906H11.5625C11.4092 58.3906 11.2621 58.3297 11.1537 58.2213C11.0453 58.1129 10.9844 57.9658 10.9844 57.8125V16.1875C10.9844 16.0342 11.0453 15.8871 11.1537 15.7787C11.2621 15.6703 11.4092 15.6094 11.5625 15.6094H62.4375C62.5908 15.6094 62.7379 15.6703 62.8463 15.7787C62.9547 15.8871 63.0156 16.0342 63.0156 16.1875V57.8125ZM57.2344 23.125V50.875C57.2344 51.335 57.0516 51.7761 56.7264 52.1014C56.4011 52.4266 55.96 52.6094 55.5 52.6094H50.875C50.415 52.6094 49.9739 52.4266 49.6486 52.1014C49.3234 51.7761 49.1406 51.335 49.1406 50.875C49.1406 50.415 49.3234 49.9739 49.6486 49.6486C49.9739 49.3234 50.415 49.1406 50.875 49.1406H53.7656V24.8594H20.2344V27.75C20.2344 28.21 20.0516 28.6511 19.7264 28.9764C19.4011 29.3016 18.96 29.4844 18.5 29.4844C18.04 29.4844 17.5989 29.3016 17.2736 28.9764C16.9484 28.6511 16.7656 28.21 16.7656 27.75V23.125C16.7656 22.665 16.9484 22.2239 17.2736 21.8986C17.5989 21.5734 18.04 21.3906 18.5 21.3906H55.5C55.96 21.3906 56.4011 21.5734 56.7264 21.8986C57.0516 22.2239 57.2344 22.665 57.2344 23.125Z"
//                           fill="#25232F"
//                         />
//                       </svg>
//                     }
//                   />
//                   <StandCard
//                     title={"Personalized Tutors and flexible timings"}
//                     subTitle={
//                       "We bring the world of personalized tutoring right to you Choose your favorite tutor and book your slot today as per your availability"
//                     }
//                     bg={"bg-[#E2D8EF]"}
//                     icon={
//                       <svg
//                         width="64"
//                         height="64"
//                         viewBox="0 0 64 64"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M63.3975 33.2358L57.3652 39.2681C57.0825 39.5505 56.6992 39.7091 56.2995 39.7091C55.8999 39.7091 55.5166 39.5505 55.2338 39.2681L49.2016 33.2358C49.0535 33.0978 48.9346 32.9313 48.8522 32.7463C48.7698 32.5613 48.7255 32.3616 48.7219 32.1591C48.7183 31.9566 48.7556 31.7555 48.8314 31.5677C48.9072 31.38 49.0201 31.2094 49.1633 31.0662C49.3065 30.923 49.4771 30.8101 49.6649 30.7342C49.8527 30.6584 50.0538 30.6211 50.2563 30.6247C50.4588 30.6283 50.6585 30.6726 50.8435 30.755C51.0285 30.8374 51.195 30.9563 51.333 31.1045L54.7915 34.5604V32.1701C54.7936 27.3805 53.2755 22.7139 50.4557 18.8423C47.6359 14.9707 43.66 12.0941 39.1006 10.6268C34.5413 9.15947 29.6339 9.17719 25.0854 10.6774C20.5368 12.1776 16.5817 15.0828 13.7899 18.9746C13.6771 19.1421 13.5319 19.2852 13.3627 19.3954C13.1936 19.5057 13.0041 19.5808 12.8053 19.6165C12.6066 19.6521 12.4028 19.6475 12.2059 19.6028C12.009 19.5582 11.823 19.4745 11.6591 19.3567C11.4952 19.2389 11.3565 19.0893 11.2515 18.9169C11.1464 18.7445 11.077 18.5528 11.0474 18.3531C11.0178 18.1534 11.0287 17.9498 11.0792 17.7543C11.1298 17.5589 11.2191 17.3755 11.3419 17.2153C14.5063 12.8057 18.9885 9.51413 24.143 7.81463C29.2976 6.11514 34.8585 6.09538 40.0251 7.75821C45.1916 9.42105 49.6971 12.6807 52.8927 17.0676C56.0883 21.4546 57.8092 26.7426 57.8076 32.1701V34.5604L61.2661 31.1045C61.4041 30.9563 61.5706 30.8374 61.7556 30.755C61.9406 30.6726 62.1403 30.6283 62.3428 30.6247C62.5453 30.6211 62.7464 30.6584 62.9342 30.7342C63.122 30.8101 63.2925 30.923 63.4357 31.0662C63.5789 31.2094 63.6918 31.38 63.7677 31.5677C63.8435 31.7555 63.8808 31.9566 63.8772 32.1591C63.8736 32.3616 63.8293 32.5613 63.7469 32.7463C63.6645 32.9313 63.5456 33.0978 63.3975 33.2358ZM52.9944 47.125C49.8293 51.5325 45.3474 54.822 40.1938 56.5201C35.0401 58.2183 29.4806 58.2374 24.3154 56.5748C19.1503 54.9122 14.6458 51.6537 11.4504 47.2681C8.25501 42.8826 6.5335 37.5963 6.53367 32.1701V29.7799L3.0752 33.2358C2.78932 33.5022 2.4112 33.6472 2.02052 33.6403C1.62983 33.6335 1.25706 33.4752 0.980762 33.1989C0.70446 32.9226 0.546191 32.5498 0.539297 32.1591C0.532404 31.7684 0.677425 31.3903 0.943808 31.1045L6.97604 25.0722C7.2588 24.7898 7.64209 24.6312 8.04173 24.6312C8.44136 24.6312 8.82466 24.7898 9.10742 25.0722L15.1396 31.1045C15.2878 31.2425 15.4067 31.409 15.4891 31.594C15.5715 31.779 15.6158 31.9787 15.6194 32.1812C15.623 32.3836 15.5857 32.5848 15.5099 32.7726C15.434 32.9603 15.3211 33.1309 15.1779 33.2741C15.0347 33.4173 14.8641 33.5302 14.6764 33.6061C14.4886 33.6819 14.2875 33.7192 14.085 33.7156C13.8825 33.712 13.6828 33.6677 13.4978 33.5853C13.3128 33.5028 13.1463 33.384 13.0083 33.2358L9.54978 29.7799V32.1701C9.54551 37.9314 11.7482 43.4755 15.7052 47.6629C18.0747 43.9786 21.6164 41.2001 25.7589 39.7758C23.6933 38.4 22.1252 36.396 21.2865 34.0601C20.4478 31.7243 20.383 29.1805 21.1017 26.805C21.8204 24.4295 23.2845 22.3483 25.2774 20.8691C27.2703 19.3899 29.6863 18.5913 32.1681 18.5913C34.65 18.5913 37.066 19.3899 39.0589 20.8691C41.0518 22.3483 42.5158 24.4295 43.2345 26.805C43.9532 29.1805 43.8884 31.7243 43.0497 34.0601C42.211 36.396 40.643 38.4 38.5774 39.7758C42.7213 41.2013 46.2634 43.9828 48.6311 47.6705C49.3166 46.9454 49.9531 46.1754 50.5363 45.3656C50.6491 45.1982 50.7943 45.0551 50.9634 44.9449C51.1326 44.8346 51.3221 44.7594 51.5208 44.7238C51.7196 44.6882 51.9234 44.6928 52.1203 44.7374C52.3172 44.7821 52.5031 44.8658 52.6671 44.9836C52.831 45.1014 52.9696 45.251 53.0747 45.4234C53.1798 45.5958 53.2492 45.7875 53.2788 45.9872C53.3083 46.1869 53.2975 46.3905 53.247 46.586C53.1964 46.7814 53.1071 46.9647 52.9843 47.125H52.9944ZM32.1706 38.7051C33.8608 38.7051 35.513 38.2039 36.9183 37.2649C38.3237 36.3258 39.419 34.9912 40.0658 33.4297C40.7126 31.8682 40.8818 30.1499 40.5521 28.4922C40.2224 26.8345 39.4085 25.3118 38.2133 24.1167C37.0182 22.9216 35.4955 22.1077 33.8378 21.7779C32.1801 21.4482 30.4619 21.6174 28.9004 22.2642C27.3388 22.911 26.0042 24.0064 25.0652 25.4117C24.1262 26.817 23.625 28.4692 23.625 30.1594C23.625 32.4259 24.5253 34.5995 26.1279 36.2021C27.7306 37.8047 29.9042 38.7051 32.1706 38.7051ZM32.1706 54.791C37.3448 54.7862 42.3617 53.0125 46.3891 49.7641C44.9144 47.3111 42.8301 45.2814 40.3388 43.8723C37.8475 42.4632 35.0341 41.7226 32.1719 41.7226C29.3097 41.7226 26.4962 42.4632 24.005 43.8723C21.5137 45.2814 19.4294 47.3111 17.9547 49.7641C21.9747 53.0239 26.9951 54.7991 32.1706 54.791Z"
//                           fill="#25232F"
//                         />
//                       </svg>
//                     }
//                   />
//                 </div>
//               </li>
//               <li class="card" id="card2">
//                 <div class="card-body  flex !p-0 overflow-hidden !justify-between  flex-wrap">
//                   <StandCard
//                     bg={"bg-[#E9F8D8]"}
//                     title={"Personalized Lesson Plan "}
//                     icon={<svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M27.5187 16.7313C27.5187 16.9302 27.4397 17.121 27.299 17.2616C27.1584 17.4023 26.9676 17.4813 26.7687 17.4813H15.7687C15.5698 17.4813 15.379 17.4023 15.2384 17.2616C15.0977 17.121 15.0187 16.9302 15.0187 16.7313C15.0187 16.5324 15.0977 16.3416 15.2384 16.201C15.379 16.0603 15.5698 15.9813 15.7687 15.9813H26.7687C26.9676 15.9813 27.1584 16.0603 27.299 16.201C27.4397 16.3416 27.5187 16.5324 27.5187 16.7313ZM15.7687 9.48129H26.7687C26.9676 9.48129 27.1584 9.40227 27.299 9.26162C27.4397 9.12097 27.5187 8.9302 27.5187 8.73129C27.5187 8.53238 27.4397 8.34161 27.299 8.20096C27.1584 8.06031 26.9676 7.98129 26.7687 7.98129H15.7687C15.5698 7.98129 15.379 8.06031 15.2384 8.20096C15.0977 8.34161 15.0187 8.53238 15.0187 8.73129C15.0187 8.9302 15.0977 9.12097 15.2384 9.26162C15.379 9.40227 15.5698 9.48129 15.7687 9.48129ZM26.7687 23.9813H15.7687C15.5698 23.9813 15.379 24.0603 15.2384 24.201C15.0977 24.3416 15.0187 24.5324 15.0187 24.7313C15.0187 24.9302 15.0977 25.121 15.2384 25.2616C15.379 25.4023 15.5698 25.4813 15.7687 25.4813H26.7687C26.9676 25.4813 27.1584 25.4023 27.299 25.2616C27.4397 25.121 27.5187 24.9302 27.5187 24.7313C27.5187 24.5324 27.4397 24.3416 27.299 24.201C27.1584 24.0603 26.9676 23.9813 26.7687 23.9813ZM10.2387 6.20129L6.76871 9.67004L5.29871 8.20129C5.15653 8.06881 4.96849 7.99669 4.77419 8.00012C4.57988 8.00355 4.3945 8.08226 4.25709 8.21967C4.11967 8.35708 4.04096 8.54247 4.03753 8.73677C4.0341 8.93107 4.10623 9.11912 4.23871 9.26129L6.23871 11.2613C6.37933 11.4017 6.56996 11.4806 6.76871 11.4806C6.96746 11.4806 7.15808 11.4017 7.29871 11.2613L11.2987 7.26129C11.4312 7.11912 11.5033 6.93107 11.4999 6.73677C11.4965 6.54247 11.4177 6.35708 11.2803 6.21967C11.1429 6.08226 10.9575 6.00355 10.7632 6.00012C10.5689 5.99669 10.3809 6.06881 10.2387 6.20129ZM10.2387 14.2013L6.76871 17.67L5.29871 16.2013C5.23005 16.1276 5.14725 16.0685 5.05525 16.0275C4.96325 15.9865 4.86393 15.9645 4.76323 15.9627C4.66253 15.9609 4.5625 15.9794 4.46911 16.0172C4.37572 16.0549 4.29089 16.111 4.21967 16.1823C4.14845 16.2535 4.09231 16.3383 4.05459 16.4317C4.01686 16.5251 3.99834 16.6251 4.00012 16.7258C4.00189 16.8265 4.02394 16.9258 4.06493 17.0178C4.10592 17.1098 4.16502 17.1926 4.23871 17.2613L6.23871 19.2613C6.37933 19.4017 6.56996 19.4806 6.76871 19.4806C6.96746 19.4806 7.15808 19.4017 7.29871 19.2613L11.2987 15.2613C11.4312 15.1191 11.5033 14.9311 11.4999 14.7368C11.4965 14.5425 11.4177 14.3571 11.2803 14.2197C11.1429 14.0823 10.9575 14.0035 10.7632 14.0001C10.5689 13.9967 10.3809 14.0688 10.2387 14.2013ZM10.2387 22.2013L6.76871 25.67L5.29871 24.2013C5.15653 24.0688 4.96849 23.9967 4.77419 24.0001C4.57988 24.0035 4.3945 24.0823 4.25709 24.2197C4.11967 24.3571 4.04096 24.5425 4.03753 24.7368C4.0341 24.9311 4.10623 25.1191 4.23871 25.2613L6.23871 27.2613C6.37933 27.4017 6.56996 27.4806 6.76871 27.4806C6.96746 27.4806 7.15808 27.4017 7.29871 27.2613L11.2987 23.2613C11.4312 23.1191 11.5033 22.9311 11.4999 22.7368C11.4965 22.5425 11.4177 22.3571 11.2803 22.2197C11.1429 22.0823 10.9575 22.0035 10.7632 22.0001C10.5689 21.9967 10.3809 22.0688 10.2387 22.2013Z" fill="#25232F"/>
//                     </svg>
//                     }
//                     subTitle={
//                       "We bring  you recorded sessions with our skilled tutors, Making learning a delightful and convenient experience for you"
//                     }
//                   />
//                   <StandCard
//                     bg={"bg-[#FFE9D6]"}
//                     title={"Recorded Sessions"}
//                     subTitle={
//                       "We bring the world of personalized tutoring right to you Choose your favorite tutor and book your slot today as per your availability"
//                     }
//                     icon={
//                       <svg
//                         width="72"
//                         height="72"
//                         viewBox="0 0 72 72"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M45.9366 30.0938L32.4366 21.0938C32.1823 20.9241 31.8867 20.8267 31.5813 20.812C31.276 20.7972 30.9724 20.8657 30.7029 21.0101C30.4335 21.1545 30.2083 21.3694 30.0515 21.6318C29.8946 21.8942 29.812 22.1943 29.8125 22.5V40.5C29.812 40.8057 29.8946 41.1058 30.0515 41.3682C30.2083 41.6306 30.4335 41.8455 30.7029 41.9899C30.9724 42.1343 31.276 42.2028 31.5813 42.188C31.8867 42.1733 32.1823 42.0759 32.4366 41.9062L45.9366 32.9062C46.1686 32.7523 46.359 32.5434 46.4907 32.298C46.6223 32.0526 46.6913 31.7785 46.6913 31.5C46.6913 31.2215 46.6223 30.9474 46.4907 30.702C46.359 30.4566 46.1686 30.2477 45.9366 30.0938ZM33.1875 37.3472V25.6528L41.9569 31.5L33.1875 37.3472ZM60.75 11.8125H11.25C10.2057 11.8125 9.20419 12.2273 8.46577 12.9658C7.72734 13.7042 7.3125 14.7057 7.3125 15.75V47.25C7.3125 48.2943 7.72734 49.2958 8.46577 50.0342C9.20419 50.7727 10.2057 51.1875 11.25 51.1875H60.75C61.7943 51.1875 62.7958 50.7727 63.5342 50.0342C64.2727 49.2958 64.6875 48.2943 64.6875 47.25V15.75C64.6875 14.7057 64.2727 13.7042 63.5342 12.9658C62.7958 12.2273 61.7943 11.8125 60.75 11.8125ZM61.3125 47.25C61.3125 47.3992 61.2532 47.5423 61.1477 47.6477C61.0423 47.7532 60.8992 47.8125 60.75 47.8125H11.25C11.1008 47.8125 10.9577 47.7532 10.8523 47.6477C10.7468 47.5423 10.6875 47.3992 10.6875 47.25V15.75C10.6875 15.6008 10.7468 15.4577 10.8523 15.3523C10.9577 15.2468 11.1008 15.1875 11.25 15.1875H60.75C60.8992 15.1875 61.0423 15.2468 61.1477 15.3523C61.2532 15.4577 61.3125 15.6008 61.3125 15.75V47.25ZM64.6875 58.5C64.6875 58.9476 64.5097 59.3768 64.1932 59.6932C63.8768 60.0097 63.4476 60.1875 63 60.1875H9C8.55245 60.1875 8.12322 60.0097 7.80676 59.6932C7.49029 59.3768 7.3125 58.9476 7.3125 58.5C7.3125 58.0524 7.49029 57.6232 7.80676 57.3068C8.12322 56.9903 8.55245 56.8125 9 56.8125H63C63.4476 56.8125 63.8768 56.9903 64.1932 57.3068C64.5097 57.6232 64.6875 58.0524 64.6875 58.5Z"
//                           fill="#25232F"
//                         />
//                       </svg>
//                     }
//                   />
//                 </div>
//               </li>
//               <li class="card" id="card3">
//                 <div class="card-body  flex !p-0 overflow-hidden !justify-between  flex-wrap">
//                   <StandCard
//                     title={"Track your progress"}
//                     subTitle={
//                       "Analyze your rate of progress Via constructive feedback  by the tutor after every session. Experience the power of tailored learning with our dedicated tutors"
//                     }
//                     bg={"bg-[#E1ECF6]"}
//                     icon={
//                       <svg
//                         width="70"
//                         height="70"
//                         viewBox="0 0 70 70"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M62.8906 56.875C62.8906 57.3101 62.7178 57.7274 62.4101 58.0351C62.1024 58.3428 61.6851 58.5156 61.25 58.5156H8.75C8.31488 58.5156 7.89758 58.3428 7.5899 58.0351C7.28223 57.7274 7.10938 57.3101 7.10938 56.875V13.125C7.10938 12.6899 7.28223 12.2726 7.5899 11.9649C7.89758 11.6572 8.31488 11.4844 8.75 11.4844C9.18512 11.4844 9.60242 11.6572 9.9101 11.9649C10.2178 12.2726 10.3906 12.6899 10.3906 13.125V44.1656L25.0906 29.4656C25.3982 29.1584 25.8152 28.9858 26.25 28.9858C26.6848 28.9858 27.1018 29.1584 27.4094 29.4656L35 37.0535L50.7281 21.3281H43.75C43.3149 21.3281 42.8976 21.1553 42.5899 20.8476C42.2822 20.5399 42.1094 20.1226 42.1094 19.6875C42.1094 19.2524 42.2822 18.8351 42.5899 18.5274C42.8976 18.2197 43.3149 18.0469 43.75 18.0469H54.6875C55.1226 18.0469 55.5399 18.2197 55.8476 18.5274C56.1553 18.8351 56.3281 19.2524 56.3281 19.6875V30.625C56.3281 31.0601 56.1553 31.4774 55.8476 31.7851C55.5399 32.0928 55.1226 32.2656 54.6875 32.2656C54.2524 32.2656 53.8351 32.0928 53.5274 31.7851C53.2197 31.4774 53.0469 31.0601 53.0469 30.625V23.6469L36.1594 40.5344C35.8518 40.8416 35.4348 41.0142 35 41.0142C34.5652 41.0142 34.1482 40.8416 33.8406 40.5344L26.25 32.9465L10.3906 48.8059V55.2344H61.25C61.6851 55.2344 62.1024 55.4072 62.4101 55.7149C62.7178 56.0226 62.8906 56.4399 62.8906 56.875Z"
//                           fill="#30237B"
//                         />
//                       </svg>
//                     }
//                   />
//                   <StandCard
//                     title={"Recorded Sessions"}
//                     subTitle={
//                       "We bring the world of personalized tutoring right to you Choose your favorite tutor and book your slot today as per your availability"
//                     }
//                     bg={"bg-[#DFF8FA]"}
//                     icon={
//                       <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M60.2278 55.7903C60.313 55.705 60.3609 55.5893 60.3609 55.4688V24.4062C60.3609 24.2857 60.313 24.17 60.2278 24.0847C60.1425 23.9995 60.0268 23.9516 59.9062 23.9516H15.5314H15.5312V23.8516C14.6041 23.8527 13.6895 23.641 12.8578 23.2333L60.2278 55.7903ZM60.2278 55.7903C60.1425 55.8755 60.0268 55.9234 59.9062 55.9234H15.5312C14.8222 55.9234 14.1422 55.6418 13.6408 55.1404C13.1395 54.639 12.8578 53.959 12.8578 53.25V23.3445L60.2278 55.7903ZM59.9062 20.4234H15.5312C14.8222 20.4234 14.1422 20.1418 13.6408 19.6404C13.1395 19.139 12.8578 18.459 12.8578 17.75C12.8578 17.041 13.1395 16.361 13.6408 15.8596C14.1422 15.3582 14.8222 15.0766 15.5312 15.0766H53.25C53.7179 15.0766 54.1666 14.8907 54.4974 14.5599C54.8282 14.2291 55.0141 13.7804 55.0141 13.3125C55.0141 12.8446 54.8282 12.3959 54.4974 12.0651C54.1666 11.7343 53.7179 11.5484 53.25 11.5484H15.5312C13.8865 11.5484 12.3091 12.2018 11.1461 13.3648C9.98306 14.5279 9.32969 16.1052 9.32969 17.75V53.25C9.32969 54.8948 9.98306 56.4721 11.1461 57.6352C12.3091 58.7982 13.8865 59.4516 15.5312 59.4516H59.9062C60.9626 59.4516 61.9756 59.0319 62.7225 58.285C63.4694 57.5381 63.8891 56.5251 63.8891 55.4688V24.4062C63.8891 23.3499 63.4694 22.3369 62.7225 21.59C61.9756 20.8431 60.9626 20.4234 59.9062 20.4234ZM52.3111 40.4245C52.6268 39.952 52.7953 39.3964 52.7953 38.8281C52.7953 38.066 52.4926 37.3352 51.9537 36.7963C51.4148 36.2574 50.684 35.9547 49.9219 35.9547C49.3536 35.9547 48.798 36.1232 48.3255 36.4389C47.8529 36.7547 47.4846 37.2035 47.2672 37.7285C47.0497 38.2536 46.9928 38.8313 47.1036 39.3887C47.2145 39.9461 47.4882 40.4581 47.89 40.86C48.2919 41.2618 48.8039 41.5355 49.3613 41.6463C49.9187 41.7572 50.4964 41.7003 51.0215 41.4828C51.5465 41.2654 51.9953 40.8971 52.3111 40.4245Z" fill="#25232F" stroke="#25232F" stroke-width="0.2"/>
//                       </svg>

//                     }
//                   />
//                 </div>
//               </li>
//               {/* <li class="card" id="card4">
//                 <div class="card-body">
//                     <h2>Card 4</h2>
//                 </div>
//             </li> */}
//             </ul>
//             {/* </div> */}
//           </div>

//           <JoinEnglishYaari />

//           <EnglishYaariWork />

//           <OurStudent />

//           {false && <Quiz />}

//           {/* <ScrollH/> */}

//           <OurAppNow />

//           <Organzation />

//           <div className="py-10"></div>
//         </div>

//         <div className="bg-white py-20">
//           <p className="text-[3rem] text-black font-semibold text-center">
//             Have a question?
//           </p>
//           <p className="text24 font-semibold text-center text-secondry">
//             Find the answers in our FAQs
//           </p>
//           <div className="container flex !mt-16 flex-wrap-reverse px-4 md:px-0">
//             <div className="  w-full lg:w-[30%] px-4 flex justify-center items-start flex-col">
//               <p className="text-theme text-lg !font-semibold">
//                 For any other questions{" "}
//               </p>

//               <div className="flex mt-4">
//                 <svg
//                   width="38"
//                   height="39"
//                   viewBox="0 0 38 39"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect
//                     y="0.732422"
//                     width="37.5"
//                     height="37.5"
//                     rx="18.75"
//                     fill="#EEECF8"
//                   />
//                   <path
//                     d="M27.1585 22.3847L22.9143 20.4827C22.722 20.4003 22.5122 20.3672 22.3038 20.3863C22.0955 20.4055 21.8952 20.4763 21.7211 20.5923C21.7035 20.6037 21.6867 20.6163 21.6708 20.6301L19.4526 22.5168C19.4296 22.5293 19.404 22.5363 19.3778 22.5373C19.3516 22.5382 19.3255 22.533 19.3017 22.5222C17.8758 21.834 16.3988 20.3659 15.7079 18.9599C15.6964 18.9364 15.6904 18.9105 15.6904 18.8844C15.6904 18.8582 15.6964 18.8324 15.7079 18.8089L17.6009 16.5628C17.6145 16.5462 17.6271 16.5288 17.6386 16.5107C17.7531 16.336 17.8222 16.1355 17.8398 15.9273C17.8574 15.7192 17.8228 15.5099 17.7393 15.3185L15.8508 11.0815C15.7435 10.8313 15.558 10.6228 15.3222 10.487C15.0863 10.3513 14.8128 10.2957 14.5426 10.3286C13.3686 10.4829 12.2909 11.0595 11.511 11.9505C10.731 12.8416 10.3022 13.9861 10.3047 15.1702C10.3047 22.205 16.0277 27.9281 23.0625 27.9281C24.2466 27.9303 25.391 27.5015 26.282 26.7216C27.173 25.9417 27.7497 24.8641 27.9042 23.6901C27.937 23.4212 27.8822 23.149 27.7478 22.9137C27.6135 22.6785 27.4068 22.493 27.1585 22.3847ZM23.0625 26.8499C16.6225 26.8499 11.3828 21.6102 11.3828 15.1702C11.3798 14.2484 11.7126 13.357 12.3189 12.6625C12.9252 11.9681 13.7636 11.5182 14.6774 11.3968H14.6981C14.7343 11.3975 14.7694 11.4091 14.7989 11.4301C14.8284 11.4511 14.8509 11.4805 14.8634 11.5145L16.7591 15.747C16.7699 15.7706 16.7755 15.7962 16.7755 15.8221C16.7755 15.848 16.7699 15.8736 16.7591 15.8971L14.8625 18.1486C14.8483 18.1646 14.8354 18.1818 14.8238 18.1998C14.7052 18.381 14.6353 18.5897 14.621 18.8058C14.6066 19.0219 14.6484 19.2381 14.7421 19.4333C15.539 21.0649 17.1831 22.6965 18.8327 23.4934C19.0291 23.5866 19.2463 23.6273 19.4631 23.6116C19.6799 23.5958 19.8889 23.5241 20.0698 23.4035C20.0869 23.3918 20.104 23.3793 20.1201 23.3658L22.3375 21.4791C22.3594 21.4673 22.3836 21.4604 22.4084 21.4589C22.4332 21.4573 22.458 21.4611 22.4812 21.4701L26.7263 23.3721C26.761 23.3868 26.7902 23.4121 26.8097 23.4444C26.8292 23.4766 26.8381 23.5142 26.8351 23.5518C26.7143 24.466 26.2648 25.305 25.5705 25.912C24.8763 26.519 23.9847 26.8524 23.0625 26.8499Z"
//                     fill="#30237B"
//                   />
//                 </svg>

//                 <div className="ml-4 font-medium">
//                   <p>+91 8787836546</p>
//                   <p className="text-secondry font-medium font-inter">
//                     Support Number
//                   </p>
//                 </div>
//               </div>

//               <div className="flex mt-4">
//                 <svg
//                   width="38"
//                   height="39"
//                   viewBox="0 0 38 39"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect
//                     y="0.732422"
//                     width="37.5"
//                     height="37.5"
//                     rx="18.75"
//                     fill="#EEECF8"
//                   />
//                   <path
//                     d="M27 13.084H10.5C10.3632 13.084 10.2321 13.1358 10.1354 13.2281C10.0387 13.3204 9.98438 13.4456 9.98438 13.5762V24.7324C9.98438 25.037 10.1111 25.3291 10.3368 25.5445C10.5624 25.7599 10.8684 25.8809 11.1875 25.8809H26.3125C26.6316 25.8809 26.9376 25.7599 27.1632 25.5445C27.3889 25.3291 27.5156 25.037 27.5156 24.7324V13.5762C27.5156 13.4456 27.4613 13.3204 27.3646 13.2281C27.2679 13.1358 27.1368 13.084 27 13.084ZM18.75 20.1272L11.8252 14.0684H25.6748L18.75 20.1272ZM16.4873 19.4824L11.0156 24.2698V14.6951L16.4873 19.4824ZM17.2504 20.1502L18.4062 21.1575C18.5013 21.2405 18.6255 21.2865 18.7543 21.2865C18.8831 21.2865 19.0073 21.2405 19.1023 21.1575L20.2539 20.1502L25.6748 24.8965H11.826L17.2504 20.1502ZM21.0127 19.4824L26.4844 14.6951V24.2698L21.0127 19.4824Z"
//                     fill="#30237B"
//                   />
//                 </svg>

//                 <div className="ml-4 font-medium">
//                   <p>contactus@englishyaari.com</p>
//                   <p className="text-secondry font-medium font-inter">
//                     Support Email
//                   </p>
//                 </div>
//               </div>

//               <button className="bg-sucess text-white text-base items-center font-semibold flex px-8 rounded-full py-2 mt-8">
//                 <FaWhatsapp className="mr-3" />
//                 WhatsApp us
//               </button>
//             </div>

//             <div className="w-full lg:w-[70%] px-6">
//               <Faq />
//             </div>
//           </div>
//         </div>
//         {/* <EnglishYaariWorkSection/> */}

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa6";
import MeetOutTutor from "../component/MeetOutTutor";
import bookClass from "../assets/bookClass.png";
import ones from "../assets/newCard/1s.png";
import Composition from "../assets/newCard/Composition.png";
import iltes from "../assets/newCard/iltes.png";

import interview from "../assets/newCard/interview.png";
import pers from "../assets/newCard/pers.png";
import spoken from "../assets/newCard/spoken.png";
import NumberMatter from "../component/NumberMatter";
import EnglishYaariWork from "../component/EnglishYaariWork";
import lineFrame from "../assets/lineFrame.png";
import WhatWillGet from "../component/HomeNew/WhatWillGet";
import Organzation from "../component/Organzation";
import OurAppNow from "../component/OurAppNow";
import { FAQ } from "../component/PlanPricing/FAQ";
import OurStudent from "../component/OurStudent";
import { NavLink } from "react-router-dom";

export default function Home() {
  const data = [
    {
      icon: bookClass,
      tittle: "Interview English",
      desc: "Unlock your confidence with super personalized attention & remove hesitation.",
      
    },
    {
      icon: bookClass,
      tittle: "Interview English",
      desc: "Unlock your confidence with super personalized attention & remove hesitation.",
    },
    {
      icon: bookClass,
      tittle: "Interview English",
      desc: "Unlock your confidence with super personalized attention & remove hesitation.",
    },
    {
      icon: bookClass,
      tittle: "Interview English",
      desc: "Unlock your confidence with super personalized attention & remove hesitation.",
    },
    {
      icon: bookClass,
      tittle: "Interview English",
      desc: "Unlock your confidence with super personalized attention & remove hesitation.",
    },
    {
      icon: bookClass,
      tittle: "Interview English",
      desc: "Unlock your confidence with super personalized attention & remove hesitation.",
    },
  ];
  return (
    <div className="bg-background">
      <div className="pt-20">
        <MeetOutTutor />
      </div>

      {/* home page crad */}
      <div className=" w-full lg:w-[90vw]  2xll:w-[90%] 3xxl:w-[90%]  !mt-10 mx-auto px-4 lg:px-0  ">
        <div className="flex justify-between flex-wrap">
          <Card2
            width={" w-full lg:w-[49%]"}
            img={interview}
            bg={"bg-[#EBEEFC]"}
            tittle={"Interview English"}
            desc={
              "Master your interview skills. Prepare thoroughly for any interview and secure your dream job."
            }
          />

          <div className=" w-full flex flex-wrap lg:w-[49%] justify-between  ">
            <Card
              width={" w-full lg:w-[49%]"}
              img={interview}
              bg={"bg-[#EBEEFC]"}
              tittle={"Interview Skills"}
              desc={
                "Master your interview skills. Prepare thoroughly for any interview and secure your dream job."
              }
            />

            <Card
              width={" w-full lg:w-[49%]"}
              img={Composition}
              bg={"bg-[#F9E3E4]"}
              tittle={"Public Speaking"}
              desc={
                "Perfect your public speaking skills to confidently captivate and impact the audience."
              }
            />
          </div>
        </div>

        <div className="flex justify-between  flex-wrap">
          <Card
            width={"w-full lg:w-[24%]"}
            img={spoken}
            bg={"bg-[#EBEEFC]"}
            tittle={"Everyday Conversation"}
            desc={
              "Develop language skills for everyday interactions, improving communication at work. "
            }
          />

          <Card
            width={"w-full lg:w-[24%]"}
            img={ones}
            bg={"bg-[#E9F8D8]"}
            tittle={"Business English"}
            desc={
              "Stand out in the global business world by mastering spoken English for corporate success."
            }
          />

          <Card
            width={"w-full lg:w-[24%]"}
            img={iltes}
            bg={"bg-[#DBF4EC]"}
            tittle={"IELTS speaking"}
            desc={
              "Achieve a 7+ band score with fluent English and turn your dream of going abroad into reality."
            }
          />

          <Card
            width={"w-full lg:w-[24%]"}
            img={pers}
            bg={"bg-[#F4EAFF]"}
            tittle={"Personality development"}
            desc={
              "Improve your personality with fluent English and boost your confidence to create a lasting impression."
            }
          />
        </div>
      </div>

      <div className="mt-20">
        <NumberMatter />
      </div>

      <div className="mt-16">
        <EnglishYaariWork />
      </div>

      <div className="mt-20">
        <WhatWillGet />
      </div>

      <div className="mt-10">
        <OurStudent />
      </div>

      {/* <div className="mt-20">
        <Organzation/>
      </div> */}

      <div className="mt-20">
        <div className="bg-white pb-10  w-[90vw] mx-auto">
          <p className="text-[3rem] text-black font-semibold text-center">
            Have a question?
          </p>
          <p className="text24 font-semibold text-center text-secondry">
            Find the answers in our FAQs
          </p>
          <div className="container flex !mt-10 flex-wrap-reverse px-4 md:px-0">
            <div className="  w-full lg:w-[30%] px-4 flex justify-center items-start flex-col">
              <p className="text-theme text-lg !font-semibold">
                For any other questions{" "}
              </p>

              <div className="flex mt-4">
                <svg
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.732422"
                    width="37.5"
                    height="37.5"
                    rx="18.75"
                    fill="#EEECF8"
                  />
                  <path
                    d="M27.1585 22.3847L22.9143 20.4827C22.722 20.4003 22.5122 20.3672 22.3038 20.3863C22.0955 20.4055 21.8952 20.4763 21.7211 20.5923C21.7035 20.6037 21.6867 20.6163 21.6708 20.6301L19.4526 22.5168C19.4296 22.5293 19.404 22.5363 19.3778 22.5373C19.3516 22.5382 19.3255 22.533 19.3017 22.5222C17.8758 21.834 16.3988 20.3659 15.7079 18.9599C15.6964 18.9364 15.6904 18.9105 15.6904 18.8844C15.6904 18.8582 15.6964 18.8324 15.7079 18.8089L17.6009 16.5628C17.6145 16.5462 17.6271 16.5288 17.6386 16.5107C17.7531 16.336 17.8222 16.1355 17.8398 15.9273C17.8574 15.7192 17.8228 15.5099 17.7393 15.3185L15.8508 11.0815C15.7435 10.8313 15.558 10.6228 15.3222 10.487C15.0863 10.3513 14.8128 10.2957 14.5426 10.3286C13.3686 10.4829 12.2909 11.0595 11.511 11.9505C10.731 12.8416 10.3022 13.9861 10.3047 15.1702C10.3047 22.205 16.0277 27.9281 23.0625 27.9281C24.2466 27.9303 25.391 27.5015 26.282 26.7216C27.173 25.9417 27.7497 24.8641 27.9042 23.6901C27.937 23.4212 27.8822 23.149 27.7478 22.9137C27.6135 22.6785 27.4068 22.493 27.1585 22.3847ZM23.0625 26.8499C16.6225 26.8499 11.3828 21.6102 11.3828 15.1702C11.3798 14.2484 11.7126 13.357 12.3189 12.6625C12.9252 11.9681 13.7636 11.5182 14.6774 11.3968H14.6981C14.7343 11.3975 14.7694 11.4091 14.7989 11.4301C14.8284 11.4511 14.8509 11.4805 14.8634 11.5145L16.7591 15.747C16.7699 15.7706 16.7755 15.7962 16.7755 15.8221C16.7755 15.848 16.7699 15.8736 16.7591 15.8971L14.8625 18.1486C14.8483 18.1646 14.8354 18.1818 14.8238 18.1998C14.7052 18.381 14.6353 18.5897 14.621 18.8058C14.6066 19.0219 14.6484 19.2381 14.7421 19.4333C15.539 21.0649 17.1831 22.6965 18.8327 23.4934C19.0291 23.5866 19.2463 23.6273 19.4631 23.6116C19.6799 23.5958 19.8889 23.5241 20.0698 23.4035C20.0869 23.3918 20.104 23.3793 20.1201 23.3658L22.3375 21.4791C22.3594 21.4673 22.3836 21.4604 22.4084 21.4589C22.4332 21.4573 22.458 21.4611 22.4812 21.4701L26.7263 23.3721C26.761 23.3868 26.7902 23.4121 26.8097 23.4444C26.8292 23.4766 26.8381 23.5142 26.8351 23.5518C26.7143 24.466 26.2648 25.305 25.5705 25.912C24.8763 26.519 23.9847 26.8524 23.0625 26.8499Z"
                    fill="#30237B"
                  />
                </svg>

                <div className="ml-4 font-medium">
                  <p>+91 8787836546</p>
                  <p className="text-secondry font-medium font-inter">
                    Support Number
                  </p>
                </div>
              </div>

              <div className="flex mt-4">
                <svg
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.732422"
                    width="37.5"
                    height="37.5"
                    rx="18.75"
                    fill="#EEECF8"
                  />
                  <path
                    d="M27 13.084H10.5C10.3632 13.084 10.2321 13.1358 10.1354 13.2281C10.0387 13.3204 9.98438 13.4456 9.98438 13.5762V24.7324C9.98438 25.037 10.1111 25.3291 10.3368 25.5445C10.5624 25.7599 10.8684 25.8809 11.1875 25.8809H26.3125C26.6316 25.8809 26.9376 25.7599 27.1632 25.5445C27.3889 25.3291 27.5156 25.037 27.5156 24.7324V13.5762C27.5156 13.4456 27.4613 13.3204 27.3646 13.2281C27.2679 13.1358 27.1368 13.084 27 13.084ZM18.75 20.1272L11.8252 14.0684H25.6748L18.75 20.1272ZM16.4873 19.4824L11.0156 24.2698V14.6951L16.4873 19.4824ZM17.2504 20.1502L18.4062 21.1575C18.5013 21.2405 18.6255 21.2865 18.7543 21.2865C18.8831 21.2865 19.0073 21.2405 19.1023 21.1575L20.2539 20.1502L25.6748 24.8965H11.826L17.2504 20.1502ZM21.0127 19.4824L26.4844 14.6951V24.2698L21.0127 19.4824Z"
                    fill="#30237B"
                  />
                </svg>

                <a
                href="mailto:contactus@englishyaari.com?body=My custom mail body"
                 className="ml-4 font-medium">
                  <p>contactus@englishyaari.com</p>
                  <p className="text-secondry font-medium font-inter">
                    Support Email
                  </p>
                </a>
              </div>

              <button className="bg-sucess text-white text-base items-center font-semibold flex px-8 rounded-full py-2 mt-8">
                <NavLink  className={'flex items-center'} to='https://api.whatsapp.com/send/?phone=916209848131&text&type=phone_number&app_absent=0'>
                <FaWhatsapp className="mr-3" />
                WhatsApp us
                </NavLink>
              
              </button>
            </div>

            <div className="w-full lg:w-[70%] ">
              <FAQ
                question={"Q1.What is EnglishYaari?"}
                answer={`EnglishYaari is a dynamic language learning platform that offers a unique blend of learning and interactive practice, making it an effective tool for mastering spoken English.
              Our focus on fun activities foster a friendly Environment , ensuring that acquiring spoken English skills becomes an enjoyable journey for our learners.`}
              />
              <FAQ
                question={"Q2. How to book a trial? "}
                answer={`To Book a Trial session, visit the EnglishYaari home page, and Click on “Book A Trial”

              Complete your signup & Make a payment for trial
              
              Select a date and time & Meet your tutor at the session time
              
              “If you find value in your trial session and wish to continue your learning journey with EnglishYaari ,simply subscribe to our plan and schedule your personalised 1-on-1 session with us,”`}
              />

              <FAQ
                question={"What comes with our subscription plan?"}
                answer={`
                With our subscription plan at EnglishYaari, you’ll enjoy a personalized learning experience.

1. You’ll have access to expert tutors who will provide constructive feedback during the sessions.

2. Tailored session notes can help you significantly improve your speech.

3. We offer you session flexibility, you can book your session based on your availability.

4. Plus, you can take multiple sessions in a day by choosing your preferred tutor.

5. Get access to session recordings for your convenience and track your progress.`}
              />

              <FAQ
                question={"How can EnglishYaari help me in my career? "}
                answer={`At EnglishYaari, we understand that strong communication skills are essential for career success. By joining us, you'll not only enhance your spoken English but also gain confidence in expressing yourself fluently. This skill is invaluable in job interviews, presentations, and daily workplace interactions. Moreover, our personalised lesson plans are tailored to address your specific needs, ensuring your professional growth. Our 1-on-1 sessions and constructive feedback from our expert tutors will empower you to excel in your career by mastering this vital language."`}
              />

              <FAQ
                question={"How to book your regular Sessions at EnglishYaari? "}
                answer={`Once you've taken a subscription, you can book your EnglishYaari Sessions according to your availability.

                Steps To Book Your Session
                
                >> Login to your dashboard
                
                >> Click on "Book a session" present on your dashboard
                
                >> Select the time interval and date, You will get the list of available tutors in your selected time interval.
                
                >> select the available time slots and click on the "Book Now" button. Your session will be reserved and can be found in the "My Sessions" section."`}
              />
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="mt-20 pb-20">
        <OurAppNow/>
      </div> */}
    </div>
  );
}

const Card = ({ width, img, tittle, desc, bg }) => {
  return (
    <div
      className={`${
        width ? width : "w-[24%]"
      }  ${bg}  rounded-2xl flex px-4 py-10  flex-col gap-3 mt-10 `}
    >
      <img
        className={`h-[80px] w-[80px] ${
          tittle == "IELTS speaking" ? "w-[120px]" : "w-[80px]"
        }`}
        src={img}
      />
      <p className="text text36 font-bold ">{tittle}</p>
      <p className="text-secondry font-light text-20">{desc}</p>
    </div>
  );
};

const Card2 = ({ width, img, tittle, desc, bg }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${lineFrame})`,
        backgroundSize: "contain",
      }}
      className={`${
        width ? width : "w-[24%]"
      }  bg-[#8A16E4] text-white  rounded-2xl  py-10  flex-col gap-7 mt-10 flex justify-center px-3 lg:px-10  `}
    >
      <p className="text text36 font-bold text-center relative ">
        <svg
          className="absolute top-0 "
          width="17"
          height="17"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_9492_23149)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.12818 10.8894C4.61928 10.5268 3.16623 10.5505 1.63575 10.5071C1.33685 10.4986 1.08835 10.7281 1.07935 11.0193C1.07035 11.3107 1.30623 11.5539 1.60513 11.5625C3.05639 11.6037 4.43741 11.5704 5.87068 11.9146C6.16057 11.9843 6.45406 11.8109 6.52427 11.528C6.59631 11.2452 6.41807 10.9589 6.12818 10.8894Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.05242 7.8086C6.7513 5.34837 3.79117 3.03027 0.802219 1.41003C0.541139 1.26874 0.211618 1.36077 0.067572 1.61556C-0.0764742 1.87034 0.017164 2.192 0.278246 2.33329C3.16817 3.90003 6.0311 6.14193 8.2548 8.52092C8.45645 8.73593 8.79858 8.75085 9.01825 8.55433C9.23793 8.35781 9.25412 8.02365 9.05242 7.8086Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5668 7.18575C11.9467 4.93561 11.2985 2.61628 10.3821 0.570228C10.2614 0.303298 9.94272 0.18153 9.67081 0.298192C9.39712 0.415029 9.27289 0.726655 9.39174 0.993589C10.2272 2.857 10.8466 4.96446 10.5009 7.01385C10.4523 7.3014 10.6522 7.57326 10.9456 7.62058C11.2391 7.6681 11.5182 7.4731 11.5668 7.18575Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_9492_23149">
              <rect width="11.6767" height="12.1844" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Pick a custom plan that suits <br /> your needs
      </p>
      <NavLink
        to={'https://user.englishyaari.com/Register?public=true'}
        className="bg-black flex justify-center rounded-full p-2 text-white text32">
        Book a trial @₹99/-
      </NavLink>
    </div>
  );
};

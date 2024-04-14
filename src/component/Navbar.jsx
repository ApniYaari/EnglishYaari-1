import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { LOGO, WHITELOGO } from "../utils/Constant";
import { useLocation } from 'react-router-dom';

export function NavbarDefault() {
  const [openNav, setOpenNav] = useState(false);
  

  // useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpenNav(false),
  //   );
  // }, []);


  const [scrolling, setScrolling] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        if (window.scrollY > 600) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [location.pathname]);


  const showColor=()=>{
    if (location.pathname === '/') {
     return scrolling ? 'white' : 'blue-gray'
    }
    else{
    return  'white'
    }
  }


  const showImage=()=>{
    if (location.pathname === '/') {
     return scrolling ? WHITELOGO : LOGO
    }
    else{
    return  WHITELOGO
    }
  }

  const navList = (
    <ul className="mt-2 mb-4  flex  flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2 font-urbanist">
      <Typography
        onClick={() => setOpenNav(false)}
        as="li"
        variant="h6"
        color={showColor()}
        className="flex items-center gap-x-2 p-1 font-medium font-urbanist"
      >


        <NavLink to={'/'} className="flex items-center">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color={showColor()}
        className="flex items-center gap-x-2 p-1 font-medium font-urbanist"
      >

        <a href="#" className="flex items-center">
          {/* Our tutors */}
        </a>
      </Typography>
    
      <Typography
        onClick={() => setOpenNav(false)}
        as="li"
        variant="h6"
        color={showColor()}
        className="flex items-center gap-x-2 p-1 font-medium font-urbanist"
      >

        <NavLink to={'/plan-and-pricing'} className="flex items-center">
          Plans and Pricing
        </NavLink>
      </Typography>


      <Typography
        as="li"
        variant="h6"
        color={showColor()}
        className="flex items-center gap-x-2 p-1 font-medium font-urbanist"
      >

        <NavLink to={'/become-a-tutor'} className="flex items-center">
          Become a tutor
        </NavLink>
        <a href="#" className="flex items-center">
          {/* Become a tutor */}
        </a>
      </Typography>
    </ul>
  );
  //  <div className=" fixed top-0 left-1/2 transform -translate-x-1/2  !bg-white rounded-t-none lg:rounded-b-[32px] overflow-clip w-screen py-4 mx-auto px-4 lg:px-8 lg:w-[90vw]">

  return (
    <div
      // style={{background:scrolling?'white':''}}
      className={` ${scrolling  ? 'bg-theme' : 'bg-white'} ${location.pathname !=='/' && '!bg-theme'} fixed z-50 top-0 left-1/2 transform -translate-x-1/2   rounded-t-none lg:rounded-b-[32px]  overflow-clip w-screen py-4 mx-auto px-4 lg:px-8 lg:w-[90vw]`}>
      <div className="   flex items-center justify-between ">
        <a href="https://englishyaari.com/">
        <img  src={showImage()} className={`${scrolling ? 'h-10' : 'h-8'}`} />
        </a>
        <div className="hidden lg:block ">{navList}</div>
        <div className=" items-center gap-x-1 hidden lg:flex ">


          <NavLink className={`flex p-2.5 px-5 font-semibold rounded-full ${scrolling ? 'bg-white text-theme' : '  text-black '} ${location.pathname !=='/' && '!text-white'} `} to={'https://user.englishyaari.com/Login'}>
            <span>Log In</span>
          </NavLink>
          <div

            className={`hidden lg:inline-block bg-theme  rounded-full ${scrolling ? 'bg-white text-theme' : 'bg-theme'}`}
          >
            <NavLink className={`flex p-2.5 px-5 rounded-full ${scrolling ? 'bg-white text-theme' : 'bg-theme text-white '} ${location.pathname !=='/' && '!bg-white !text-theme'}`} to={'https://user.englishyaari.com/Register?public=true'}>
              <span>Get started</span>
              <GoArrowRight className="text-2xl" />
            </NavLink>
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className=" mx-auto">
          {navList}

          <div>
            <NavLink className={`flex p-2.5 border px-5 font-semibold rounded-full ${scrolling ? 'bg-white text-theme' : '  text-black '} ${location.pathname !=='/' && '!text-white'}`} to={'https://user.englishyaari.com/Login'}>
              <span>Log In</span>
            </NavLink>


            <NavLink className={`flex p-2.5 px-5  border mt-3 font-semibold rounded-full ${scrolling ? 'bg-white text-theme' : '  text-black '} ${location.pathname !=='/' && '!text-white'}`} to={'https://user.englishyaari.com/Register'}>
              <span>Get started</span>
            </NavLink>
            <div

              className={`hidden lg:inline-block bg-theme  rounded-full ${scrolling ? 'bg-white text-theme' : 'bg-theme'}`}
            >

            </div>
          </div>
        </div>
      </MobileNav>
    </div>
  );
}
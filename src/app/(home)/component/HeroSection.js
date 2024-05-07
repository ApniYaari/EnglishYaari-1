import React from 'react'
// import Bg from "./assets/bg.png";
import Bg from '../../../assets/Abstract.png'
import Hero from '../../../assets/Hero.png'
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { FiArrowRight } from "react-icons/fi";
import { signupLink } from '@/utils/utils';

function HeroSection() {

    const backgroundStyle = {
        backgroundImage: `url(${Bg})`,
        backgroundSize: "'cover',",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
    };


    return (
        <div className='heroSection relative w-screen bg-[#4D16A4] overflow-hidden flex  flex-col lg:justify-center '  >

            <Image className=' heroSection  top-0  absolute' src={Bg}/>
            <div className='customContainer relative flex-wrap-reverse mx-auto flex  lg:mt-10   justify-center items-center  '>
                <div className='w-[90%] mx-auto lg:w-[50%] flex flex-col items-center lg:items-start '>
                    <div className='bg-gradient-to-r from-[#7F34DF] text-xl   to-[#FF5794] text-white text-center py-1 rounded-full mb-6 w-[250px] lg:w-[220px] !mt-10'>
                        Save upto 50%
                    </div>

                    <p className='h1 text-white font-semibold text-center lg:text-start'>
                    Master Spoken English 
                    </p>

                    <p className='h1 mt-2 lg:mt-6 text-white font-semibold lg:text-start text-center'>
                    in  <span className='text-yellow-800'>live 1-on-1</span> sessions
                    </p>

                    <p className='h6  mt-6 text-white font-medium lg:text-start text-center'>
                    Speak in English with India’s Expert Tutors
                    </p>

                    <Link to={signupLink} className={twMerge('bg-white  font-semibold text-2xl flex  w-[100%] md:w-[386px] justify-center gap-3 items-center py-2.5 mt-8 rounded-full')} href="/">Book your trial <FiArrowRight className='text-black text-2xl' /></Link>

                

                </div>

                <div className='w-full lg:w-[50%] h-auto flex  lg:justify-end justify-center mt-24 lg:mt-16'>
                    <Image height={0} width={0} className='w-[90%] lg:w-[80%] 2xl:[70%]' src={Hero} />
                </div>


            </div>
        </div>
    )
}

export default HeroSection
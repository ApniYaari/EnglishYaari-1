import React from 'react'
// import Bg from "./assets/bg.png";
import Bg from '../../../assets/Abstract.png'
import Hero from '../../../assets/Hero.png'
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { FiArrowRight } from "react-icons/fi";

function HeroSection() {

    const backgroundStyle = {
        backgroundImage: `url(${Bg})`,
        backgroundSize: "'cover',",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
    };


    return (
        <div className='h-[100vh] lg:h-[75vh] relative w-screen bg-[#4D16A4] overflow-hidden flex  flex-col lg:justify-center '  >

            <Image className=' h-[75vh]  top-0  absolute' src={Bg}/>
            <div className='customContainer relative flex-wrap-reverse mx-auto flex    justify-center items-center  '>
                <div className='w-[90%] mx-auto lg:w-[50%] flex flex-col items-center lg:items-start '>
                    <div className='bg-gradient-to-r from-[#7F34DF] text-xl   to-[#FF5794] text-white text-center py-1 rounded-full mb-6 w-[250px] lg:w-[220px] !mt-10'>
                        Save upto 50%
                    </div>

                    <p className='h1 text-white font-semibold text-center lg:text-start'>
                        Boost your <span className='text-yellow-800'>confidence</span> with
                    </p>

                    <p className='h1 mt-2 lg:mt-6 text-white font-semibold lg:text-start text-center'>
                        1-on-1 live English
                    </p>

                    <p className='h6  mt-6 text-white font-medium lg:text-start text-center'>
                    Speak in English with India’s Expert Tutors
                    </p>

                    <Link className={twMerge('bg-white  font-semibold text-2xl flex  w-[100%] md:w-[386px] justify-center gap-3 items-center py-2.5 mt-8 rounded-full')} href="/">Book your trial <FiArrowRight className='text-black text-2xl' /></Link>

                    <div className='text-h6 text-white flex justify-center lg:justify-start gap-3 items-center mt-8'>
                        <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 5.16942C0 2.68118 2.01712 0.664062 4.50536 0.664062H29.4973C31.9856 0.664062 34.0027 2.68118 34.0027 5.16942V8.22966H0V5.16942Z" fill="#FF9933" />
                            <rect y="8.22656" width="34.0027" height="7.5656" fill="white" />
                            <path d="M0 15.7715H34.0027V18.8317C34.0027 21.32 31.9856 23.3371 29.4973 23.3371H4.50536C2.01712 23.3371 0 21.32 0 18.8317V15.7715Z" fill="#128807" />
                            <circle cx="17.0024" cy="11.9965" r="2.72662" stroke="#3333A0" stroke-width="0.6101" />
                            <path d="M17.1724 11.4838L17.1157 11.4697L17.1724 10.9313L17.6824 9.48633L17.3849 10.9313L17.1724 11.4838Z" fill="#3333A0" />
                            <path d="M17.0353 11.4798L16.9769 11.4809L16.891 10.9465L17.006 9.41843L17.0962 10.891L17.0353 11.4798Z" fill="#3333A0" />
                            <path d="M16.9113 11.4854L16.8551 11.5013L16.6362 11.0062L16.3591 9.49913L16.8205 10.9004L16.9113 11.4854Z" fill="#3333A0" />
                            <path d="M16.7976 11.5191L16.7482 11.5502L16.3987 11.1368L15.7085 9.76866L16.5458 10.9834L16.7976 11.5191Z" fill="#3333A0" />
                            <path d="M16.677 11.5981L16.637 11.6406L16.1946 11.3287L15.1815 10.179L16.2982 11.1432L16.677 11.5981Z" fill="#3333A0" />
                            <path d="M16.5997 11.7051L16.572 11.7565L16.0641 11.5694L14.7886 10.7202L16.1163 11.3634L16.5997 11.7051Z" fill="#3333A0" />
                            <path d="M16.5455 11.7936L16.5326 11.8506L15.9931 11.8064L14.5367 11.33L15.9882 11.5939L16.5455 11.7936Z" fill="#3333A0" />
                            <path d="M16.4841 11.967L16.4843 12.0254L15.9486 12.103L14.4225 11.9644L15.8963 11.897L16.4841 11.967Z" fill="#3333A0" />
                            <path d="M16.4922 12.0957L16.5085 12.1518L16.0149 12.3739L14.5096 12.6608L15.9079 12.1903L16.4922 12.0957Z" fill="#3333A0" />
                            <path d="M16.5541 12.2137L16.5847 12.2634L16.1679 12.6087L14.793 13.2855L16.0159 12.4602L16.5541 12.2137Z" fill="#3333A0" />
                            <path d="M17.4704 11.7536L17.4402 11.7036L17.8604 11.3623L19.2417 10.6989L18.0109 11.5123L17.4704 11.7536Z" fill="#3333A0" />
                            <path d="M17.2859 11.5526L17.235 11.524L17.4321 11.0198L18.3062 9.76125L17.637 11.0761L17.2859 11.5526Z" fill="#3333A0" />
                            <path d="M17.5134 11.8724L17.4976 11.8162L17.9934 11.5988L19.5013 11.3263L18.0986 11.7834L17.5134 11.8724Z" fill="#3333A0" />
                            <path d="M17.4137 11.6515L17.3714 11.6112L17.6866 11.1711L18.8438 10.1666L17.8713 11.2761L17.4137 11.6515Z" fill="#3333A0" />
                            <path d="M17.5029 12.0545L17.5011 11.9961L18.0344 11.9038L19.5638 12.0003L18.0924 12.1082L17.5029 12.0545Z" fill="#3333A0" />
                            <path d="M17.4825 12.1875L17.4959 12.1307L18.035 12.1794L19.4873 12.6682L18.0381 12.3919L17.4825 12.1875Z" fill="#3333A0" />
                            <path d="M17.4159 12.2777L17.4441 12.2266L17.95 12.4192L19.2162 13.2822L17.8956 12.6246L17.4159 12.2777Z" fill="#3333A0" />
                            <path d="M17.3179 12.349L17.3584 12.307L17.7969 12.6243L18.7959 13.7863L17.6911 12.8085L17.3179 12.349Z" fill="#3333A0" />
                            <path d="M17.2181 12.4323L17.2679 12.4016L17.6135 12.8182L18.2912 14.1926L17.465 12.9703L17.2181 12.4323Z" fill="#3333A0" />
                            <path d="M17.1069 12.5027L17.1632 12.4871L17.3792 12.9835L17.6475 14.4922L17.1943 13.0882L17.1069 12.5027Z" fill="#3333A0" />
                            <path d="M16.9566 12.4902L17.015 12.4886L17.1056 13.0222L17.0041 14.5512L16.9009 13.0796L16.9566 12.4902Z" fill="#3333A0" />
                            <path d="M16.8343 12.4824L16.8913 12.4955L16.8446 13.0348L16.3617 14.4891L16.6322 13.0388L16.8343 12.4824Z" fill="#3333A0" />
                            <path d="M16.7095 12.4396L16.7605 12.468L16.5655 12.973L15.6966 14.2351L16.3604 12.9176L16.7095 12.4396Z" fill="#3333A0" />
                            <path d="M16.5916 12.3266L16.6345 12.3661L16.3271 12.8116L15.1875 13.8361L16.1405 12.7099L16.5916 12.3266Z" fill="#3333A0" />
                            <path d="M17.5386 11.9934C17.5386 12.2907 17.2976 12.5317 17.0002 12.5317C16.7029 12.5317 16.4619 12.2907 16.4619 11.9934C16.4619 11.6961 16.7029 11.4551 17.0002 11.4551C17.0391 11.4551 17.077 11.4592 17.1136 11.467C17.1329 11.4712 17.1518 11.4763 17.1702 11.4825C17.3843 11.5536 17.5386 11.7555 17.5386 11.9934Z" fill="#3333A0" />
                            <circle cx="19.6382" cy="11.6573" r="0.141667" fill="#3333A0" />
                            <circle cx="19.4381" cy="10.9757" r="0.141667" fill="#3333A0" />
                            <circle cx="19.0992" cy="10.3799" r="0.141667" fill="#3333A0" />
                            <circle cx="18.6187" cy="9.89753" r="0.141667" fill="#3333A0" />
                            <circle cx="18.022" cy="9.56159" r="0.141667" fill="#3333A0" />
                            <circle cx="17.3428" cy="9.38776" r="0.141667" fill="#3333A0" />
                            <circle cx="16.6636" cy="9.36237" r="0.141667" fill="#3333A0" />
                            <circle cx="16.0093" cy="9.56159" r="0.141667" fill="#3333A0" />
                            <circle cx="15.4151" cy="9.89753" r="0.141667" fill="#3333A0" />
                            <circle cx="14.9039" cy="10.3799" r="0.141667" fill="#3333A0" />
                            <circle cx="14.5655" cy="10.9757" r="0.141667" fill="#3333A0" />
                            <circle cx="14.3956" cy="11.6573" r="0.141667" fill="#3333A0" />
                            <circle cx="14.3956" cy="12.335" r="0.141667" fill="#3333A0" />
                            <circle cx="14.5655" cy="12.9913" r="0.141667" fill="#3333A0" />
                            <circle cx="14.9337" cy="13.6124" r="0.141667" fill="#3333A0" />
                            <circle cx="15.3878" cy="14.0889" r="0.141667" fill="#3333A0" />
                            <circle cx="16.0093" cy="14.4288" r="0.141667" fill="#3333A0" />
                            <circle cx="16.6636" cy="14.6299" r="0.141667" fill="#3333A0" />
                            <circle cx="17.3428" cy="14.6299" r="0.141667" fill="#3333A0" />
                            <circle cx="18.022" cy="14.4288" r="0.141667" fill="#3333A0" />
                            <circle cx="18.6187" cy="14.0635" r="0.141667" fill="#3333A0" />
                            <circle cx="19.0992" cy="13.5811" r="0.141667" fill="#3333A0" />
                            <circle cx="19.4381" cy="12.9913" r="0.141667" fill="#3333A0" />
                            <circle cx="19.6382" cy="12.335" r="0.141667" fill="#3333A0" />
                        </svg>

                        Proudly Made in India

                    </div>

                </div>

                <div className='w-full lg:w-[50%] h-auto flex  lg:justify-end justify-center mt-24 lg:mt-16'>
                    <Image height={0} width={0} className='w-[90%] lg:w-[80%]' src={Hero} />
                </div>


            </div>
        </div>
    )
}

export default HeroSection
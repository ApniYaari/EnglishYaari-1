// Navbar.js
"use client"

import { loginLink, primaryColor, signupLink } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';
import WhiteLogo from '@/assets/EY_Dark_logo.svg'
import White from '@/assets/EY_Light_logo.svg'

const NavBar2 = () => {

    const [mobileNav, setMobileNav] = useState(false)

    const [scrolling, setScrolling] = useState(false);
    const [show, setShow] = useState(true);


    useEffect(() => {
        // window.scrollTo({
        //     behavior: 'smooth',
        // })
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setScrolling(false);
            } else {
                setScrolling(false);
            }

            const scrollY = window.scrollY;
            if (scrollY > 1600 && scrollY < 3800) {
                setShow(false); // Hide navbar
            } else {
                setShow(true); // Show navbar
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const pathName = usePathname()

    const [navlist, setNavList] = useState([
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Our tutors',
            link: '/our-tutors'
        },
        {
            name: 'Plans and pricing',
            link: '/plan-and-pricing'
        },
        {
            name: 'Become a tutor',
            link: '/become-a-tutor'
        },
  
    ])

    useEffect(() => {
        window.scrollTo(0, 0);
        if(mobileNav){
            document.body.style.overflow = "hidden";
        }
        else{
            document.body.style.overflow = "unset";
        }
        return () => (document.body.style.overflow = "unset");
    }, [mobileNav])


    return (
        <>
            <div className={twMerge('fixed top-0  shadow-3xl hidden lg:flex items-center justify-between px-8 py-3 z-[999]  left-0 right-0 mx-auto  w-[100vw] bg-primary-500', )}>
                <Link href={'/'}   className='w-[100px] h-10 lg:w-[200px]'>
                    <Image height={0} width={0} className='h-full w-full object-contain' src={White} />
                </Link>
                <nav className=''>


                    <ul className=' hidden lg:flex items-center font-semibold gap-5 text-white '>


                        <li>
                            <Link  href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/our-tutors">
                                Our tutors
                            </Link>
                        </li>
                        <li>
                            <Link href="/plan-and-pricing">
                                Plans and pricing
                            </Link>
                        </li>

                        <li>
                            <Link href="/become-a-tutor">
                                Become a tutor
                            </Link>
                        </li>

                  
                    </ul>
                </nav>


                <div className='flex items-center gap-4  '>
                    <Link target="_blank" href={loginLink} className='mr-4 hidden lg:flex text-white font-semibold'>
                        Login
                    </Link>

                    <Link target="_blank" href={signupLink}>
                        <div style={{color:primaryColor[700],width:'150px'}}  className={twMerge('bg-white font-semibold gap-2 py-3 flex justify-center items-center rounded-full w-[200px]')}>
                            Sign up
                            <FaArrowRight className='text-[#]' />
                        </div>
                    </Link>
                </div>
            </div>


          
            <div style={{ top: '10px' }} className={twMerge('fixed shadow-3xl flex lg:hidden items-center justify-between  z-[999] top-10 md:top-20 left-0 right-0 mx-auto rounded-full w-[90vw] bg-white', scrolling ? 'bg-primary-500' : '')}>
                <div className='relative flex justify-between w-full py-2 px-3 items-center'>
                    <Link href={'/'}  className='  flex justify-start'>
                        <Image height={0} width={0} className='h-[40px] w-[150px] object-fill ' src={scrolling ? White : WhiteLogo} />
                    </Link>
                    <nav style={{ marginTop: '530px', paddingBottom: '20px' }} className={twMerge('absolute py-6  shadow-md bg-white w-full left-0 right-0  rounded-3xl  pb-6', mobileNav ? '' : 'hidden')}>
                        <ul className=' flex flex-col items-center gap-5 w-full px-6 '>




                            {
                                navlist.map((ele, ind) => {
                                    return (
                                        <li  key={ind} className={twMerge(`border-b pb-1 w-full  flex items-center gap-3`, pathName == ele?.link, ele?.name=='About us'?'border-b-0':'' )}>
                                            <div style={pathName == ele?.link ? { width: 6, borderTopRightRadius: 10, borderBottomRightRadius: 10 } : { width: 0 }} className='w-2 h-10 bg-theme rounded-tr-full rounded-br-2xl'>

                                            </div>
                                            <Link onClick={() => setMobileNav(false)} href={ele?.link} className={twMerge(`text-lg`, pathName == ele?.link ? 'text-theme font-semibold' : '')}>
                                                {ele?.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }


                        </ul>

                        <Link target="_blank" href={signupLink}>
                            <div className={twMerge(' text-xl font-semibold gap-3 text-white py-3 flex justify-center items-center rounded-full w-[90%] mx-auto mt-4 bg-primary-500')}>
                                Get started
                                <FaArrowRight className='text-white' />
                            </div>
                        </Link>


                        <Link target="_blank" href={loginLink}>
                            <div style={{ background: primaryColor[100] }} className={twMerge(' text-xl font-semibold   text-theme   py-3 flex justify-center items-center rounded-full w-[90%] mx-auto mb-4 mt-4 ', `bg-[${primaryColor[400]}]`)}>
                                Login
                            </div>
                        </Link>
                    </nav>


                    <div className='flex items-center gap-3   '>


                      {!mobileNav &&  <Link target="_blank" href={signupLink}>
                            <div className={twMerge('bg-primary-500 font-semibold text-sm gap-2 text-white py-2 flex justify-center items-center rounded-full w-[120px]', scrolling ? 'bg-white text-primary-500' : '')}>
                                Get started
                                <FaArrowRight  />
                            </div>
                        </Link>}

                        {mobileNav ? <button onClick={() => setMobileNav(!mobileNav)}  className=' top-5 right-4'>
                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_525_959)">
                                    <path d="M21.875 6.625L6.125 22.375" stroke={scrolling ? '#FFFFFF' : '#6D28D9'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.875 22.375L6.125 6.625" stroke={scrolling ? '#FFFFFF' : '#6D28D9'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_525_959">
                                        <rect width="28" height="28" fill={scrolling ? '#FFFFFF' : '#6D28D9'} transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button> : <button onClick={() => setMobileNav(!mobileNav)}>
                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5551 7.288C16.6921 7.15101 16.769 6.96522 16.769 6.77148C16.769 6.57775 16.6921 6.39195 16.5551 6.25496C16.4181 6.11798 16.2323 6.04102 16.0386 6.04102H1.94482C1.75109 6.04102 1.56529 6.11798 1.42831 6.25496C1.29132 6.39195 1.21436 6.57775 1.21436 6.77148C1.21436 6.96522 1.29132 7.15101 1.4283 7.288C1.56529 7.42499 1.75109 7.50195 1.94482 7.50195H16.0386C16.2323 7.50195 16.4181 7.42499 16.5551 7.288ZM1.94482 2.37695H16.0386C16.2323 2.37695 16.4181 2.29999 16.5551 2.163C16.6921 2.02601 16.769 1.84022 16.769 1.64648C16.769 1.45275 16.6921 1.26695 16.5551 1.12996C16.4181 0.992975 16.2323 0.916016 16.0386 0.916016H1.94482C1.75109 0.916016 1.56529 0.992975 1.4283 1.12996C1.29132 1.26695 1.21436 1.45275 1.21436 1.64648C1.21436 1.84022 1.29132 2.02601 1.4283 2.163C1.56529 2.29999 1.75109 2.37695 1.94482 2.37695ZM16.0386 11.166H1.94482C1.75109 11.166 1.56529 11.243 1.4283 11.38C1.29132 11.517 1.21436 11.7028 1.21436 11.8965C1.21436 12.0902 1.29132 12.276 1.42831 12.413C1.56529 12.55 1.75109 12.627 1.94482 12.627H16.0386C16.2323 12.627 16.4181 12.55 16.5551 12.413C16.6921 12.276 16.769 12.0902 16.769 11.8965C16.769 11.7028 16.6921 11.517 16.5551 11.38C16.4181 11.243 16.2323 11.166 16.0386 11.166Z" fill={scrolling ? '#FFFFFF' : '#6D28D9'} stroke={scrolling ? '#FFFFFF' : '#6D28D9'} stroke-width="0.5"/>
</svg>

                        </button>}


                    </div>

                </div>
            </div>
        </>
    );
};

export default NavBar2;

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
        {
            name: 'About us',
            link: '/contact'
        }
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
            <div className={twMerge('fixed top-0  shadow-3xl hidden lg:flex items-center justify-between px-8 py-3 z-[999]  left-0 right-0 mx-auto  w-[100vw] bg-[#]', `bg-[${primaryColor[700]}]`)}>
                <div className='w-[100px] h-10 lg:w-[200px]'>
                    <Image height={0} width={0} className='h-full w-full object-contain' src={White} />
                </div>
                <nav className=''>


                    <ul className=' hidden lg:flex items-center gap-5 text-white '>


                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                Our tutors
                            </Link>
                        </li>
                        <li>
                            <Link href="/plan-and-pricing">
                                Plans and pricing
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact">
                                Become a tutor
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact">
                                About us
                            </Link>
                        </li>
                    </ul>
                </nav>


                <div className='flex items-center gap-4  '>
                    <Link href="/contact" className='mr-4 hidden lg:flex text-white'>
                        Login
                    </Link>

                    <Link href={'/'}>
                        <div style={{color:primaryColor[700],width:'150px'}}  className={twMerge('bg-white font-semibold gap-2 py-3 flex justify-center items-center rounded-full w-[200px]')}>
                            Sign up
                            <FaArrowRight className='text-[#]' />
                        </div>
                    </Link>
                </div>
            </div>


            <div style={{ top: '10px' }} className={twMerge('fixed shadow-3xl flex lg:hidden items-center justify-between  z-[999] top-10 md:top-20 left-0 right-0 mx-auto rounded-full w-[90vw] bg-white', scrolling ? 'bg-primary-500' : '')}>
                <div className='relative flex justify-between w-full py-2 px-3 items-center'>
                    <div className='  flex justify-start'>
                        <Image height={0} width={0} className='h-[40px] w-[150px] object-fill ' src={scrolling ? White : WhiteLogo} />
                    </div>
                    <nav style={{ marginTop: '580px', paddingBottom: '20px' }} className={twMerge('absolute py-10  bg-white w-full left-0 right-0  rounded-3xl  pb-10', mobileNav ? '' : 'hidden')}>
                        <ul className=' flex flex-col items-center gap-5 w-full px-4 '>




                            {
                                navlist.map((ele, ind) => {
                                    return (
                                        <li className={twMerge(`border-b pb-1 w-full  flex items-center gap-3`, pathName == ele?.link)}>
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

                        <Link href={signupLink}>
                            <div className={twMerge(' text-base gap-3 text-white py-3 flex justify-center items-center rounded-full w-[90%] mx-auto mt-4 bg-primary-500')}>
                                Get started
                                <FaArrowRight className='text-white' />
                            </div>
                        </Link>


                        <Link href={loginLink}>
                            <div style={{ background: primaryColor[100] }} className={twMerge(' text-base text-theme font-semibold  py-3 flex justify-center items-center rounded-full w-[90%] mx-auto mb-4 mt-4 ', `bg-[${primaryColor[400]}]`)}>
                                Login
                            </div>
                        </Link>
                    </nav>


                    <div className='flex items-center gap-3   '>


                      {!mobileNav &&  <Link href={signupLink}>
                            <div className={twMerge('bg-primary-500 text-sm gap-2 text-white py-2 flex justify-center items-center rounded-full w-[120px]', scrolling ? 'bg-white text-primary-500' : '')}>
                                Get started
                                <FaArrowRight className='text-white' />
                            </div>
                        </Link>}

                        {mobileNav ? <button onClick={() => setMobileNav(!mobileNav)}  className=' top-5 right-4'>
                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_525_959)">
                                    <path d="M21.875 6.625L6.125 22.375" stroke="#262527" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.875 22.375L6.125 6.625" stroke="#262527" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_525_959">
                                        <rect width="28" height="28" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button> : <button onClick={() => setMobileNav(!mobileNav)}>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2773 10.4961C18.2773 10.6235 18.2267 10.7457 18.1366 10.8358C18.0465 10.9259 17.9243 10.9766 17.7969 10.9766H3.70312C3.5757 10.9766 3.45349 10.9259 3.36338 10.8358C3.27328 10.7457 3.22266 10.6235 3.22266 10.4961C3.22266 10.3687 3.27328 10.2465 3.36338 10.1564C3.45349 10.0662 3.5757 10.0156 3.70312 10.0156H17.7969C17.9243 10.0156 18.0465 10.0662 18.1366 10.1564C18.2267 10.2465 18.2773 10.3687 18.2773 10.4961ZM3.70312 5.85156H17.7969C17.9243 5.85156 18.0465 5.80094 18.1366 5.71084C18.2267 5.62073 18.2773 5.49852 18.2773 5.37109C18.2773 5.24367 18.2267 5.12146 18.1366 5.03135C18.0465 4.94125 17.9243 4.89063 17.7969 4.89062H3.70312C3.5757 4.89063 3.45349 4.94125 3.36338 5.03135C3.27328 5.12146 3.22266 5.24367 3.22266 5.37109C3.22266 5.49852 3.27328 5.62073 3.36338 5.71084C3.45349 5.80094 3.5757 5.85156 3.70312 5.85156ZM17.7969 15.1406H3.70312C3.5757 15.1406 3.45349 15.1912 3.36338 15.2814C3.27328 15.3715 3.22266 15.4937 3.22266 15.6211C3.22266 15.7485 3.27328 15.8707 3.36338 15.9608C3.45349 16.0509 3.5757 16.1016 3.70312 16.1016H17.7969C17.9243 16.1016 18.0465 16.0509 18.1366 15.9608C18.2267 15.8707 18.2773 15.7485 18.2773 15.6211C18.2773 15.4937 18.2267 15.3715 18.1366 15.2814C18.0465 15.1912 17.9243 15.1406 17.7969 15.1406Z" fill={scrolling ? '#FFFFFF' : '#6D28D9'} />
                            </svg>
                        </button>}


                    </div>

                </div>
            </div>
        </>
    );
};

export default NavBar2;

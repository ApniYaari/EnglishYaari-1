"use client"
import React, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import Alltutor from '@/assets/Alltutor.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { LuBadgeCheck } from "react-icons/lu";
import { expertisetag, teacherInformation, vedioId } from '@/utils/utils'
import { teacherListServices } from '@/services/services'
import DescriptionComponent from '@/component/DescriptionComponent'
import NavBar2 from '@/component/NavBar2'
import { twMerge } from 'tailwind-merge'

function AllTutorList() {

    const [allTutorList, setAllTutorList] = useState([])
    const [tempData, setTempDate] = useState([])
    const [hoverState,setHoverState]=useState(0)

    const teacherListFeatch = async () => {
        try {
            let response = await teacherListServices()
            setAllTutorList(response.data.result)
            setTempDate(response.data.result)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        teacherListFeatch()
    }, [])

    const handleSearch = (e) => {
        const searchText = e.target.value.toLowerCase();
        console.log(searchText);

        if (searchText === "") {
            // If the search input is empty, reset the list to the original data
            setAllTutorList(tempData);
        } else {
            // Filter the original data based on the search input
            const filteredList = tempData.filter((ele) =>
                ele.name.toLowerCase().includes(searchText)
            );
            // Update the state with the filtered list
            setAllTutorList(filteredList);
        }
    };

    return (
        <div className=' bg-background h-screen overflow-x-hidden overflow-y-scroll  pb-20'>
            <NavBar2 />
            <div className='w-[90vw] 3xxl:container flex-wrap-reverse mx-auto   mt-24 lg:mt-36 flex'>
                <div className=' mx-auto w-full  lg:w-[50%] h-auto flex flex-col justify-evenly items-start  py-6 '>
                    <div>
                    <p className='h1 font-bold '>Speak confidently</p>
                    <p className='h1 font-bold mt-4'>succeed strongly</p>
                    </div>

                    <p className='text-secondry font-medium mt-5  h6'>Unlock your potential with certified English mentors.</p>

                    <Link href={'/'}>
                        <div className='bg-primary-500 text-white flex items-center mt-6  w-[280px] justify-center py-2 rounded-full text-2xl gap-2'>
                            Get Started
                            <FaArrowRight />
                        </div>
                    </Link>
                </div>


                <div className='w-full lg:w-[50%] border '>
                    <Image className='h-40 lg:h-auto' src={Alltutor} />
                </div>
            </div>

            <div className='w-[90vw] mx-auto sticky top-0'>
                <div className='relative gap-3 border flex items-center bg-white shadow p-5 rounded-full mt-8'>
                    <IoSearch className='text24 text-theme' />
                    <input className='w-[95%] outline-transparent outline-0 text-lg' onChange={handleSearch} placeholder=' Search for teachers' />
                </div>

                <div className='lg:mt-6 flex flex-wrap'>
                    <div className=' w-full '>
                        {
                            allTutorList?.map((item, ind) => {
                                return (
                                    <Card item={item} index={ind} key={ind} hoverState={hoverState} setHoverState={setHoverState} />
                                )
                            })
                        }

                    </div>


                </div>
            </div>


                      

        </div>
    )
}

export default AllTutorList


const Card = ({ item,index,hoverState,setHoverState }) => {

    return (
        <div
        onMouseEnter={()=>{
          setHoverState(index)
            
        }}
     
         className='w-full flex cursor-pointer items-center justify-between mt-8'>
            <div className='bg-white w-[90vw] lg:w-[50%] mx-auto p-4  rounded-2xl   '>

                <div className='flex gap-5'>
                    <div className=' h-14 min-w-14 lg:min-w-[72px] lg:h-[72px] bg-red-50 rounded-full overflow-hidden  border'>
                        <img className='h-full w-full' src={item?.imageURL} />
                    </div>
                    <div className='w-[80%]'>

                        <div className='flex items-center  gap-2'>
                            <p className='text20 font-semibold'>{item?.name}</p> <LuBadgeCheck className='text-xl text-sucess' />
                        </div>

                        <div>
                            <p className='text-secondry font-medium'>{item?.completedClasses}+ Sessions</p>
                        </div>

                        <div className=' hidden lg:flex overflow-scroll '>
                            {
                                item?.expertise?.map((ele, ind) => {
                                    return (
                                        <div key={ind} className='border min-w-[140px] text-center bg-[#fafafa] font-medium text-secondry text-sm mr-3 p-1 px-3 rounded-full mt-3'>{expertisetag[ele]}</div>
                                    )
                                })
                            }
                        </div>

                        <div className='margin24 hidden lg:flex items-end overflow-scroll'>
                            <DescriptionComponent item={item} type={1} />
                        </div>

                        <div className=' gap-4 margin24 hidden lg:flex '>
                            <Link onClick={() => {
                                teacherInformation.teacherDetails=item
                                // let temp = JSON.stringify(item)
                                // localStorage.setItem('item', temp)
                            }} href={{ pathname: '/tutor-infomation',}} className='bg-lightPurpule font-semibold text-theme p-2.5 text-center rounded-full w-[50%]'>
                                View profile
                            </Link>

                            <button className='bg-primary-500 font-semibold text-white p-2.5  rounded-full w-[50%]'>
                                Book a class
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] lg:hidden'>



                    {/* <div>
                        <p>{item?.completedClasses}+ Sessions</p>
                    </div> */}

                    <div className=' flex overflow-scroll'>
                        {
                            item?.expertise?.map((ele, ind) => {
                                return (
                                    <div key={ind} className='border bg-[#fafafa] min-w-[140px] text-center font-semibold text-secondry text-sm mr-3 p-1 px-3 rounded-full mt-3'>{expertisetag[ele]}</div>
                                )
                            })
                        }
                    </div>

                    <div className='mt-4 flex items-end overflow-scroll '>
                        <DescriptionComponent item={item} type={1} />
                    </div>

                    <div className=' gap-4 mt-4 flex '>
                        <Link 
                         onClick={() => {
                            teacherInformation.teacherDetails=item
                            // let temp = JSON.stringify(item)
                            // localStorage.setItem('item', temp)
                        }}
                        href={{ pathname: '/tutor-infomation'}} className='bg-lightPurpule text-center text-primary-500 font-semibold p-2 rounded-full w-[50%]'>
                            View profile
                        </Link>

                        <button className='bg-primary-500 text-white font-semibold p-2 rounded-full w-[50%]'>
                            Book a class
                        </button>
                    </div>
                </div>

            </div>

            <div   className="w-[50%] h-auto hidden lg:flex justify-end items-end   ">
                <div className={twMerge(index==hoverState?'flex w-[95%] ml-auto':'hidden')}>
                <iframe
        
                 className="w-[100%]  h-[200px] lg:h-[300px] rounded-xl"
                    src={`https://www.youtube.com/embed/${vedioId(item?.introductionVideoURL)}`}>
                </iframe>
            </div>
            </div>
        </div>
    )
}
import { Input } from '@material-tailwind/react'
import React from 'react'
import { IoSearch } from 'react-icons/io5'
import Alltutor from '../assets/Alltutor.png'
function AllTutorList() {
  return (
    <div className=' bg-background h-screen'>
        <div className='w-screen pt-36 bg-lightPurpule py-10 flex'>
            <div className=' mx-auto w-[40%] h-full justify-center items-center border bg-red-300'>
                <p className='text40 font-bold leading-loose'>Better English,<br/> Better opportunity</p>
                <p className='text-secondry font-medium mt-4 '>Unlock your potential with certified English mentors.</p>
            </div>


            <div className='w-[40%]'>
                <img className='h-64' src={Alltutor}/>
            </div>
        </div>

        <div className='container mx-auto'>
            <div className='relative border flex items-center bg-white shadow-xl p-2.5 rounded-lg mt-8'>
                <IoSearch className='text24 text-secondry'/>
            <input className='w-[95%]' placeholder=' Search for teachers'/>
            </div>

            <div className='mt-10'>
            <Card/>
        </div>
        </div>


      
    </div>
  )
}

export default AllTutorList


const Card=()=>{
    return(
        <div className='bg-white p-4 shadow-xl rounded-lg flex gap-6'>
            <div className=' w-[15%] rounded-md overflow-hidden h-48 border'>
                <img className='h-full w-full object-cover' src='https://img.freepik.com/premium-vector/avatar-profile-colorful-illustration-2_549209-82.jpg'/>
            </div>
            <div>
                <p className='text20 font-semibold'>Abhijeet Chawla</p>

                <div className='flex'>
                {
                    ['NPTEL speaker','NPTEL speaker','NPTEL speaker'].map((ele,ind)=>{
                        return(
                            <div key={ind} className='border bg-background mr-3 p-1 px-3 rounded-full mt-3'>{ele}</div>
                        )
                    })
                }
                </div>

                <div className='mt-4'>
                    <p className='font-normal'>
                    Lorem ipsum dolor sit amet consectetur. Augue risus nec sociis nunc cursus justo faucibus enim neque. AliqueLorem ipsum dolor sit amet consectetur. Augue risus nec sociis nunc Aliquet <span className='text-theme font-semibold'>Read more</span> 
                    </p>
                </div>

                <div className='flex gap-4 mt-4'>
                    <button className='bg-lightPurpule text-theme p-2 rounded-full w-[40%]'>
                    View profile
                    </button>

                    <button className='bg-theme text-white p-2 rounded-full w-[40%]'>
                    Book a class
                    </button>
                </div>
            </div>
        </div>
    )
}
import React, { useEffect } from 'react'
import { FaXmark } from 'react-icons/fa6';

function VedioModal({link,setVedioModal,vedioModal}) {
    console.log(vedioModal);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return ()=> document.body.style.overflow = 'unset';
     }, []);
  return (
    <div className='h-screen z-50 flex justify-center items-center w-screen bg-black/80 fixed top-0 right-0'>
            <button onClick={()=>setVedioModal(null)}>
            <FaXmark className='text-6xl m-2 ms-auto absolute  right-0  lg:right-10 top-0 lg:top-10 text-white'/>
            </button>
        <div className={` ${vedioModal==2?'w-[400px] h-auto':'w-[900px] '} bg-white p-4 rounded-lg`}>
        <video  controls autoPlay>
     <source
       src={link}
       type="video/mp4"
       className='object-fill'
     />
     Your browser does not support the video tag.
   </video>

   <div className="w-full flex items-center justify-center ">
    
      <a
      target='_blank'
      href={'https://user.englishyaari.com/Register?public=true'}

      onClick={()=>setVedioModal(null)}
       data-aos="fade-up"
       data-aos-anchor-placement="bottom-bottom"
       className="bg-purple text-xl w-[95%]  rounded-full p-3 my-6 bg-theme text-white font-medium px-10 flex justify-center">
      Book Trial Session @ ₹99/- 
            </a>
      </div>
   
        </div>
    </div>
  )
}

export default VedioModal
import { primaryColor } from '@/utils/utils'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

function CustomButton({name}) {
  return (
    <button style={{background:primaryColor[500]}} className={twMerge(' buttonText flex  font-semibold text-white items-center px-10 gap-3 py-2.5 rounded-full  ', 'buttonText')}>
        {name}<FaArrowRight className='text-white'/>
    </button>
  )
}

export default CustomButton
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

function Button({name}) {
  return (
    <Link href={'/'} className={twMerge('bg-theme text-xl flex lg-text-2xl font-semibold text-white items-center  ', 'w-[400px]')}>
        {name}<FaArrowRight className='text-white'/>
    </Link>
  )
}

export default Button
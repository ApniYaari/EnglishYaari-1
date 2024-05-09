import TutorList from '@/component/TutorList/TutorList'
import React from 'react'


export const metadata = {
    title: "Select Your Personal English Tutor",
    description: "Choose from 100+ online English tutors",
  };
function page() {
  return (
   <>
   <TutorList/>
   </>
  )
}

export default page
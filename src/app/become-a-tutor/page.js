"use client"
import React from 'react'
import { FaArrowRight, FaCircle, FaWhatsapp } from 'react-icons/fa6'
import becomeATutor from '@/assets/becomeATutor.png'
import ChalkboardTeacher from '@/assets/icon/ChalkboardTeacher.png'
import { PiClockCountdown, PiCoins } from 'react-icons/pi'
import { CiGlobe } from 'react-icons/ci'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
// import { Helmet } from 'react-helmet'
// import FAQ from '@/component/FAQ'
import Link from 'next/link'
import NavBar2 from '@/component/NavBar2'
import Image from 'next/image'
import FAQ from '@/component/FAQ'

function BecomeATutor() {
  return (
    <div className='bg-background'>
        <NavBar2/>
              {/* <Helmet>
                
        <meta charSet='utf-8'/>
        <meta  name="description" content="Become an online English tutor at EnglishYaari and get paid up to INR 350 per hour" />
        <title>Become an Online English Tutor - EnglishYaari</title>
        <link rel="canonical" href="https://englishyaari.com/become-a-tutor" />
      </Helmet> */}
      <div className=" w-full lg:w-[90vw]  pt-20 2xll:w-[90%] 3xxl:w-[70%]   mx-auto px-4 lg:px-10  ">
        <div className=' pt-10 flex flex-wrap-reverse'>
          <div className='w-full  lg:w-[50%] pt:10 lg:pt-0  flex flex-col justify-center'>
            <p className='text48 font-semibold  pt:10 lg:pt-0'>Become a tutor</p>
            <p className='text-secondry font-medium    h6 leading-8 mt-4 '>Tutoring English With EnglishYaari Is Fun And <br /> Rewarding</p>

            <Link
              href={'https://docs.google.com/forms/d/e/1FAIpQLSe3YDUZiAqTs_lLihAIW8o8XjMagA1wg8bIye-GZrkC3Zug7g/viewform'}
              target='_blank'
              className='bg-primary-500 w-[300px] text-xl justify-center flex text-white items-center gap-3 p-2.5 rounded-full px-8 mt-4'>
              Apply Now <FaArrowRight />
            </Link>
          </div>
          <div className='w-full lg:w-[50%]  flex items-end justify-end'>
            <Image  className=' h-auto object-contain ' src={becomeATutor} />
          </div>
        </div>


        <p className=' margin120 text36 font-bold text-center'>Teach English online with EnglishYaari</p>

        <div className=' mt-[34px]  w-full  mx-auto bg-white rounded-2xl  relative lg:px-10'>


          <div className='pb-10 flex flex-wrap justify-between'>

            <div className='flex  justify-between lg:justify-start items-start gap-2 px-2 lg:px-0 lg:gap-5 mt-5 w-full lg:w-[40%] pt-5'>
              <div className='bg-[#DCF3E5] lg:h-16 lg:w-16 h-12 w-12 rounded-full flex items-center justify-center'>
                <PiClockCountdown className=' text-2xl lg:text-3xl' />


              </div>

              <div className=' w-[80%]'>
                <p className='h6 font-semibold'>Flexible work schedule</p>
                <div className='text-secondry font-medium mt-3 flex items-center gap-2 h18'>
                  <FaCircle className='text-[6px] text-secondry font-medium mt' /> Decide your own hours
                </div>

                <div className='text-secondry font-medium mt-3 flex items-center gap-2 h18'>
                  <FaCircle className='text-[6px] text-secondry font-medium mt' />Work as much or as little as you want
                </div>
              </div>
            </div>


            <div className='flex  justify-between lg:justify-start items-start gap-2 px-2 lg:px-0 lg:gap-5 mt-5 w-full lg:w-[40%] pt-5'>
              <div className='bg-[#E2D8EF] lg:h-16 lg:w-16 h-12 w-12 rounded-full flex items-center justify-center'>
                <CiGlobe className=' text-2xl lg:text-3xl' />



              </div>

              <div className=' w-[80%]'>
                <p className='h6 font-semibold'>Work from anywhere</p>
                <div className='text-secondry font-medium mt-3 flex items-center gap-2 h18'>
                  <FaCircle className='text-[6px] text-secondry font-medium mt' /> Teach from the comfort of your home
                </div>

                <div className='text-secondry font-medium mt-3 flex items-center gap-2 h18'>
                  <FaCircle className='text-[6px] text-secondry font-medium mt' /> Avoid traffic and long commutes
                </div>
              </div>
            </div>


            <div className='flex  justify-between lg:justify-start items-start gap-2 px-2 lg:px-0 lg:gap-5 mt-5 w-full lg:w-[40%] pt-5'>
              <div className='bg-[#FDF6DF] lg:h-16 lg:w-16 h-12 w-12 rounded-full flex items-center justify-center'>
                <HiOutlineEmojiHappy className=' text-2xl lg:text-3xl' />

              </div>

              <div className=' w-[80%]'>
                <p className='h6 font-semibold'>Stress free tutoring</p>
                <div className='text-secondry font-medium mt-3 flex items-center gap-2 h18'>
                  <FaCircle className='text-[6px] text-secondry font-medium mt' /> We provide each lesson plan
                </div>

                <div className='text-secondry font-medium mt-3 flex items-center gap-2 h18'>
                  <FaCircle className='text-[6px] text-secondry font-medium mt' />24/7 support system
                </div>
              </div>
            </div>


            <div className='flex  justify-between lg:justify-start items-start gap-2 px-2 lg:px-0 lg:gap-5 mt-5 w-full lg:w-[40%] pt-5'>
              <div className='bg-[#FDF6DF] lg:h-16 lg:w-16 h-12 w-12 rounded-full flex items-center justify-center'>
                <PiCoins className=' text-2xl lg:text-3xl' />



              </div>

              <div className=' w-[80%]'>
                <p className='h6 font-semibold'>Get paid monthly</p>
                <div className='text-secondry font-medium mt-3 flex items-center gap-2 h18'>
                  <FaCircle className='text-[6px] text-secondry font-medium mt' /> Earn upto ₹350/hour
                </div>

                <div className='text-secondry font-medium mt-3 flex items-center gap-2 h18'>
                  <FaCircle className='text-[6px] text-secondry font-medium mt' />Get paid via bank transfer on 10th of every month
                </div>
              </div>
            </div>
          </div>


        </div>


        <Link
              href={'https://docs.google.com/forms/d/e/1FAIpQLSe3YDUZiAqTs_lLihAIW8o8XjMagA1wg8bIye-GZrkC3Zug7g/viewform'}
              target='_blank'
              className='bg-primary-500 w-[300px] mx-auto text-xl justify-center flex text-white items-center gap-3 p-2.5 rounded-full px-8 mt-10'>
              Apply Now <FaArrowRight />
            </Link>


      </div>


      <div className="my-20">
        <div className="bg-white py-10  w-[90vw] mx-auto">
          <p className="h1  text-black font-semibold text-center">
            Have a question?
          </p>

          <div className="container flex !mt-10 flex-wrap-reverse px-4 md:px-0">
            <div className="  w-full lg:w-[30%] px-4 flex justify-center items-start flex-col">
              <p className="text-theme text-lg !font-semibold">
                For any other questions{" "}
              </p>

              <div className="flex mt-4">
                <svg
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.732422"
                    width="37.5"
                    height="37.5"
                    rx="18.75"
                    fill="#EEECF8"
                  />
                  <path
                    d="M27.1585 22.3847L22.9143 20.4827C22.722 20.4003 22.5122 20.3672 22.3038 20.3863C22.0955 20.4055 21.8952 20.4763 21.7211 20.5923C21.7035 20.6037 21.6867 20.6163 21.6708 20.6301L19.4526 22.5168C19.4296 22.5293 19.404 22.5363 19.3778 22.5373C19.3516 22.5382 19.3255 22.533 19.3017 22.5222C17.8758 21.834 16.3988 20.3659 15.7079 18.9599C15.6964 18.9364 15.6904 18.9105 15.6904 18.8844C15.6904 18.8582 15.6964 18.8324 15.7079 18.8089L17.6009 16.5628C17.6145 16.5462 17.6271 16.5288 17.6386 16.5107C17.7531 16.336 17.8222 16.1355 17.8398 15.9273C17.8574 15.7192 17.8228 15.5099 17.7393 15.3185L15.8508 11.0815C15.7435 10.8313 15.558 10.6228 15.3222 10.487C15.0863 10.3513 14.8128 10.2957 14.5426 10.3286C13.3686 10.4829 12.2909 11.0595 11.511 11.9505C10.731 12.8416 10.3022 13.9861 10.3047 15.1702C10.3047 22.205 16.0277 27.9281 23.0625 27.9281C24.2466 27.9303 25.391 27.5015 26.282 26.7216C27.173 25.9417 27.7497 24.8641 27.9042 23.6901C27.937 23.4212 27.8822 23.149 27.7478 22.9137C27.6135 22.6785 27.4068 22.493 27.1585 22.3847ZM23.0625 26.8499C16.6225 26.8499 11.3828 21.6102 11.3828 15.1702C11.3798 14.2484 11.7126 13.357 12.3189 12.6625C12.9252 11.9681 13.7636 11.5182 14.6774 11.3968H14.6981C14.7343 11.3975 14.7694 11.4091 14.7989 11.4301C14.8284 11.4511 14.8509 11.4805 14.8634 11.5145L16.7591 15.747C16.7699 15.7706 16.7755 15.7962 16.7755 15.8221C16.7755 15.848 16.7699 15.8736 16.7591 15.8971L14.8625 18.1486C14.8483 18.1646 14.8354 18.1818 14.8238 18.1998C14.7052 18.381 14.6353 18.5897 14.621 18.8058C14.6066 19.0219 14.6484 19.2381 14.7421 19.4333C15.539 21.0649 17.1831 22.6965 18.8327 23.4934C19.0291 23.5866 19.2463 23.6273 19.4631 23.6116C19.6799 23.5958 19.8889 23.5241 20.0698 23.4035C20.0869 23.3918 20.104 23.3793 20.1201 23.3658L22.3375 21.4791C22.3594 21.4673 22.3836 21.4604 22.4084 21.4589C22.4332 21.4573 22.458 21.4611 22.4812 21.4701L26.7263 23.3721C26.761 23.3868 26.7902 23.4121 26.8097 23.4444C26.8292 23.4766 26.8381 23.5142 26.8351 23.5518C26.7143 24.466 26.2648 25.305 25.5705 25.912C24.8763 26.519 23.9847 26.8524 23.0625 26.8499Z"
                    fill="#30237B"
                  />
                </svg>

                <div className="ml-4 font-medium">
                  <p>+91 9798286015</p>
                  <p className="text-secondry font-medium mt-3 font-inter">
                    Support Number
                  </p>
                </div>
              </div>

              <div className="flex mt-4">
                <svg
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.732422"
                    width="37.5"
                    height="37.5"
                    rx="18.75"
                    fill="#EEECF8"
                  />
                  <path
                    d="M27 13.084H10.5C10.3632 13.084 10.2321 13.1358 10.1354 13.2281C10.0387 13.3204 9.98438 13.4456 9.98438 13.5762V24.7324C9.98438 25.037 10.1111 25.3291 10.3368 25.5445C10.5624 25.7599 10.8684 25.8809 11.1875 25.8809H26.3125C26.6316 25.8809 26.9376 25.7599 27.1632 25.5445C27.3889 25.3291 27.5156 25.037 27.5156 24.7324V13.5762C27.5156 13.4456 27.4613 13.3204 27.3646 13.2281C27.2679 13.1358 27.1368 13.084 27 13.084ZM18.75 20.1272L11.8252 14.0684H25.6748L18.75 20.1272ZM16.4873 19.4824L11.0156 24.2698V14.6951L16.4873 19.4824ZM17.2504 20.1502L18.4062 21.1575C18.5013 21.2405 18.6255 21.2865 18.7543 21.2865C18.8831 21.2865 19.0073 21.2405 19.1023 21.1575L20.2539 20.1502L25.6748 24.8965H11.826L17.2504 20.1502ZM21.0127 19.4824L26.4844 14.6951V24.2698L21.0127 19.4824Z"
                    fill="#30237B"
                  />
                </svg>

                <a
                  href="mailto:help@englishyaari.com?body=My custom mail body"
                  className="ml-4 font-medium">
                  <p>help@englishyaari.com</p>
                  <p className="text-secondry font-medium mt-3 font-inter">
                    Support Email
                  </p>
                </a>
              </div>

              <button className="bg-sucess text-white text-base items-center font-semibold flex px-8 rounded-full py-2 mt-8">
                <Link className={'flex items-center'} href='https://api.whatsapp.com/send/?phone=916209848131&text&type=phone_number&app_absent=0'>
                  <FaWhatsapp className="mr-3" />
                  WhatsApp us
                </Link>

              </button>
            </div>

            <div className="w-full lg:w-[70%] ">
              <FAQ
                question={"How EnglishYaari works?"}
                answer={<div>
                  <p className='text-secondry font-medium mt-3'>
                    (a) 1-on-1 Live classes : we provide 25 minute calls to our learners to enhance their spoken English skills and provide personalised learning experience.
                  </p>
                  <p className='text-secondry font-medium mt-3'>
                    (b) Personalised tutors : learners get connected with expert tutors like you to attain fluency .
                  </p>
                  <p className='text-secondry font-medium mt-3'>
                    (c) Personalised lesson plan : We provide customised lesson plans to tutors as well as learners for better learning.
                  </p>
                  <p className='text-secondry font-medium mt-3'>
                    (d) Progress report: By the end of every session ,tutors provide constructive feedback to the learners.
                  </p>

                  <p className='text-secondry font-medium mt-3'>
                    (e) Recorded Sessions: All sessions are recorded for our learners so that they can revise what they have learnt in the previous session .
                  </p>
                </div>}
              />
              <FAQ
                question={"Who can apply to become a tutor at EnglishYaari? "}
                answer={<div>
                  <p className='text-secondry font-medium mt-3'>
                    We are seeking for passionate tutors who can dedicate their teaching methodologies in their classes to help learners achieve their learning Goal.
                  </p>

                  <p className='text-secondry font-medium mt-3'>
                    Tutors can be educators, graduate/postgraduate College Students, or even working professionals With any language certification (like CELTA, TEFL/ TESOL) .
                  </p>
                </div>}
              />

              <FAQ
                question={"What qualities do you need to become a tutor at EnglishYaari ?"}
                answer={<div>
                  <p className='text-secondry font-medium mt-3'>
                  We are seeking dedicated individuals to join our team at EnglishYaari as tutors. Here are some qualities which can help you become a perfect fit .
                  </p>


                  <p className='text-secondry font-medium mt-3'>
                    (a) Exceptional Spoken English Skills
                  </p>
                  <p className='text-secondry font-medium mt-3'>
                    (b) Passion for teaching
                  </p>
                  <p className='text-secondry font-medium mt-3'>
                    (c) Open to Learning and new Experience.
                  </p>
                  <p className='text-secondry font-medium mt-3'>
                    (d)  Ability to empathise with learner’s challenges and tailor instructions accordingly.
                  </p>

                  <p className='text-secondry font-medium mt-3'>
                    (e) Capability to motivate and inspire learners to communicate confidently in English .
                  </p>

                </div>}
              />

              <FAQ
                question={"What age group of learners should I be teaching?"}
                answer={
                  <div>
                  <p className='text-secondry font-medium mt-3'>
                    At EnglishYaari , we offer spoken English courses tailored for a diverse range of learners ,including housewives,working professionals ,kids,college students ,entrepreneurs,business owners,employees,and individuals of all age groups.”
                    </p>
                  </div>
                }
              />

              <FAQ
                question={"What is the procedure of becoming a tutor at EnglishYaari?"}
                answer={<div>
                  <p className='my-3'>
                    (a) Application Submission :
                    <p>
                    Start by submitting your application through our official website .
                    </p>
                  </p>

                  <p className='my-3'>
                    (b) Application Assessment :
                    <p>
                    Our recruitment team will review your application within 7 working days and revert via Email.
                    </p>
                  </p>


                  <p  className='my-3'>
                    (c) Interview and Evaluation :
                    <p>
                    If your application meets our criteria , you will be invited for an interview and assessment to gauge your teaching skills (excellent Communication & conversational skills)
                    </p>
                  </p>


                  <p className='my-3'>
                    (a) Feedback and Training :
                    <p>
                    After successful evaluation, you will receive feedback and necessary training to align your teaching approach with our methodologies.
                    </p>
                  </p>


                  <p className='my-3'>
                    (a)  Onboarding :
                    <p>
                    Finally, once you’ve completed the above steps ,you will officially join us as a tutor, now you are ready to empower learners with improved spoken English skills.
                    </p>
                  </p>
                </div>}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BecomeATutor
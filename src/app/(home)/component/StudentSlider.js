import Image from 'next/image';
import '../Home.css'
import { GoStarFill } from 'react-icons/go';

const StudentSlider = ({ images, speed = 1200000,setVedioModal,setLink }) => {


  return (
    <div className="">

      <div className="xeee">
        <div className='sectionsss' style={{ "--speed": `${speed}ms` }}>
          {images?.map((item, index) => {
            return (
              <div className="ml-5" key={index}>
                <StudentCard item={item} setVedioModal={setVedioModal} setLink={setLink} />
              </div>
            );
          })}
        </div>

        <div className='sectionsss' style={{ "--speed": `${speed}ms` }}>
          {images?.map((item, index) => {
            return (
              <div className="ml-5" key={index}>
                <StudentCard item={item} setVedioModal={setVedioModal} setLink={setLink} />
              </div>
            );
          })}
        </div>


        <div className='sectionsss' style={{ "--speed": `${speed}ms` }}>
          {images?.map((item, index) => {
            return (
              <div className="ml-5" key={index}>
                <StudentCard item={item}  setVedioModal={setVedioModal} setLink={setLink}/>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export { StudentSlider };



const StudentCard = ({ item, setVedioModal, setLink }) => {

  return (
    <div
      onClick={() => {
        setLink(item?.url)
        setVedioModal(true);
      }}
      className=" w-[15rem] cursor-pointer md:min-w-[24rem]    mt-6 rounded-lg  relative overflow-hidden">
        <div className='relative'>
<div className="absolute  h-full w-full bg-black/35 flex justify-start p-3 items-end top-0">
          <svg width="50" height="50" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_480_643)">
              <path d="M20.5506 35.234C28.8552 35.234 35.5875 28.5017 35.5875 20.1971C35.5875 11.8924 28.8552 5.16016 20.5506 5.16016C12.2459 5.16016 5.51367 11.8924 5.51367 20.1971C5.51367 28.5017 12.2459 35.234 20.5506 35.234Z" stroke="white" stroke-width="2.00492" stroke-miterlimit="10" />
              <path d="M26.5673 20.1985L17.0439 13.8496V26.5474L26.5673 20.1985Z" fill="white" stroke="white" stroke-width="1.90467" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_480_643">
                <rect width="40.0984" height="40.0984" fill="white" transform="translate(0.50293 0.148438)" />
              </clipPath>
            </defs>
          </svg>

        </div>
      <Image src={item?.img}/>
      </div>



      <div className=" w-full text24 font-medium flex justify-between items-center mt-3">
        {item?.name}
        <div className="w-[200px]  flex justify-end gap-2">
          {[1, 1, 1, 1, 1].map((ele, ind) => {
            return <GoStarFill key={ind} className="text-yellow-700" />;
          })}
        </div>
      </div>
    </div>
  );
};
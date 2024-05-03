import Image from 'next/image';
import '../Home.css'
import { GoStarFill } from 'react-icons/go';

const StudentSlider = ({ images, speed = 1200000 }) => {


  console.log();
  return (
    <div className="">

      <div className="xeee">
        <div className='sectionsss' style={{ "--speed": `${speed}ms` }}>
          {images?.map((item, index) => {
            return (
              <div className="ml-5" key={index}>
                <StudentCard item={item} />
              </div>
            );
          })}
        </div>

        <div className='sectionsss' style={{ "--speed": `${speed}ms` }}>
          {images?.map((item, index) => {
            return (
              <div className="ml-5" key={index}>
                <StudentCard item={item} />
              </div>
            );
          })}
        </div>


        <div className='sectionsss' style={{ "--speed": `${speed}ms` }}>
          {images?.map((item, index) => {
            return (
              <div className="ml-5" key={index}>
                <StudentCard item={item} />
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
        // setLink(item?.url)
        // setVedioModal(true);
      }}
      className=" w-[15rem] md:min-w-[24rem]    mt-6 rounded-lg  relative overflow-hidden">


      <video className="w-full rounded-lg" autoPlay={false}>
        <source src={item?.url} type="video/mp4" className="object-cover" />
        Your browser does not support the video tag.
      </video>

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
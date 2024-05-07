import Image from 'next/image';
import '../Home.css'
import { GoStarFill } from 'react-icons/go';
import { MeetTutorCard } from './MeetTutorCard';

const TeacherSlider = ({ images, speed = 1200000, setLink, setVedioModal,buttonShow }) => {


    console.log();
    return (
        <div className="overflow-hidden">

            <div className="xeee">
                <div className='sectionsss' style={{ "--speed": `${speed}ms` }}>
                    {images?.map((item, index) => {
                        return (
                            <div className="ml-5" key={index}>
                                <MeetTutorCard buttonShow={buttonShow} setVedioModal={setVedioModal} setLink={setLink} item={item} key={index} />

                            </div>
                        );
                    })}
                </div>

                <div className='sectionsss' style={{ "--speed": `${speed}ms` }}>
                    {images?.map((item, index) => {
                        return (
                            <div className="ml-5" key={index}>
                                <MeetTutorCard buttonShow setVedioModal={setVedioModal} setLink={setLink} item={item} key={index} />

                            </div>
                        );
                    })}
                </div>


                <div className='sectionsss' style={{ "--speed": `${speed}ms` }}>
                    {images?.map((item, index) => {
                        return (
                            <div className="ml-5" key={index}>
                                <MeetTutorCard buttonShow setVedioModal={setVedioModal} setLink={setLink} item={item} key={index} />

                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export { TeacherSlider };



const StudentCard = ({ ele, setVedioModal, setLink }) => {

    return (
        <div
            onClick={() => {
                // setLink(ele?.url)
                // setVedioModal(true);
            }}
            className=" w-[15rem] md:min-w-[24rem]    mt-6 rounded-lg  relative overflow-hidden">


            <video className="w-full rounded-lg" autoPlay={false}>
                <source src={ele?.url} type="video/mp4" className="object-cover" />
                Your browser does not support the video tag.
            </video>

            <div className=" w-full text24 font-medium flex justify-between items-center mt-3">
                {ele?.name}
                <div className="w-[200px]  flex justify-end gap-2">
                    {[1, 1, 1, 1, 1].map((ele, index) => {
                        return <GoStarFill key={index} className="text-yellow-700" />;
                    })}
                </div>
            </div>
        </div>
    );
};
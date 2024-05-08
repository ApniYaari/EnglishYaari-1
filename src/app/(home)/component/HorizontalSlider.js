import Image from 'next/image';
import '../Home.css'

const HorizontalSlider = ({ images, speed = 1000000 }) => {
    return (
      <div className="">

        <div className="xeee">
          <div className='sectionsss' style={{ "--speed": `${speed}ms` }}>
            {images?.map(({ id, image }) => (
              <div className="lg:w-[150px] lg:h-[100px] h-[85px] w-[180px] rounded-2xl lg:rounded-3xl  ml-5 bg-white flex justify-center items-center " key={id}>
              <Image  height={0} width={0}  className='h-[24px] object-contain' src={image} alt={id} />
            </div>
            ))}
          </div>
          <div className='sectionsss'  style={{ "--speed": `${speed}ms` }}>
            {images?.map(({ id, image }) => (
              <div className="lg:w-[150px] lg:h-[100px] h-[85px] w-[180px] rounded-2xl lg:rounded-3xl  ml-5 bg-white flex justify-center items-center " key={id}>
                <Image  height={0} width={0}  className='h-[24px] object-contain' src={image} alt={id} />
              </div>
            ))}
          </div>
          <div className='sectionsss'  style={{ "--speed": `${speed}ms` }}>
            {images?.map(({ id, image }) => (
            <div className="lg:w-[150px] lg:h-[100px] h-[85px] w-[180px] rounded-2xl lg:rounded-3xl  ml-5 bg-white flex justify-center items-center " key={id}>
            <Image  height={0} width={0}  className='h-[24px] object-contain' src={image} alt={id} />
          </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export { HorizontalSlider };
  
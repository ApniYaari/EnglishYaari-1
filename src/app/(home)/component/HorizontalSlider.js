import Image from 'next/image';
import '../Home.css'

const HorizontalSlider = ({ images, speed = 1000000 }) => {
    return (
      <div className="">

        <div className="xeee">
          <div className='sectionsss' style={{ "--speed": `${speed}ms` }}>
            {images?.map(({ id, image }) => (
              <div className=" ml-5 bg-theme" key={id}>
                <Image  height={0} width={0}  className='lg:h-[150px] lg:w-[150px] h-[85px] w-[85px] bg-theme' src={image} alt={id} />
              </div>
            ))}
          </div>
          <div className='sectionsss'  style={{ "--speed": `${speed}ms` }}>
            {images?.map(({ id, image }) => (
              <div className="lg:w-[150px] lg:h-[150px] h-[85px] w-[85px]  ml-5 bg-theme" key={id}>
                <Image  height={0} width={0}  className='lg:h-[150px] lg:w-[150px] h-[85px] w-[85px] bg-theme' src={image} alt={id} />
              </div>
            ))}
          </div>
          <div className='sectionsss'  style={{ "--speed": `${speed}ms` }}>
            {images?.map(({ id, image }) => (
              <div className="lg:w-[150px] lg:h-[150px] h-[85px] w-[85px]  ml-5 bg-theme" key={id}>
                <Image  height={0} width={0}  className='lg:h-[150px] lg:w-[150px] h-[85px] w-[85px] bg-theme' src={image} alt={id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export { HorizontalSlider };
  
import React, { useState } from 'react';

function DescriptionComponent({ item }) {
  const maxWords = 40;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Validate if item and item.description exist before splitting
  const truncatedDescription = item?.description ? item.description.split(' ').slice(0, maxWords).join(' ') : '';

  return (
    <div>
      <p className='font-normal text-secondry text-sm lg:text-base 2xll:text-lg'>
        {showFullDescription ? item?.description : truncatedDescription}
        {item?.description && item.description.length > maxWords ? (
          <span className='text-theme font-semibold' onClick={toggleDescription}>
            {showFullDescription ? ' Read less' : ' Read more'}
          </span>
        ) : null}
      </p>
    </div>
  );
}

export default DescriptionComponent;

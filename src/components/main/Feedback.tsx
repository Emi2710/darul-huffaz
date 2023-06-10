import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Image from 'next/image';

import { feedback } from '../../../assets/constants';
import Link from 'next/link';

interface Props {}


const Feedback: React.FC<Props> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollRef;

    if (direction === 'left') {
      if (current) {
        current.scrollLeft -= 300;
      }
    } else {
      if (current) {
        current.scrollLeft += 300;
      }
    }
  };

  return (
    <div className='' id='vypusknici'>

      <h3 className='text-3xl pt-12 lg:py-12 lg:pt-24 md:text-4xl lg:text-5xl tracking-widest text-center'>Отзывы  </h3>
        
      
      
      <div className="app__gallery-images m-auto">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[feedback.f1,feedback.f2, feedback.f3].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <Image src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
      
    </div>
  );
};

export default Feedback;

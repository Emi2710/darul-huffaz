import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Image from 'next/image';

import { images } from '../../../assets/constants';
import Link from 'next/link';

interface Props {}

const Graduates: React.FC<Props> = () => {
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
    <div className=''>

      <h3 className='text-3xl pt-12 lg:py-12 lg:pt-24 md:text-4xl lg:text-5xl tracking-widest text-center'>Наши выпускницы </h3>
        
      <div className="app__gallery-images flex m-auto">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.img1, images.img2, images.img3].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <Image src={image} alt="gallery_image" />
              <p className='p-3 absolute bottom-0 graduate-caption tracking-widest text-xs lg:text-sm'>Сайдал-Алиева Марха стала Хафизой <br/> за 2 года.<br/> 13.03.2023</p>
            </div>
          ))}
        </div>
        
        <div className="app__gallery-images_arrows-graduate">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
      <div>
        <p className='text-center text-lg md:text-2xl lg:text-4xl lg:py-12 tracking-widest p-1'>За 5 лет работы, с дозволения Аллах1а, <br/>
          наша школы выпустила более <span className='quote-span'>60 Хафизов</span></p>
      </div>
    </div>
  );
};

export default Graduates;

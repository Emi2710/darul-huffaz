import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Image from 'next/image';

import { images } from '../../../assets/constants';
import Link from 'next/link';

interface Props {}

const Gallery: React.FC<Props> = () => {
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
    <div className='lg:flex justify-around lg:my-12'>
      <div className='text-3xl md:text-4xl p-5 mt-12'>
        <h3 className='tracking-widest'>галерея школы</h3>
        <Link href="https://instagram.com/darul_huffaz95"><button className='pink-bg py-1 px-5 tracking-widest text-sm my-3'>Instagram</button></Link>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.img1, images.img2, images.img3].map((image, index) => (
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

export default Gallery;

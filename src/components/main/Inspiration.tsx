import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import Image from 'next/image'
import inspiration from '../../../assets/inspiration.jpg'
type Props = {}

export default function Inspiration({}: Props) {
  
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);
  
  return (
    <div>
      <div className='flex p-3 mt-24 justify-content items-center'>
      <div className='max-w-md m-auto'>

          <Image src={inspiration} alt="Нет ограничений в возрасте для заучивания Корана и нет предела и конца для его изучения." className='width-80 pr-3' />

      </div>

      <div className="hidden lg:block max-w-sm m-auto">
          <video
            ref={vidRef}
            src='./video/video2.mp4'
            controls={true}
            className="width-80"
          />
          <div className="">
            <div
              className=""
              onClick={() => {
                setPlayVideo(!playVideo);
                if (playVideo) {
                  vidRef.current?.pause();
                } else {
                  vidRef.current?.play();
                }
              }}
            >
              {playVideo ? (
                <BsPauseFill color="#fff" fontSize={30} />
              ) : (
                <BsFillPlayFill color="#fff" fontSize={30} />
              )}
            </div>
          </div>
      </div>
      </div>
      <div className='p-5 tracking-wider md:text-lg lg:text-xl'>

        <p className='underline'>Нет ограничений в возрасте для заучивания Корана и нет предела и конца для его изучения.</p>
        <p className='mt-5 underline'>Наша ученица - гордость и пример для подражания. 81 год - это не причина оставлять Корана!</p>
  
      </div>
      
      
    </div>
  )
}
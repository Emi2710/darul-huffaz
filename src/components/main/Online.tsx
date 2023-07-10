import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import online from '../../../assets/online.png';

type Props = {}

export default function Online({}: Props) {
  return (
    <div className='app-bg2 my-5 py-12 flex flex-col lg:flex-row-reverse items-center justify-center'>
      <div className='px-5 py-12 max-w-lg lg:ml-5'>
        <h2 className='text-3xl py-5 md:text-4xl tracking-widest text-center lg:text-left'>Онлайн Обучение</h2>
        
        <p className='roboto opacity-70  leading-relaxed text-md py-5'>
          Каждая мусульманка желает стать хранительницей Священного Корана, чтобы посредством него приблизиться к Аллах1у и снискать Его довольства. Именно поэтому Школа Хафизов для сестёр «Даруль Хуффаз» открыла онлайн обучение чтению священного Корана.
        </p>

       
        
        <Link href="/online-obuchenie"><button className='pink-bg py-1 px-5 text-sm my-3 tracking-widest md:text-lg'>Узнать подробнее</button></Link>
      </div>

      <div>
            <Image src={online} alt="Онлайн Обучение Школа хафизов для девушек" className="p-5 mt-5 max-w-sm lg:max-w-md width-100 md:ml-5 lg:ml-16"/>
      </div>
    </div>
  )
}
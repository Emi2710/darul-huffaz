import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import school from '../../../assets/school.png'

type Props = {}

export default function School({}: Props) {
  return (
    <div className='py-12'>
      <h2 className='deep-gold-color text-3xl py-5 md:text-4xl lg:text-5xl text-center tracking-widest'>Обучение в школе</h2>
      <div className='flex flex-col justify-center items-center md:flex-row'>
        <div className=''>

          <ul className='list-disc py-5 opacity-80 tracking-widest text-lg lg:text-xl'>
            <li className='md: py-1'>Заучивание Корана</li>
            <li className='md: py-1'>Таджвид с нуля</li>
            <li className='md: py-1'>Индивидуальное расписание</li>
            <li className='md: py-1'>Онлайн обучение</li>
            <li className='md: py-1'>выдача сертификатов</li>
          </ul>

          <Link href="/#contact"><button className='pink-bg py-1 px-5 text-sm my-3 tracking-widest md:text-lg'>Контактная информация</button></Link>

        </div>

        <div>
          <div>
            <Image src={school} alt="Школа хафизов для девушек в грозном" className="p-5 mt-5 max-w-sm lg:max-w-md width-100 md:ml-5 lg:ml-16"/>
          </div>
        </div>
      </div>
    </div>
  )
}
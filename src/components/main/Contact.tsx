import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import school from '../../../assets/school.png'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='p-5 mt-12'>
        <h2 className='text-3xl py-5 md:text-4xl tracking-widest text-center'>контактная информация</h2>
      <div className='md:flex justify-center items-center'>
        <div className='tracking-widest'>
          <ul className='list-disc pl-5 py-5 underline'>
            <Link href="https://instagram.com/darul_huffaz95?igshid=YmMyMTA2M2Y="><li>Инстаграм школы</li></Link> 
            <Link href="https://instagram.com/darulhuffaz_online?igshid=YmMyMTA2M2Y="><li>Инстаграм онлайн школы</li></Link> 
            <Link href='https://t.me/darul_huffaz95'><li>Телеграм канал</li></Link> 
          </ul>

          <h4 className='text-lg mt-5'>Администраторы школы:</h4>
          <ul className='list-disc pl-5 pb-5 underline'>
            <Link href="http://wa.me/79280246433/"><li>Сумая Whatsapp</li></Link> 
            <Link href="http://wa.me/79289536146"><li>Хава Whatsapp</li></Link>
          </ul>

          <h4 className='text-lg mt-5'>Администратор онлайн школы:</h4>
          <ul className='list-disc pl-5 pb-5 underline'>
            <Link href="https://wa.me/+79280226626"><li>Саада Whatsapp</li></Link>
          </ul>

          <h4 className='text-lg mt-5'>Наш Адрес:</h4>
          <p className='pl-5'>г. Грозный, ул. Курортная, д. 16</p>

        </div>
        <div>
          
          <Image src={school} alt="Онлайн Обучение Школа хафизов для девушек" className="p-5 mt-5 max-w-sm lg:max-w-md width-100 md:ml-5 lg:ml-16"/>
        </div>
      </div>
      
    </div>
  )
}
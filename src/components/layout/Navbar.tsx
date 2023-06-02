import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import logo from '../../../assets/logo.svg';
import hamburger from '../../../assets/hamburger.svg';

type Props = {}

export default function Navbar({}: Props) {

  const [showMenu, setShowMenu] = useState(false);


  return (
    <div className='lg:flex'>

        <div className='p-5'>
            <Image
                src={logo}
                alt='Логотип Школа Хафизов Для Сестёр'
                width={200}
            />
        </div>
        <div className='items-center justify-center w-100 m-auto text-lg hidden lg:block'>

            <ul className='flex tracking-wider'>
                    <Link href="/main"><li className='pr-5 hover:underline'>Главное</li></Link>
                    <Link href="/about-school"><li className='pr-5 hover:underline'>О школе</li></Link>
                    <Link href="/teachers"><li className='pr-5 hover:underline'>Преподавательский состав</li></Link>
                    <Link href="/online"><li className='pr-5 hover:underline'>Онлайн обучение</li></Link>
            </ul>
            
            
        </div>
        <div className='lg:hidden' onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu) }}>
            <Image
                src={hamburger}
                alt="hamburger menu"
                width={25}
                className="absolute right-5 top-8"
                

            />
        </div>

        {showMenu && 
            <div className='py-5 lg:hidden bg-[#FDDA8B]'>
                <ul className='tracking-wider px-5'>
                        <Link href="/main"><li className='py-3 hover:underline'>Главное</li></Link>
                        <Link href="/about-school"><li className='py-3 hover:underline'>О школе</li></Link>
                        <Link href="/teachers"><li className='py-3 hover:underline'>Преподавательский состав</li></Link>
                        <Link href="/online"><li className='py-3 hover:underline'>Онлайн обучение</li></Link>
                </ul>
            </div>
        }
        
      
    </div>
  )
}
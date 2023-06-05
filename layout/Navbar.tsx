import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';

type Props = {}

export default function Navbar({}: Props) {

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
      setShowMenu(!showMenu)
  }


  return (
    <div className='py-5 lg:flex items-center'>
            <div className='flex items-center'>
                <div className=''>
                    <Image
                        src={logo}
                        alt='Логотип Школа Хафизов Для Сестёр'
                        width={200}
                    />
                </div> 

                <div className='query-hide' onClick={openMenu}>
                    <Image
                        src={hamburger}
                        alt="hamburger menu"
                        width={25}
                        className=""
                        

                    />
                </div> 

            </div>

        
        <div className='items-center justify-center w-100 m-auto text-lg hidden lg:block'>

            <ul className='flex w-100 m-auto desktop-nav_links tracking-widest'>
                    <Link href="/main"><li className=''>Главное</li></Link>
                    <Link href="/about-school"><li className=''>О школе</li></Link>
                    <Link href="/teachers"><li className=''>Преподавательский состав</li></Link>
                    <Link href="/online"><li className=''>Онлайн обучение</li></Link>
            </ul>
            
            
        </div>
        

        {showMenu && 
            <div className='mobile-nav_links'>
                <ul className=''>
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
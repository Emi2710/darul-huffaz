import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '../assets/footer-logo.svg'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='border-top tracking-widest mt-12'>
        <div className='flex flex-col justify-center p-5 desktop-footer'>
            

            <div className='py-5'>
                <h4 className='text-2xl pb-5'>Информация</h4>
                <ul>
                    <Link href='/online-obuchenie'><li>Онлайн обучение </li></Link>
                    <Link href='/prepodavtelskii-sostav'><li>Преподавательский состав </li></Link>
                    <Link href='/vakansii'><li>Вакансии</li></Link>
                    <Link href='/smi'><li>СМИ </li></Link>
                    <Link href='/#vypusknici'><li>Наши выпускницы</li></Link>
                    <Link href='/obyavleniya'><li>Объявления </li></Link>
                    <Link href='/letnee-obuchenie-dlya-detei'><li>Летнее обучение для детей</li></Link>
                    <Link href='/otzivi'><li>Отзывы</li></Link>
                </ul>
            </div>

            <div className='hidden lg:block'>
                <Image src={logo} alt="Darul Huffaz Logo" className='width-100 lg:hidden py-5 max-w-sm' />
            </div>

            <div className='py-5'>
                <h4 className='text-2xl pb-5'>Мы в соцсетях</h4>
                <ul>
                    <Link href="https://instagram.com/darul_huffaz95?igshid=YmMyMTA2M2Y="><li>Instagram школы</li></Link> 
                    <Link href="https://instagram.com/darulhuffaz_online?igshid=YmMyMTA2M2Y="><li>Instagram онлайн школы</li></Link> 
                    <Link href='https://t.me/darul_huffaz95'><li>Telegram</li></Link> 
                    <Link href='#'><li>Youtube</li></Link> 
                    <Link href='#'><li>TikTok</li></Link> 
                </ul>

            </div>

        </div>
        <p className='roboto opacity-80 text-center pt-12'>2023 Darul Huffaz. All Rights reserved.</p>
        
    </div>
  )
}
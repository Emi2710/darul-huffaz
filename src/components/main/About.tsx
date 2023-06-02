import Link from 'next/link'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className="app-bg1 md:flex md:justify-center py-12 mt-12">

        <div className='p-5 md:max-w-md'>
            <h2 className='text-3xl py-5 lg:text-4xl'>Преподавательский состав</h2>
            <p className='roboto text-sm opacity-80 py-5 leading-relaxed'>Преподавательский состав в школе отобран по высоким требованиям. С сестрами занимаются 4 учителя, так же являющиеся Хьафизами. Каждая из них ответственно и осознанно подходит к своей работе, ведь они обучают воспитанниц школы Книге Аллах1а.</p>
            <Link href="/teachers"><button className='pink-bg py-1 px-5 tracking-widest text-sm my-3'>Читать дальше</button></Link>
        </div>

        <div className='p-5 md:max-w-md'>
            <h2 className='text-3xl py-5 lg:text-4xl'>О школе</h2>
            <p className='roboto text-sm opacity-80 py-5 leading-relaxed'>Школа Хафизов для девушек «Даруль Хьуффаз» была основана 1 января 2018 года Хайруллах1ом Кануевым, который на данный момент является директором. За годы работы учреждения выпустилось более 60 хафизов, а обучаются более 120 учениц.</p>
            <Link href="/about-school"><button className='pink-bg py-1 px-5 tracking-widest text-sm my-3'>Читать дальше</button></Link>
        </div>

        

    </div>
  )
}
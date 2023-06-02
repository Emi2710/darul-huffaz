import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import hero from '../../../assets/hero.png'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='sm:flex sm:justify-center mt-12 '>
        <div className='mt-12 max-w-md lg:max-w-xl lg:pt-12'>
            <h1 className='tracking-wider text-4xl lg:text-6xl p-5 '>Школа хафизов для девушек в грозном</h1>
            <p className='roboto leading-relaxed opacity-80 px-5 text-xs lg:text-sm pb-5'>У вас есть возможность получить знания у квалифицированных преподавателей в области изучения Священного писания и тем самым стать носителями Корана.</p>
            <Link href="about-school" className='p-5'><button className='light-golden-bg px-5 py-1'>Узнать подробнее </button></Link>
        </div>
        <div>
            <Image src={hero} alt="Школа хафизов для девушек в грозном" className="p-5 mt-5 max-w-sm lg:max-w-md width-100"/>
        </div>
    </div>
  )
}
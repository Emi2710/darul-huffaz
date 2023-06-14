import React, { useRef } from 'react';


import Header from '@/components/main/Header'
import About from '@/components/main/About'
import School from '@/components/main/School'
import Online from '@/components/main/Online'
import Quote from '@/components/main/Quote'
import Video from '@/components/main/Video'
import Gallery from '@/components/main/Gallery'
import Graduates from '@/components/main/Graduates'
import Inspiration from '@/components/main/Inspiration'
import Timetable from '@/components/main/Timetable'
import Info from '@/components/main/Info'
import Contact from '@/components/main/Contact'

import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import FAQComponent from '@/components/main/FAQComponent'
import Head from 'next/head'

import { sanityClient, urlFor } from '../../lib/sanity';
import Image from 'next/image';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';




interface Props {
    graduates: [Graduate];
}

type Graduate = {
    _id : string;
    name: string;
    time: string;
    date: string;
    img: Image;
    
    
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}



const faqs = [
        {
            question: "Проходят ли дети школьные предметы?",
            answer: "Нет, у нас только заучивание Корана и таджвид.",
        },
        {
            question: "Где вы находитесь? ",
            answer: "Наше учебное заведение находится по адресу: город Грозный, улица Курортная, дом 16, недалеко от тц «Гранд Деловой».",
        },
        {
            question: "Учат ли в школе перевод и есть ли другие религиозные уроки?",
            answer: "Школа направлена на заучивание Священного Корана. Больше никаких уроков нет, только исправление чтения и заучивание.",
        },
        {
            question: "Уроки бывают каждый день? ",
            answer: "Занятия с понедельника по пятницу с 9 до 17 часов. Суббота и воскресенье выходные дни.",
        },
        {
            question: "Кормят ли в школе?  ",
            answer: "В 12:00 большая перемена на обед, ученицы кушают в столовой и пьют чай со сладостями. Каждый день подают разные блюда.",
        },
        {
            question: "За какой период можно стать Хафизой?  ",
            answer: "Длительность обучения зависит от индивидуальных особенностей ученицы. В среднем, 2-3 года, мы говорим так. Но есть и те, кто выучил Коран за несколько месяцев (72 дня) и те, кто учит его более 5 лет (с момента открытия школы).",
        },
        {
            question: "Вы выдаёте сертификаты?",
            answer: "При окончании школы ученица становится Хафизой, проходит выпускной, награждение и получает сертификат.",
        },
        {
            question: "Есть ли у вас обучение с проживанием?",
            answer: "Обучения с проживанием или общежития у нас нет. Многие ученицы гостят у кого-то в Грозном или снимают жильё (самостоятельно ищут через знакомых или через авито).",
        },
        {
            question: "Со скольки лет вы принимаете на заучивание?",
            answer: "Мы принимаем учениц от 10 лет и старше. Если девочка младше 10, но умеет хорошо читать Коран по правилам таджвида, то мы принимаем в качестве исключения.",
        },
        {
            question: "Можно ли учиться полдня или через день?",
            answer: "Все условия и исключения обговариваются лично с директором при поступлении. Мы всегда идём навстречу и пытаемся найти подход к каждому. Наши ученицы совмещают обучение в школе Хафизов с обучением в образовательных учреждениях, работой, семьей и личными делами. Поэтому мы пытаемся сделать обучение доступным и удобным для каждой желающей.",
        },
        {
            question: "Сколько стоит обучение в школе?",
            answer: "Стоимость обучения 7000 рублей в месяц.",
        },
        {
            question: "Можно ли обучаться онлайн, если я живу за пределами Чеченской республики?",
            answer: "Несколько месяцев назад мы открыли онлайн школу. Обучение как раз для тех, кто не может посещать наши занятия и находится за пределами ЧР, чтобы девушки могли заниматься из дома и заучивать Коран с любой точки мира. Администратор по онлайн обучению подробно вас проконсультирует и подберёт соответствующую группу. Свяжитесь с ней.",
        },
        {
            question: "Сколько стоит обучение онлайн?",
            answer: "3000 рублей в месяц - групповые занятия.\n6000 рублей в месяц - индивидуальные занятия.",
        },
    ];


export default function Home({graduates}: Props) {

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
    <div>
    <Head>
        <meta name="google-site-verification" content="7PZLlZcPsd7b6fnrcbnYH-bFL9osurWdx1gS3htgTkc" />

          <title>Школа Хафизов для девушек в Грозном «Даруль Хуффаз»</title>
          <meta name="description" content='У вас есть возможность получить знания у квалифицированных преподавателей в области изучения Священного писания и, тем самым, стать носителями Корана. Школа работает как в оффлайн, так и в онлайн формате. По милости Аллах1а у нас обучаются не только юные девочки, но и пожилого возраста женщины, которые прилагают всевозможные усилия в учении.' />
          
    </Head>   
    <Navbar />
      <Header />
      <About />
      <School />
      <Online />
      <Quote />
      <Video />
      <Gallery />
{/*<Graduates/>  */}
      

      <div className='' id='vypusknici'>

      <h3 className='text-3xl pt-12 lg:py-12 lg:pt-24 md:text-4xl lg:text-5xl tracking-widest text-center'>Наши выпускницы </h3>
        
      
      
      <div className="app__gallery-images flex m-auto">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {graduates.map((graduate, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={urlFor(graduate.img).url()} alt="gallery_image" />
              <p className='p-3 absolute bottom-0 graduate-caption tracking-widest text-xs lg:text-sm'>{graduate.name} <br/>{graduate.time}<br/> {graduate.date}</p>
            </div>
          ))}
        </div>
        
        <div className="app__gallery-images_arrows-graduate">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
      <div>
        <p className='text-center text-lg md:text-2xl lg:text-4xl lg:py-12 tracking-widest p-1'>За 5 лет работы, с дозволения Аллах1а, <br/>
          наша школа выпустила более <span className='quote-span'>60 Хафизов</span></p>
      </div>
    </div>
      
      <Inspiration />
      {/*<Feedback />*/}
      <Timetable />
      <Info />

      <FAQComponent faqs={faqs} />
      
      <Contact />

      <Footer />

    </div>
  )
}

export async function getServerSideProps() {
  const query = `*[_type == 'graduates']{
    _id,
    img,
    name,
    time,
    date,
    
  }`

  const graduates = await sanityClient.fetch(query)
  return {
    props: {graduates}, // will be passed to the page component as props
  }
}
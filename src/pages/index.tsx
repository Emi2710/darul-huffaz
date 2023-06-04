import Layout from '../../layout/Layout'
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
import Questions from '@/components/main/Questions'
import Contact from '@/components/main/Contact'

import Faq, {FAQData, FAQProps} from 'react-faq-component'

interface Props {
    data: {
        title: string,
        rows: [{
            title: string,
            content: string
        }]
    },
    styles: any,
    
}

const data: FAQData[] = [
        {
            title: "Проходят ли дети школьные предметы?",
            content: "Нет, у нас только заучивание Корана и таджвид.",
        },
        {
            title: "Где вы находитесь? ",
            content: "Наше учебное заведение находится по адресу: город Грозный, улица Курортная, дом 16, недалеко от тц «Гранд Деловой».",
        },
        {
            title: "Учат ли в школе перевод и есть ли другие религиозные уроки?",
            content: "Школа направлена на заучивание Священного Корана. Больше никаких уроков нет, только исправление чтения и заучивание.",
        },
        {
            title: "Уроки бывают каждый день? ",
            content: "Занятия с понедельника по пятницу с 9 до 17 часов. Суббота и воскресенье выходные дни.",
        },
        {
            title: "Кормят ли в школе?  ",
            content: "В 12:00 большая перемена на обед, ученицы кушают в столовой и пьют чай со сладостями. Каждый день подают разные блюда.",
        },
        {
            title: "За какой период можно стать Хафизой?  ",
            content: "Длительность обучения зависит от индивидуальных особенностей ученицы. В среднем, 2-3 года, мы говорим так. Но есть и те, кто выучил Коран за несколько месяцев (72 дня) и те, кто учит его более 5 лет (с момента открытия школы).",
        },
        {
            title: "Вы выдаёте сертификаты?",
            content: "При окончании школы ученица становится Хафизой, проходит выпускной, награждение и получает сертификат.",
        },
        {
            title: "Есть ли у вас обучение с проживанием?",
            content: "Обучения с проживанием или общежития у нас нет. Многие ученицы гостят у кого-то в Грозном или снимают жильё (самостоятельно ищут через знакомых или через авито).",
        },
        {
            title: "Со скольки лет вы принимаете на заучивание?",
            content: "Мы принимаем учениц от 10 лет и старше. Если девочка младше 10, но умеет хорошо читать Коран по правилам таджвида, то мы принимаем в качестве исключения.",
        },
        {
            title: "Можно ли учиться полдня или через день?",
            content: "Все условия и исключения обговариваются лично с директором при поступлении. Мы всегда идём навстречу и ищем найти подход к каждому. Наши ученицы совмещают обучение в школе Хафизов с обучением в образовательных учреждениях, работой, семьей и личными делами. Поэтому мы пытаемся сделать обучение доступным и удобным для каждой желающей.",
        },
        {
            title: "Сколько стоит обучение в школе?",
            content: "Стоимость обучения 7000 рублей в месяц.",
        },
        {
            title: "Можно ли обучаться онлайн, если я живу за пределами Чеченской республики?",
            content: "Несколько месяцев назад мы открыли онлайн школу. Обучение как раз для тех, кто не может посещать наши занятия и находится за пределами ЧР, чтобы девушки могли заниматься из дома и заучивать Коран с любой точки мира. Администратор по онлайн обучению подробно вас проконсультирует и подберёт соответствующую группу. Свяжитесь с ней.",
        },
        {
            title: "Сколько стоит обучение онлайн?",
            content: "3000 рублей в месяц - групповые занятия.\n6000 рублей в месяц - индивидуальные занятия.",
        },
    ];

const styles = {
    bgColor: 'transparent',
    titleTextColor: "#000",
    rowTitleColor: "000",
    rowContentColor: '#000',
    arrowColor: "#B2B2B2",
    rowContentPaddingTop:'15px',
    rowContentPaddingBottom:'15px',
    rowContentPaddingLeft:'15px',
    rowContentPaddingRight:'15px',

}



export default function Home({}: Props) {
  return (
    <Layout>

      <Header />
      <About />
      <School />
      <Online />
      <Quote />
      <Video />
      <Gallery />
      <Graduates />
      <Inspiration />
      <Timetable />
      <Info />

      <div className='playfair p-5 opacity-80'>

        <h3 className='text-2xl underline my-12'>Часто задаваемые вопросы </h3>
        <Faq
                    data={data}
                    styles={styles}
                    //config={config}
                  /> 
      </div>
      
      <Contact />

    </Layout>
  )
}

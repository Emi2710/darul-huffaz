import React from 'react'

type Props = {}

export default function Timetable({}: Props) {
  return (
    <div className='app-bg1 tracking-widest px-5 py-12 mt-12 lg:mt-24'>
      <h3 className='text-3xl py-5 md:text-4xl tracking-widest text-center'>Расписание звонков</h3>
      <ul className='md:pl-12'>
        <li>1 урок: с <span className='underline'>9:00 до 9:50</span></li>
        <li>2 урок: с <span className='underline'>10:00 до 10:50</span></li>
        <li>3 урок: с <span className='underline'>11:00 до 11:50</span></li>
      </ul>

      <p className='text-lg md:text-xl md:pl-12 my-5'>Большая перемена с 11:50 до 13:30</p>

        <ul className='md:pl-12'>
          <li>4 урок: с <span className='underline'>13:30 до 14:50</span></li>
          <li>5 урок: с <span className='underline'>15:00 до 15:50</span></li>
          <li>6 урок: с <span className='underline'>16:00 до 16:50</span></li>
        </ul>
     

    </div>
  )
}
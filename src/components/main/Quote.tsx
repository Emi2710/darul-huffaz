import React from 'react'

type Props = {}

export default function Quote({}: Props) {
  return (
    <div className='flex justify-center items-center'>
      <hr className='hidden lg:block'></hr>
      <p className='playfair-italic text-lg text-center px-3 py-12 opacity-90 max-w-3xl lg:text-lg'>&quot;Всевышний облегчает путь каждому вознамеревшему заучить Коран, если он обладает терпением, усердием и имеет искреннее намерение стать хранителем Священного Писания ради Аллах1а.&quot;</p>
    </div>
  )
}
import Image from 'next/image'
import React from 'react'
import cover from '@/assets/cover.svg'
const Hero = () => {
  return (
    <div>
        <Image src={cover} className='object-cover h-[584px] w-full'/>
    </div>
  )
}

export default Hero
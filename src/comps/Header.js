import React from 'react'
import { Kranky } from '@next/font/google';

const kranky = Kranky({
  subsets: ['latin'], 
  weight: ['400']
});

export default function Header() {
  return (
    <div className='w-[30rem]'>
          <p className={`${kranky.className} text-9xl`}> Rowan</p>
          <p className='mt-12 text-xl'><span className='text-5xl'>Hi!</span> I am Rowan and I am a current first year studying Data Science at Boston University. I have passion for design, espresso, fashion, and of course tech</p>
    </div>
  )
}

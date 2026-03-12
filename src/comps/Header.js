import React from 'react'
import { Kranky } from 'next/font/google';

const kranky = Kranky({
  subsets: ['latin'], 
  weight: ['400']
});

export default function Header() {
  return (
    <div className=''>
          <p className={`${kranky.className} text-9xl`}> Rowan</p>
          <div>
            <div className='mt-4 p-4'>
              <p className='text-xl'>Education:</p>
                <p className='ml-4 mt-1'>Boston University '28 <span className='p-2'>|</span> data science + sustainable energy</p>
            </div>

          </div>

    </div>
  )
}

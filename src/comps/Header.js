import React from 'react'
import { Kranky } from 'next/font/google';

const kranky = Kranky({
  subsets: ['latin'], 
  weight: ['400']
});


export default function Header() {
  const [dev, setDev] =  React.useState(false)

    const toggleDev = () => {
      setDev(!dev)
  }

  return (
    <div className=''>
          <p className={`${kranky.className} text-7xl md:text-9xl text-center`}>Rowan</p>
          <div>
            <div className='border border-1 mt-10 p-4 rounded-sm'>
              <p className='text-xl'>Education:</p>
                <p className='ml-4 mt-1'>Boston University '28 <span className='p-2'>|</span> data science + sustainable energy</p>

                <button className='ml-4 mt-2 mb-2 flex items-center' onClick={toggleDev}>Campus involvement 
                  <span className='ml-2 mt-0'>
                    <svg width="14" height="10" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9H22M15 1L23 9L15 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>

            {dev && 
            <div className=''>
            <ul className='mt-6 text-md space-y-6 list-none'>
              <li className='border border-1 rounded-sm p-3'>
                <span className='text-lg'>Boston University Venture Capital Group</span>
                <br></br>
                <span className=''>VP of internal affairs</span>
                <span className='text-gray-400 ml-2'>Jan 2026 – Present</span>
                <p className='ml-2 mt-0.5 pb-4 text-gray-400'>....</p>
              </li>
              <li className='border border-1 rounded-sm p-3'>
                <span className='text-lg'>Chi Phi Fraternity Tau Zeta Chapter</span>
                <br></br>
                <span className=''>Gamma - Sectrary, Iota - Recruitment</span>
                <span className='text-gray-400 ml-2'>Dec 2025 – Present</span>
                <p className='ml-2 mt-0.5 pb-4 text-gray-400'>....</p>
              </li>
              <li className='border border-1 rounded-sm p-3'>
                <span className='text-lg'>Boston University Hack4Impact</span>
                <br></br>
                <span className=''>Software Engineer</span>
                <span className='text-gray-400 ml-2'>Dec 2024 – May 2025</span>
                <p className='ml-2 mt-0.5 pb-4 text-gray-400'>....</p>
              </li>
            </ul>
            </div>
            }
         
            </div>
          </div>
    </div>
  )
}

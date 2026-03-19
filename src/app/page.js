'use client';
import React from 'react';
import Header from "@/comps/Header";
import Connect from "@/comps/Connect";
import AsciiBackground from "@/comps/AsciiBackground";
import Image from "next/image";
import BerriBasketPromo from "@/comps/static/BerriBasketPromo.png";

export default function Home() {

  const [dev, setDev] =  React.useState(false)
  const [design, setDesign] =  React.useState(false)
  
  const toggleDev = () => {
      setDev(!dev)
  }

  const toggleDesign = () => {
      setDesign(!design)
  }

  return (
    <div className="w-full flex justify-center">
      <AsciiBackground />
      <div className="min-w-0 w-[100%] md:w-[45%]">
          <Header/>
         <div className='border border-1 mt-4 p-4 rounded-sm'>
         <p className='text-xl'>Projects</p>
          <button className='ml-4 mt-6 flex items-center' onClick={toggleDev}>Development 
            <span className='ml-2 mt-1'>
              <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9H22M15 1L23 9L15 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
           
            {dev && <div className='mt-4 space-y-6'>


              <div className='border border-1 rounded-sm p-4'>
                <div className='flex justify-center'>
                    <Image src={BerriBasketPromo} alt='BerriBasket' width={300} height={150} className='rounded-sm object-cover' />
                  </div>
                <div className='flex justify-between items-start'>
                  <p className='text-base font-medium'>Project Title</p>
                  <span className='text-sm text-gray-400'>Jan 2025 – Present</span>
                </div>
                <p className='mt-2 text-sm text-gray-400'>Project description goes here.</p>
                <a href='#' className='mt-2 inline-block text-sm text-gray-400 underline'>Visit site →</a>
              </div>

              <div className='border border-1 rounded-sm p-4'>
                  <div className='mt-3 bg-gray-800 rounded-sm w-full h-32 flex items-center justify-center text-gray-400 text-sm'>image</div>
                <div className='flex justify-between items-start'>
                  <p className='text-base font-medium'>Project Title</p>
                  <span className='text-sm text-gray-400'>Jan 2025 – Present</span>
                </div>
                <p className='mt-2 text-sm text-gray-400'>Project description goes here.</p>
                <a href='#' className='mt-2 inline-block text-sm text-gray-400 underline'>Visit site →</a>
              </div>

            </div>
            }
         
          <br></br>

          <button className='ml-4 mt-2 flex items-center pb-4' onClick={toggleDesign}>Design 
            <span className='ml-2 mt-1'>
              <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9H22M15 1L23 9L15 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>

            {design && <div>
                <p>Hello world</p>

               

              </div>
            }
        </div> 
 

      
          <Connect/>

      </div>
    </div>
  );
}

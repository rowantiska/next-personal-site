'use client';
import React from 'react';
import Header from "@/comps/Header";
import Connect from "@/comps/Connect";
import AsciiBackground from "@/comps/AsciiBackground";
import Image from "next/image";
import Link from "next/link";
import BerriBasketPromo from "@/comps/static/berribasket/promo.png";

export default function Home() {

  const [dev, setDev] =  React.useState(false)
  
  const toggleDev = () => {
      setDev(!dev)
  }


  return (
    <div className="w-full flex justify-center">
      <AsciiBackground />
      <div className="min-w-0 w-[100%] md:w-[45%]">
          <Header/>
         <div className='border border-1 mt-4 p-4 rounded-sm'>
         <p className='text-xl'>Experiance</p>
          <button className='ml-4 mt-6 mb-2 flex items-center' onClick={toggleDev}>Projects 
            <span className='ml-2 mt-1'>
              <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9H22M15 1L23 9L15 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
           
            <div className={`mt-4 space-y-6 ${dev ? '' : 'hidden'}`}>
              <div className='border border-1 rounded-sm p-4'>
                <div className='flex justify-center'>
                    <Image src={BerriBasketPromo} alt='BerriBasket' width={350} className='rounded-sm object-cover' priority />
                  </div>
                <div className='flex justify-between items-start'>
                  <p className='text-2xl font-medium'>BerriBasket</p>
                  <span className='text-md mt-2 text-gray-400'>Dec 2020 – Jan 2024</span>
                </div>
                <p className='mt-2 text-md text-gray-400'>A platform for local farmers, eat local.</p>
                <a href='https://berribasket.com' className='mt-2 inline-block text-md text-gray-400 underline'>Visit site</a>
                <Link href='/berribasket-gallery' className='mt-2 inline-block text-md text-gray-400 underline ml-4'>View asset gallery</Link>
              </div>

              <div className='border border-1 rounded-sm p-4'>
                <div className='flex justify-center'>
                    <Image src={BerriBasketPromo} alt='BerriBasket' width={350} className='rounded-sm object-cover' priority />
                  </div>
                <div className='flex justify-between items-start'>
                  <p className='text-2xl font-medium'>BerriBasket</p>
                  <span className='text-md mt-2 text-gray-400'>Jan 2025 – Present</span>
                </div>
                <p className='mt-2 text-md text-gray-400'>A platform for local farmers, eat local.</p>
                <a href='https://berribasket.com' className='mt-2 inline-block text-md text-gray-400 underline'>Visit site →</a>
              </div>
            </div>

        </div> 
      
          <Connect/>

      </div>
    </div>
  );
}

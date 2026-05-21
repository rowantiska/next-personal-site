'use client';
import React from 'react';
import Header from "@/comps/Header";
import Connect from "@/comps/Connect";
import AsciiBackground from "@/comps/AsciiBackground";
import Image from "next/image";
import Link from "next/link";
import BerriBasketPromo from "@/comps/static/berribasket/promo.png";
import feed_edit from "@/comps/static/feed_edit/1.png";
import outfit_gen from "@/comps/static/outfit_gen/1.png";
import usePreloadImages from "@/comps/usePreloadImages";
import { motion, AnimatePresence } from 'framer-motion';

const PROJECT_IMAGES = [BerriBasketPromo.src, feed_edit.src, outfit_gen.src];

export default function Home() {

  const [dev, setDev] =  React.useState(false)
  const [bgReady, setBgReady] = React.useState(false)

  const imagesReady = usePreloadImages(PROJECT_IMAGES)
  const ready = bgReady && imagesReady

  const toggleDev = () => {
      setDev(!dev)
  }


  return (
    <div className="w-full flex justify-center">
      <AsciiBackground onReady={() => setBgReady(true)} />
      <div className={`min-w-0 w-[100%] md:w-[45%] transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'}`}>
          <Header/>
         <div className='border border-1 mt-4 p-4 rounded-sm'>
         <p className='text-xl'>Experience</p>
          <button className='ml-4 mt-6 mb-2 flex items-center' onClick={toggleDev}>Projects 
            <span className={`ml-2 mt-1 inline-block transition-transform duration-300 ${dev ? 'rotate-90' : ''}`}>
              <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9H22M15 1L23 9L15 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
           
            <AnimatePresence>
            {dev &&
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='mt-4 space-y-6'
              style={{ overflow: 'hidden' }}>
              <div className='border border-1 rounded-sm p-4'>
                <div className='flex justify-center'>
                    <Image src={BerriBasketPromo} alt='BerriBasket' width={350} className='rounded-sm object-cover' priority />
                  </div>
                <div className='flex justify-between items-start'>
                  <p className='text-2xl font-medium mt-3'>BerriBasket</p>
                  <span className='text-md mt-4 text-gray-400'>Dec 2020 – Jan 2024</span>
                </div>
                <p className='mt-2 text-md text-gray-400'>A platform for local farmers, eat local produce</p>
                <p className='mt-2 text-md text-gray-400'>Stack: react, javascript, python, docker, flask, tailwind, vercel</p>
                <a href='https://berribasket.com' className='mt-2 inline-block text-md text-gray-400 underline'>Visit site</a>
                <Link href='/berribasket-gallery' className='mt-2 inline-block text-md text-gray-400 underline ml-4'>View asset gallery</Link>
              </div>

              <div className='border border-1 rounded-sm p-4'>
                <div className='flex justify-center'>
                    <Image src={feed_edit} alt='instagram-feed-edit' width={450} className='rounded-sm object-cover' priority />
                  </div>
                <div className='flex justify-between items-start'>
                  <p className='text-2xl font-medium mt-3'>Instagram Feed Editor</p>
                  <span className='text-md mt-4 text-gray-400'>Jan 2025</span>
                </div>
                <p className='mt-2 text-md text-gray-400'>Edit your personal Instagram feed to find your ideal post layout</p>
                <p className='mt-2 text-md text-gray-400'>Stack: react, typescript, express server, tailwind</p>
                <a href='https://github.com/rowantiska/instagram-feed-edit' className='mt-2 inline-block text-md text-gray-400 underline'>View repo</a>
              </div>

                <div className='border border-1 rounded-sm p-4'>
                <div className='flex justify-center'>
                    <Image src={outfit_gen} alt='instagram-feed-edit' width={450} className='rounded-sm object-cover' priority />
                  </div>
                <div className='flex justify-between items-start'>
                  <p className='text-2xl font-medium mt-3'>Outfit Generator</p>
                  <span className='text-md mt-4 text-gray-400'>April 2024</span>
                </div>
                <p className='mt-2 text-md text-gray-400'>Upload your favorite clothes and generate random outfits</p>
                <p className='mt-2 text-md text-gray-400'>Stack: react, javascript, tailwind</p>

                <a href='https://github.com/rowantiska/outfitmaker' className='mt-2 inline-block text-md text-gray-400 underline'>View repo</a>
              </div>

            </motion.div>
            }
            </AnimatePresence>

        </div> 
      
          <Connect/>

      </div>
    </div>
  );
}

'use client';
import React from 'react';
import Header from "@/comps/Header";
import Connect from "@/comps/Connect";
import Cool from "@/comps/Cool";

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
      <div className="w-auto">
          <Header/>
         <div className='border border-1 mt-4 p-4 rounded-sm'>
         <p className='text-xl'>Projects</p>
          <button className='ml-4 mt-6 text-lg flex items-center' onClick={toggleDev}>Development 
            <span className='ml-2 mt-1'>
              <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9H22M15 1L23 9L15 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
           
            {dev && <div>
                

              </div>}
         
          <br></br>

          <button className='ml-4 mt-2 text-lg flex items-center pb-4' onClick={toggleDesign}>Design 
            <span className='ml-2 mt-1'>
              <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9H22M15 1L23 9L15 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>

            {design && <div>
               

              </div>}
        </div> 
 

      
          <Cool/>
          <Connect/>

      </div>
    </div>
  );
}

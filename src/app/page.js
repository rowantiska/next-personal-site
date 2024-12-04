'use client';
import React from 'react';
import Header from "@/comps/Header";
import Connect from "@/comps/Connect";
import ProjectsShown from "@/comps/ProjectsShown";

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
    <div className="lg:flex block">
      <div className="w-1/2">
        <Header/>
        <div>
        <div className='w-[24rem] h-[1px] bg-[#C1C1C1] mt-16'></div>
        <button className='mt-12 text-xl flex items-center' onClick={toggleDev}>Dev Projects <span className='ml-2'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.75 11H12.5V3.75C12.5 3.33579 12.1642 3 11.75 3C11.3358 3 11 3.33579 11 3.75V11H3.75C3.33579 11 3 11.3358 3 11.75C3 12.1642 3.33579 12.5 3.75 12.5H11V19.75C11 20.1642 11.3358 20.5 11.75 20.5C12.1642 20.5 12.5 20.1642 12.5 19.75V12.5H19.75C20.1642 12.5 20.5 12.1642 20.5 11.75C20.5 11.3358 20.1642 11 19.75 11Z" fill="black"/></svg>
        </span></button>
        <br></br>
        <button className='mt-2 text-xl flex items-center' onClick={toggleDesign}>Design Projects <span className='ml-2'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.75 11H12.5V3.75C12.5 3.33579 12.1642 3 11.75 3C11.3358 3 11 3.33579 11 3.75V11H3.75C3.33579 11 3 11.3358 3 11.75C3 12.1642 3.33579 12.5 3.75 12.5H11V19.75C11 20.1642 11.3358 20.5 11.75 20.5C12.1642 20.5 12.5 20.1642 12.5 19.75V12.5H19.75C20.1642 12.5 20.5 12.1642 20.5 11.75C20.5 11.3358 20.1642 11 19.75 11Z" fill="black"/></svg>
        </span></button>
        <div className='w-[24rem] h-[1px] bg-[#C1C1C1] mt-12'></div>
      </div>
        <Connect/>
      </div>
      <div className="lg:w-1/2">
          <ProjectsShown design={design} dev={dev}/>
      </div>
    </div>
  );
}

import React from 'react'

export default function Cool() {
    const [pictures, setPictures] =  React.useState(false)

    const toggleModel = () => {
      setPictures(!pictures)
    }

  return (
    <div>
        <div className='border border-1 mt-8 p-4 rounded-sm'>
            <p className='text-xl'>My life</p>
            <button className='ml-4 mt-6 text-lg flex items-center' onClick={toggleModel}>View 
                <span className='ml-2 mt-1'>
                <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9H22M15 1L23 9L15 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </span>
            </button>

      {pictures && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center" onClick={() => setPictures(false)}>
          <div className="bg-[#111] rounded-xl p-6 w-full max-w-lg relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setPictures(false)} className="absolute top-3 right-3 hover:text-black text-xl">✕</button>

            <div>
              <p>Content</p>

            </div>
          </div>
        </div>
      )}

        </div>
    </div>
  )
}

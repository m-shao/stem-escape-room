import React from 'react'

function ComponentBackground({children, resetObject}) {
  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center absolute bg-opacity-75'>
        {children}
        <button className="w-16 h-16 text-white absolute left-6 top-6" onClick={resetObject}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
        </button>
    </div>
  )
}

export default ComponentBackground
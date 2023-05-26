import React from 'react'

function Pc() {
  return (
    <div className='w-[60vw] h-[50vh] bg-black border-8 border-neutral-900 flex justify-center items-center'>
        <div className='text-white justify-center gap-4 flex flex-col items-center'>
            <div className='bg-white w-24 h-24 rounded-full'>
                <img src="" alt="" />
            </div>
            
            <h1 className='text-3xl font-bold'>ADMIN</h1>
            <div className='w-full'>
                <input type="password" className='w-full rounded-md text-black' />
                <h2>hint: my ideal travel location</h2>
            </div>
        </div>
    </div>
  )
}

export default Pc
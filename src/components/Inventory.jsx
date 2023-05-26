import React from 'react'

function Inventory({inventory}) {

    return (
        <div className='flex gap-4 fixed bottom-4 left-4'>
            {inventory.map((item, index) => (
                <div key= {index} className='w-24 h-24 bg-neutral-700 border-8 border-black rounded-xl flex justify-center items-center'>
                    {item}
                </div>
            ))}
        </div>
    )
}

export default Inventory
import { useState } from 'react'

import ComponentBackground from './ComponentBackground'

import key from '../images/key.png'
import map from '../images/map.png'
import mapCorner1 from '../images/map-corner-1.png'
import mapCorner2 from '../images/map-corner-2.png'
import mapCorner3 from '../images/map-corner-3.png'
import mapCorner4 from '../images/map-corner-4.png'

import screwdriver from '../images/screwdriver.png'


function Inventory({inventory}) {
    const [open, setOpen] = useState(false)

    const items = {
        'key': key,
        'map': map,
        'map-corner-1': mapCorner1,
        'map-corner-2': mapCorner2,
        'map-corner-3': mapCorner3,
        'map-corner-4': mapCorner4,
        'screwdriver': screwdriver
    }

    return (
        <div className='flex gap-4 fixed bottom-4 left-4'>
            {inventory.map((item, index) => (
                <div key= {index} className='w-24 h-24 bg-neutral-700 border-8 border-black rounded-xl flex justify-center items-center'>
                    <img src={items[item]} alt="" onClick={() => {item[0] === "m" && setOpen(true)}}/>
                    {open && (
                        <ComponentBackground resetObject={() => {setOpen(false)}}>
                            <img className='w-[50vw]' src={items[item]}/>
                        </ComponentBackground>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Inventory
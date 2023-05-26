import { useEffect, useState } from 'react'

function NumLock({setNumLock}) {
    function compareArrays(array1, array2) {
    // Check if both arrays have the same length
    if (array1.length !== array2.length) {
        return false;
    }
    
    // Iterate over the elements of array1
    for (let i = 0; i < array1.length; i++) {
        // Compare each element of array1 with the corresponding element of array2
        if (array1[i] !== array2[i]) {
            console.log(array1[i], array2[i])
            return false;
        }
    }
    
    // All elements are equal
    return true;
    }

    const code = [8, 2, 4, 1]
    const [input, setInput] = useState(code.map(() => 0))

    const handleChange = (event, index) => {
        const newValue = parseInt(event.target.value)
        setInput(prevInput => {
            const updatedInput = [...prevInput]
            updatedInput[index] = newValue
            return updatedInput
        })
    }

    function handleEnter() {
        compareArrays(input, code) ? alert('You got it!') : alert('Try again!')
    }

  return (
    <div className='absolute bg-neutral-400 flex flex-col gap-2 px-20 py-12 rounded-xl'>
        <button onClick={() => {setNumLock(false)}}>
            <svg className="w-6 h-6 absolute left-4 top-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
        </button>
        
        <div className='flex gap-2'>
            {input.map((item, index) => (
                <input
                key={index}
                type="text"
                maxLength={1}
                placeholder='0'
                value={item}
                onChange={event => handleChange(event, index)}
                className='w-12 h-24 bg-neutral-500 border-4 border-neutral-600 rounded-xl flex justify-center items-center font-bold text-2xl text-center'
                />
            ))}
        </div>
        
        <button 
            className='w-full bg-neutral-800 text-white p-3 rounded-xl'
            onClick={handleEnter}>
            ENTER
            </button>
    </div>
  )
}

export default NumLock
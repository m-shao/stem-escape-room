import { useState } from 'react'
import NumLock from './NumLock'

function Pc() {

    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const [open, setOpen] = useState(false)

    const handleChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault() // Prevents the form from being submitted
        if (password.toLowerCase() === 'paris') {
            setLoggedIn(true)
            console.log("Hi")
        } else {
            alert('Try again!')
        }
        setPassword('')
      }
    
    if (open) {
        return (
            <div className='w-[60vw] h-[50vh] bg-neutral-800 border-8 border-neutral-900 flex justify-center items-center p-20'>
                <h1 className='text-white'>INSTRUCTIONS *listen carefully: 1. Exit Library, 2. Turn Right, 
                3. Move Forward and take the first right, 4. Move Forward and go down the stairs, 5. Travel Across the Atrium, 
                6. Turn Left just before the front door, 7. Move Down the Hall and go up the stairs at the end,
                8. Move down the hall and the find the locker on the left side</h1>
            </div>
        )
    } else if (loggedIn){
        return (
            <div className='w-[60vw] h-[50vh] bg-neutral-800 border-8 border-neutral-900 flex justify-center items-center'>
                <div className='text-white justify-center gap-4 flex flex-col items-center'>
                    <NumLock password={[4,3,8,6,3]} setNumLock={setLoggedIn} setOpen={setOpen}/>
                </div>
            </div>
        )
    } 

    return (
        <div className='w-[60vw] h-[50vh] bg-neutral-800 border-8 border-neutral-900 flex justify-center items-center'>
            <div className='text-white justify-center gap-4 flex flex-col items-center'>
                <div className='bg-white w-24 h-24 rounded-full'>
                    <img src="" alt="" />
                </div>
                
                <h1 className='text-3xl font-bold'>ADMIN</h1>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='flex'>
                        <input type="password" className='flex-1 rounded-md text-black' value={password} onChange={handleChange}/>
                        <button type="submit" className='bg-neutral-500 px-2 py-1 rounded-md'>Login</button>
                    </div>
                    <h2>hint: City I want to go to after returning to earth</h2>
                    
                </form>
            </div>
        </div>
    )
}

export default Pc
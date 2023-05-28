import { useState } from 'react'

function Pc() {

    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    const handleChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault() // Prevents the form from being submitted
        if (password.toLowerCase() === 'paris') {
            setLoggedIn(true)
            console.log("Hi")
        }
        setPassword('')
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
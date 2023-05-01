import { useState, useEffect } from 'react'

import Main from './components/Main'
import Cupboard from './components/Cupboard'

function App() {
    const [openObject, setOpenObject] = useState({})

    useEffect(() => {
        console.log(openObject)
    }, [openObject])

    const resetObject = () => {
        setOpenObject({
            'type': '',
            'number': 0
        })
    }
    return (
        <div className="App w-screen h-screen">
            {openObject.type === 'cupboard' && <Cupboard resetObject={resetObject}/>}
            <Main setOpenObject={setOpenObject}/>
        </div>
    )
}

export default App
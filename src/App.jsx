import { useState, useEffect } from 'react'

import Main from './components/Main'
import ComponentBackground from './components/ComponentBackground'
import Inventory from './components/Inventory'
import Cupboard from './components/Cupboard'
import Microscope from './components/Microscope'
import Flask from './components/Flask'
import Vent from './components/Vent'
import Long from './components/Long'
import Box1 from './components/Box1'
import Pc from './components/Pc'

function App() {
    const [openObject, setOpenObject] = useState({'type': '',
                                                'number': 0})

    const [inventory, setInventory] = useState([])

    useEffect(() => {
        console.log(openObject)
    }, [openObject])

    const resetObject = () => {
        setOpenObject({
            'type': '',
            'number': 0
        })
    }

    const objectss = {
        'cupboard1': <Cupboard setInventory={setInventory} inventory={inventory} resetObject={resetObject}/>,
        'cupboard2': <Cupboard setInventory={setInventory} inventory={inventory} resetObject={resetObject}/>,
        'cupboard3': <Cupboard setInventory={setInventory} inventory={inventory} resetObject={resetObject}/>,
        'cupboard4': <Cupboard setInventory={setInventory} inventory={inventory} resetObject={resetObject}/>,
        'cupboard5': <Cupboard setInventory={setInventory} inventory={inventory} resetObject={resetObject}/>,
        'cupboard6': <Cupboard setInventory={setInventory} inventory={inventory} resetObject={resetObject}/>,
        'cupboard7': <Cupboard setInventory={setInventory} inventory={inventory} resetObject={resetObject}/>,
        'cupboard8': <Cupboard setInventory={setInventory} inventory={inventory} resetObject={resetObject}/>,
        'cupboard9': <Cupboard setInventory={setInventory} inventory={inventory} resetObject={resetObject}/>,
        'cupboard10': <Cupboard setInventory={setInventory} inventory={inventory} resetObject={resetObject}/>,
        'microscope': <Microscope/>,
        'flask': <Flask/>,
        'vent': <Vent/>,
        'long': <Long/>,
        'box1': <Box1/>,
        'pc': <Pc/>,
    }

    return (
        <div className="App w-screen h-screen overflow-hidden bg-neutral-900">
            <Inventory inventory={inventory}/>
            {openObject.type !== '' &&
                <ComponentBackground resetObject={resetObject}>
                    <div>
                        {objectss[openObject.type + (openObject.number === -1 ? '' : openObject.number)]}
                    </div>
                </ComponentBackground>
            }
            <Main setOpenObject={setOpenObject}/>
        </div>
    )
}

export default App

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

import Key from './components/items/Key'
import Screwdriver from './components/items/Screwdriver'
import MapCorner from './components/items/MapCorner'
import Box2 from './components/items/Box2'
import Box3 from './components/Box3'

function App() {
    const [openObject, setOpenObject] = useState({'type': '',
                                                'number': 0})

    const [inventory, setInventory] = useState([])

    const resetObject = () => {
        setOpenObject({
            'type': '',
            'number': 0
        })
    }

    const objectss = {
        'cupboard1': <Cupboard setInventory={setInventory} inventory={inventory} pickupItem={<Key/>} pickupItemName={"key"}/>,
        'cupboard2': <Cupboard setInventory={setInventory} inventory={inventory}/>,
        'cupboard3': <Cupboard setInventory={setInventory} inventory={inventory} pickupItem={<MapCorner/>} pickupItemName={"map-corner-4"}/>,
        'cupboard4': <Cupboard setInventory={setInventory} inventory={inventory} interactItem={<Box3 inventory={inventory}/>} interactItemName={"box3"}/>,
        'cupboard5': <Cupboard setInventory={setInventory} inventory={inventory} pickupItem={<MapCorner/>} pickupItemName={"map-corner-2"}/>,
        'cupboard6': <Cupboard setInventory={setInventory} inventory={inventory}/>,
        'cupboard7': <Cupboard setInventory={setInventory} inventory={inventory} pickupItem={<MapCorner/>} pickupItemName={"map-corner-3"}/>,
        'cupboard8': <Cupboard setInventory={setInventory} inventory={inventory} interactItem={<Box2 inventory={inventory}/>} interactItemName={"box2"}/>,
        'cupboard9': <Cupboard setInventory={setInventory} inventory={inventory}/>,
        'cupboard10': <Cupboard setInventory={setInventory} inventory={inventory} pickupItem={<Screwdriver/>} pickupItemName={"screwdriver"}/>,
        'microscope': <Microscope/>,
        'flask': <Flask/>,
        'vent': <Vent inventory={inventory}/>,
        'long': <Long/>,
        'box1': <Box1 setInventory={setInventory} inventory={inventory}/>,
        'box3': <Box3 inventory={inventory}/>,
        'pc': <Pc/>,
    }

    return (
        <div className="App w-screen h-screen overflow-hidden bg-neutral-900">
            <Inventory inventory={inventory} />
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

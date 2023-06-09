function Cupboard({setInventory, inventory, pickupItem=" ", pickupItemName=" ", interactItem=" ", interactItemName=" "}) {

    return (
        <>
            <svg width="586" height="790" viewBox="0 0 586 790" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 31">
                    <g id="Group 2">
                        <rect id="Rectangle 32" x="206" y="216.5" width="196" height="116" fill="#B2B3B2" />
                        <rect id="Rectangle 34" x="26" y="176.5" width="185" height="490" fill="#E0E0E0" />
                        <rect id="Rectangle 33" x="211" y="467.5" width="196" height="116" fill="#B2B3B2" />
                        <g id="Rectangle 28">
                            <path d="M26 440.5V413.5L407 522.5L395.5 549L26 440.5Z" fill="#F7F7F7" />
                            <path d="M26 440.5V413.5L407 522.5L395.5 549L26 440.5Z" fill="#F7F7F7" />
                        </g>
                        <path id="Rectangle 30" d="M213 509.5L538 603.5L424 771L26 657L213 509.5Z" fill="white" />
                        <path id="Rectangle 31" d="M208 264.5L533 358.5L419 526L21 412L208 264.5Z" fill="white" />
                        <g id="Group 1">
                            <g id="Rectangle 24">
                                <path d="M381 262.5H407V789.5L381 783.5V262.5Z" fill="#EAEAEA" />
                                <path d="M381 262.5H407V789.5L381 783.5V262.5Z" fill="#EAEAEA" />
                            </g>
                            <g id="Rectangle 25">
                                <path d="M26 179.5V153.5L407 262.5L388.5 279L26 179.5Z" fill="#EAEAEA" />
                                <path d="M26 179.5V153.5L407 262.5L388.5 279L26 179.5Z" fill="#EAEAEA" />
                            </g>
                            <g id="Rectangle 27">
                                <path d="M0 675.5L0 649.5L381 758.5V783L0 675.5Z" fill="#EAEAEA" />
                                <path d="M0 675.5L0 649.5L381 758.5V783L0 675.5Z" fill="#EAEAEA" />
                            </g>
                            <g id="Rectangle 26">
                                <path d="M0 147.5L28 153.5L26 674.5H0V147.5Z" fill="#EAEAEA" />
                                <path d="M0 147.5L28 153.5L26 674.5H0V147.5Z" fill="#EAEAEA" />
                            </g>
                        </g>
                        <path id="Rectangle 28_2" d="M407 261L585.5 119.5V647.5L407 789.5V261Z" fill="#E0E0E0" />
                        <path id="Rectangle 29" d="M187 0L585.5 119.5L407 263L0 147.5L187 0Z" fill="#D9D9D9" />
                    </g>
                    {interactItem}
                    <g className={inventory.includes(pickupItemName) ? 'hidden' : ""} id="Group 4" onClick={() => {!inventory.includes(pickupItemName) && setInventory([...inventory, pickupItemName])}}>
                        {pickupItem}
                    </g>
                    
                </g>
            </svg>
        </>
    )
}

export default Cupboard
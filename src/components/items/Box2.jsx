import React from 'react'

function Box2({inventory}) {
  return (
    <>
        <g id="Group 3" onClick={() => {inventory.includes("key") && alert("box is open")}}>
            <g id="box">
                <g id="Group 3">
                    <rect id="Rectangle 46" width="123.352" height="81.0303"
                        transform="matrix(-0.866025 -0.5 -0.866025 0.5 341 346.676)" fill="#0F0F0F" />
                </g>
                <rect id="Rectangle 48" width="80.9749" height="80.9732"
                    transform="matrix(0.866025 -0.5 2.20305e-08 1 270.752 387.162)" fill="#1D1D1D" />
                <rect id="Rectangle 49" width="123.21" height="80.9732"
                    transform="matrix(0.866025 0.5 -2.20305e-08 1 164.049 325.613)" fill="#353535" />
                <g id="Group 6">
                    <rect id="Rectangle 50" width="123.21" height="1.01286"
                        transform="matrix(0.866025 0.5 -2.20305e-08 1 164 349.673)" fill="#0F0F0F" />
                    <rect id="Rectangle 51" width="81.5563" height="1.01132"
                        transform="matrix(-0.866025 0.5 2.20305e-08 1 341 370.687)" fill="#0F0F0F" />
                </g>
                <g id="Group 5">
                    <rect id="Rectangle 50_2" width="23.6812" height="25.6188"
                        transform="matrix(0.866025 0.5 -2.20305e-08 1 202.293 363.822)" fill="#B69D44" />
                    <rect id="Rectangle 54" width="23.6812" height="6.17297"
                        transform="matrix(0.866025 0.5 -0.866025 0.5 207.639 360.736)" fill="#7D6C31" />
                    <rect id="Rectangle 53" width="6.21472" height="25.6188"
                        transform="matrix(0.866025 -0.5 2.20305e-08 1 222.745 375.7)" fill="#927E36" />
                    <g id="Group 4">
                        <rect id="Rectangle 55" width="4.62643" height="4.55525" rx="2.27763"
                            transform="matrix(0.866025 0.5 -2.20305e-08 1 210.505 376.559)" fill="black" />
                        <path id="Polygon 6" d="M212.509 377.715L214.457 389.249L210.56 387L212.509 377.715Z"
                            fill="black" />
                    </g>
                </g>
            </g>
        </g>
    </>
  )
}

export default Box2
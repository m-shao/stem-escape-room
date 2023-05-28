import React from 'react'

function Main({setOpenObject}) {

    const handleClick = (e) => {
        setOpenObject({
            'type' : e.currentTarget.id.split('-')[0],
            'number' : parseInt(e.currentTarget.id.split('-')[1]) ? parseInt(e.currentTarget.id.split('-')[1]) : -1
    })
    }

    return (
        <div className='w-full h-full'>
            <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1249 812" fill="none">
            <rect width="1249" height="812" fill="#4B4B4B" />
            <g id="MacBook Air - 1" clipPath="url(#clip0_0_1)">
                <rect width="1249" height="812" fill="black" />
                <g id="background">
                    <path id="Rectangle 21" d="M0 0H1249.5L994 165H0V0Z" fill="#464A68" />
                    <path id="Rectangle 23" d="M0 812.428L1253 813L997.398 659H0V812.428Z" fill="#464A68" />
                    <path id="Rectangle 20" d="M-1 165H993V678H-1V165Z" fill="#2B2E4A" />
                    <path id="Rectangle 22" d="M992.5 165L1249.5 -0.5V812L992.5 677.5V165Z" fill="#383C5F" />
                </g>
                <g id="desk">
                    <path id="front-desk-wall" d="M223 710V527H996V710H904.882V563.5H614.006V710H223Z" fill="#E2E2E2" />
                    <path id="countertop" d="M223 527V497H1006L1266.5 572.5H1145.5L994 527H223Z" fill="white" />
                    <path id="side-desk-wall" d="M1145.5 572L994 526.5V710L1145.5 828V572Z" fill="#F0F0F0" />
                    <rect id="dark-desk-wall" x="1145" y="572" width="104" height="240" fill="#C8C8C8" />
                    <path id="dark-desk-wall_2" d="M871.042 563.5H905.042V711.5L888.042 695.5L871.042 679.5V563.5Z" fill="#9B9B9B" />
                </g>
                <g id="desk-interact-group">
                    <g id="long-drawer-1" onClick={handleClick}>
                        <rect id="Rectangle 3" x="615" y="531" width="286" height="25" fill="white" />
                        <rect id="Rectangle 4" x="618.5" y="534.5" width="279" height="18" stroke="#B0B0B0" strokeWidth="3" />
                        <rect id="Rectangle 5" x="727" y="543" width="61" height="2" fill="#003E86" />
                    </g>
                    <g id="drawer-group-1">
                        <g id="drawer-3">
                        <rect id="Rectangle 3_2" x="234" y="654" width="131" height="51" fill="white" />
                        <rect id="Rectangle 4_2" x="241.5" y="660.5" width="115" height="38" stroke="#B0B0B0" strokeWidth="3" />
                        <rect id="Rectangle 5_2" x="279" y="678" width="41" height="4" fill="#003E86" />
                        </g>
                        <g id="drawer-2">
                        <rect id="Rectangle 3_3" x="234" y="597" width="131" height="51" fill="white" />
                        <rect id="Rectangle 4_3" x="241.5" y="603.5" width="115" height="38" stroke="#B0B0B0" strokeWidth="3" />
                        <rect id="Rectangle 5_3" x="279" y="621" width="41" height="4" fill="#003E86" />
                        </g>
                        <g id="drawer-1">
                        <rect id="Rectangle 3_4" x="234" y="540" width="131" height="51" fill="white" />
                        <rect id="Rectangle 4_4" x="241.5" y="546.5" width="115" height="38" stroke="#B0B0B0" strokeWidth="3" />
                        <rect id="Rectangle 5_4" x="279" y="564" width="41" height="4" fill="#003E86" />
                        </g> 
                    </g>
                    <g id="bottom-cupboard-group-2">
                        <g id="cupboard-4" onClick={handleClick}>
                        <path id="Rectangle 3_5" d="M1055 745.027V555.231L1130 578.965V803.888L1055 745.027Z" fill="white" stroke="#B0B0B0" strokeWidth="4" />
                        <path id="Rectangle 6" d="M1065.27 695.067V632.8L1069.87 635.853V698.119L1065.27 695.067Z" fill="#003E86" />
                        </g>
                        <g id="cupboard-3" onClick={handleClick}>
                        <path id="Rectangle 3_6" d="M1003.5 705.506V537.766L1051 553.446V741.477L1003.5 705.506Z" fill="white" stroke="#B0B0B0" strokeWidth="4" />
                        <path id="Rectangle 6_2" d="M1042 672V621L1045 623.5V674.5L1042 672Z" fill="#003E86" />
                        </g>
                    </g>
                    <g id="bottom-cupboard-group-1">
                        <g id="cupboard-2" onClick={handleClick}>
                        <rect id="Rectangle 3_7" x="-2" y="2" width="107" height="156" transform="matrix(-1 0 0 1 599 541)" fill="white" stroke="#B0B0B0" strokeWidth="4" />
                        <rect id="Rectangle 6_3" width="51" height="4" transform="matrix(0 -1 -1 0 505 651)" fill="#003E86" />
                        </g>
                        <g id="cupboard-1" onClick={handleClick}>
                        <rect id="Rectangle 3_8" x="375" y="542" width="107" height="156" fill="white" stroke="#B0B0B0" strokeWidth="4" />
                        <rect id="Rectangle 6_4" x="471" y="650" width="51" height="4" transform="rotate(-90 471 650)" fill="#003E86" />
                        </g>
                    </g>
                </g>
                <g id="cupboard-2" onClick={handleClick}>
                    <rect id="Rectangle 3_9" x="-2" y="2" width="68" height="156" transform="matrix(-1 0 0 1 983 544)" fill="white" stroke="#B0B0B0" strokeWidth="4" />
                    <rect id="Rectangle 6_5" width="14" height="4" transform="matrix(0 -1 -1 0 926 636)" fill="#B0B0B0" />
                    <rect id="Rectangle 7" width="3" height="39" transform="matrix(0 -1 -1 0 970 562)" fill="#003E86" />
                    <rect id="Rectangle 8" width="3" height="39" transform="matrix(0 -1 -1 0 970 568)" fill="#003E86" />
                    <rect id="Rectangle 9" width="3" height="39" transform="matrix(0 -1 -1 0 970 574)" fill="#003E86" />
                    <rect id="Rectangle 10" x="-0.5" y="-0.5" width="44" height="56" transform="matrix(0 -1 -1 0 978 696)" stroke="#EDEDED" />
                </g>
                <g id="shelf">
                    <g id="shelf-side">
                        <path id="Rectangle 17" d="M10 165L-3 172.5L-0.5 705L10 710V165Z" fill="#D9D9D9" />
                        <path id="Rectangle 18" d="M208 180H177V680L208 710V180Z" fill="#9B9B9B" />
                    </g>
                    <g id="shelf-front">
                        <rect id="Rectangle 11" width="213" height="15" transform="matrix(-1 0 0 1 223 492)" fill="white" />
                        <rect id="Rectangle 12" width="213" height="15" transform="matrix(-1 0 0 1 223 401)" fill="white" />
                        <rect id="Rectangle 13" width="213" height="15" transform="matrix(-1 0 0 1 223 299)" fill="white" />
                        <rect id="Rectangle 14" width="213" height="15" transform="matrix(-1 0 0 1 223 165)" fill="white" />
                        <rect id="Rectangle 15" width="545" height="15" transform="matrix(0 -1 -1 0 25 710)" fill="white" />
                        <rect id="Rectangle 16" width="545" height="15" transform="matrix(0 -1 -1 0 223 710)" fill="white" />
                    </g>
                </g>
                <g id="top-shelf">
                    <rect id="dark-top-wall" x="1140" y="110" width="99" height="211" fill="#C8C8C8" />
                    <path id="dark-top-wall_2" d="M993 348L1139.5 321H1239.5L993 359.5V348Z" fill="#989898" />
                    <path id="dark-top-wall_3" d="M566 348L578 359.355H993L1074.5 344.5L566 348Z" fill="#989898" />
                    <rect id="top-cupboard-front" x="566" y="197" width="427" height="151" fill="white" />
                    <path id="top-cupboard-side" d="M993 197L1140 109.908V320.908L993 348V197Z" fill="#F0F0F0" />
                </g>
                <g id="top-interact-group">
                    <g id="top-cupboard-group-1">
                        <g id="cupboard-6" onClick={handleClick}>
                        <rect id="Rectangle 3_10" x="-2" y="2" width="107" height="127.18" transform="matrix(-1 0 0 1 804 207.82)" fill="white" stroke="#B0B0B0" strokeWidth="4" />
                        <rect id="Rectangle 6_6" width="41.8137" height="4" transform="matrix(0 -1 -1 0 710 298.006)" fill="#003E86" />
                        </g>
                        <g id="cupboard-5" onClick={handleClick}>
                        <rect id="Rectangle 3_11" x="580" y="209" width="107" height="127.18" fill="white" stroke="#B0B0B0" strokeWidth="4" />
                        <rect id="Rectangle 6_7" x="676" y="297.186" width="41.8137" height="4" transform="rotate(-90 676 297.186)" fill="#003E86" />
                        </g>
                    </g>
                    <g id="top-cupboard-group-2">
                        <g id="cupboard-8" onClick={handleClick}>
                        <rect id="Rectangle 3_12" x="-2" y="2" width="72.2522" height="118.236" transform="matrix(-1 0 0 1 979 211.764)" fill="white" stroke="#B0B0B0" strokeWidth="4" />
                        <rect id="Rectangle 7_2" width="110" height="63" transform="matrix(0 -1 -1 0 976 328)" fill="#E1ECF9" />
                        <rect id="Rectangle 6_8" width="29" height="3" transform="matrix(0 -1 -1 0 919 288)" fill="#003E86" />
                        </g>
                        <g id="cupboard-7" onClick={handleClick}>
                        <rect id="Rectangle 3_13" x="827" y="214" width="72.2522" height="118.236" fill="white" stroke="#B0B0B0" strokeWidth="4" />
                        <rect id="Rectangle 7_3" x="832" y="328.236" width="110" height="63" transform="rotate(-90 832 328.236)" fill="#E1ECF9" />
                        <rect id="Rectangle 6_9" x="889" y="288.236" width="29" height="3" transform="rotate(-90 889 288.236)" fill="#003E86" />
                        </g>
                    </g>
                    <g id="bottom-cupboard-group-2_2">
                        <g id="cupboard-9" onClick={handleClick}>
                        <path id="Rectangle 3_14" d="M1058.65 325.38V173.907L999.95 206.674V337.063L1058.65 325.38Z" fill="white" stroke="#B0B0B0" strokeWidth="4" />
                        <path id="Rectangle 6_10" d="M1053 280.804V236L1050 238.196V283L1053 280.804Z" fill="#003E86" />
                        </g>
                        <g id="cupboard-10" onClick={handleClick}>
                        <path id="Rectangle 3_15" d="M1128 311.464V134.898L1062.65 171.177V324.58L1128 311.464Z" fill="white" stroke="#B0B0B0" strokeWidth="4" />
                        <path id="Rectangle 6_11" d="M1072 276.477V225L1069 227.523V279L1072 276.477Z" fill="#003E86" />
                        </g>
                    </g>
                </g>
                <g id="microscope" onClick={handleClick}>
                    <path id="Polygon 5" d="M747.374 504.544H810.579L816 514.886H741L747.374 504.544Z" fill="#BABABA" />
                    <rect id="Rectangle 39" x="775.789" y="476.809" width="29.8193" height="27.7349" fill="#666666" />
                    <rect id="Rectangle 40" x="750.488" y="473.988" width="55.1205" height="5.641" rx="2.8205" fill="#BABABA" />
                    <path id="Vector 4" d="M791.151 431.211C801.038 440.706 818.495 467.774 794.765 487.856" stroke="#666666" strokeWidth="17" />
                    <rect id="Rectangle 42" width="8.32044" height="6.43751" transform="matrix(0.643651 0.765319 -0.739443 0.673219 767.583 444.092)" fill="#666666" />
                    <rect id="Rectangle 44" width="12.077" height="6.34704" transform="matrix(0.668636 0.74359 -0.716566 0.697519 802.612 405.075)" fill="#666666" />
                    <rect id="Rectangle 43" width="21.9235" height="3.93877" transform="matrix(0.672208 0.740362 -0.713184 0.700977 801.045 399.715)" fill="#666666" />
                    <rect id="Rectangle 41" width="16.9623" height="49.8153" transform="matrix(0.695475 0.71855 -0.690422 0.723406 797.08 406.554)" fill="#BABABA" />
                </g>
                <g id="flask" onClick={handleClick}>
                    <g id="Circle Flask">
                        <ellipse id="Ellipse 8" cx="341.139" cy="485.613" rx="28.8612" ry="28.2508" fill="#D9D9D9" />
                        <rect id="Rectangle 19" x="329.483" y="426.594" width="22.756" height="43.0755" fill="#D9D9D9" />
                        <rect id="Rectangle 20_2" x="325.598" y="421" width="30.5263" height="7.27249" rx="3" fill="#D9D9D9" />
                        <rect id="Rectangle 19_2" x="332.813" y="452.887" width="16.0957" height="11.1884" fill="#FE9F9B" />
                        <path id="Ellipse 9" d="M363.895 485.893C363.895 499.178 353.582 509.948 340.861 509.948C328.14 509.948 317.828 499.178 317.828 485.893C317.828 472.608 328.14 461.838 340.861 461.838C353.582 461.838 363.895 472.608 363.895 485.893Z" fill="#FE9F9B" />
                        <ellipse id="Bubble14" cx="339.751" cy="464.355" rx="1.94258" ry="1.95798" fill="white" />
                        <ellipse id="Bubble13" cx="346.134" cy="480.858" rx="2.77512" ry="2.79711" fill="white" />
                        <ellipse id="Bubble12" cx="332.813" cy="493.165" rx="3.33014" ry="3.35653" fill="white" />
                        <ellipse id="Bubble11" cx="352.517" cy="500.158" rx="1.94258" ry="1.95798" fill="white" />
                    </g>
                    <g id="Triangle Flask">
                        <path id="Polygon 3" d="M295.693 451.907C297.998 447.883 303.801 447.883 306.106 451.907L336.371 504.742C338.662 508.742 335.774 513.724 331.164 513.724H270.635C266.025 513.724 263.137 508.742 265.428 504.742L295.693 451.907Z" fill="#D9D9D9" />
                        <path id="Polygon 4" d="M294.586 464.947C296.055 462.39 298.924 460.976 301.846 461.368V461.368C304.052 461.665 306 462.957 307.131 464.874L329.55 502.878C329.69 503.115 329.853 503.339 330.035 503.546V503.546C332.517 506.361 330.519 510.787 326.766 510.787H275.845C272.088 510.787 270.009 506.432 272.37 503.511V503.511C272.519 503.327 272.652 503.132 272.77 502.927L294.586 464.947Z" fill="#56B2DB" />
                        <rect id="Rectangle 16_2" x="289.522" y="424.357" width="22.756" height="43.0755" fill="#D9D9D9" />
                        <rect id="Rectangle 18_2" x="292.852" y="457.922" width="16.0957" height="11.1884" fill="#56B2DB" />
                        <rect id="Rectangle 17_2" x="285.636" y="421" width="30.5263" height="7.27249" rx="3" fill="#D9D9D9" />
                        <ellipse id="Bubble4" cx="291.464" cy="498.76" rx="3.60766" ry="3.35653" fill="white" />
                        <ellipse id="Bubble3" cx="307.282" cy="493.725" rx="2.77512" ry="2.79711" fill="white" />
                        <ellipse id="Bubble2" cx="316.718" cy="503.515" rx="2.2201" ry="1.95798" fill="white" />
                        <ellipse id="Bubble1" cx="298.679" cy="481.138" rx="1.94258" ry="1.95798" fill="white" />
                    </g>
                </g>
                <g id="box-1" onClick={handleClick}>
                    <g id="Group 18">
                        <path id="Rectangle 68" d="M707 619.479L875.634 619L898.839 640.54H730.623L707 619.479Z" fill="#2D2D2D" />
                        <rect id="Rectangle 69" x="731.126" y="640.061" width="167.874" height="69.8859" fill="#454545" />
                        <rect id="Rectangle 71" width="167.874" height="1.91468" transform="matrix(1 0 0 -1 731.126 653.464)" fill="#131313" />
                        <path id="Rectangle 70" d="M707 619L731.126 640.54V709.947L707 677.075V619Z" fill="#1F1F1F" />
                        <path id="Rectangle 72" d="M707 630.488L731.126 651.474V653.464L707 632.403V630.488Z" fill="#131313" />
                    </g>
                    <g id="Group 19">
                        <path id="Rectangle 68_2" d="M800.487 647.083L834.005 646.763L839.188 648.045H801.613L800.487 647.083Z" fill="#989898" />
                        <rect id="Rectangle 69_2" x="801.721" y="648.045" width="37.4676" height="15.5977" fill="#B1B1B1" />
                        <path id="Rectangle 70_2" d="M800.487 647.083L801.721 648.152V663.643L800.487 662.681V647.083Z" fill="#7A7A7A" />
                    </g>
                    <g id="Vector">
                        <path d="M808.529 650.26C808.529 649.386 809.283 648.678 810.213 648.678H830.97C831.9 648.678 832.654 649.386 832.654 650.26V660.498C832.654 661.372 831.9 662.08 830.97 662.08H810.213C809.283 662.08 808.529 661.372 808.529 660.498V650.26Z" fill="#B1B1B1" />
                        <path d="M812.006 652.558H815.267V658.2H812.006V652.558Z" fill="#D9D9D9" />
                        <path d="M816.652 652.558H819.912V658.2H816.652V652.558Z" fill="#D9D9D9" />
                        <path d="M821.298 652.558H824.558V658.2H821.298V652.558Z" fill="#D9D9D9" />
                        <path d="M825.944 652.558H829.204V658.2H825.944V652.558Z" fill="#D9D9D9" />
                        <path d="M813.902 654.503V656.285H813.672V654.729H813.661L813.198 655.018V654.799L813.672 654.503H813.902Z" fill="black" />
                        <path d="M817.691 656.285V656.129L818.317 655.485C818.39 655.409 818.451 655.344 818.498 655.288C818.546 655.232 818.581 655.179 818.604 655.129C818.627 655.08 818.639 655.027 818.639 654.973C818.639 654.91 818.623 654.856 818.591 654.81C818.56 654.764 818.516 654.729 818.461 654.704C818.406 654.679 818.345 654.666 818.276 654.666C818.203 654.666 818.14 654.681 818.085 654.709C818.032 654.737 817.99 654.776 817.96 654.827C817.931 654.877 817.917 654.936 817.917 655.004H817.698C817.698 654.9 817.724 654.808 817.775 654.729C817.826 654.65 817.896 654.589 817.984 654.545C818.073 654.501 818.173 654.478 818.284 654.478C818.395 654.478 818.493 654.501 818.579 654.545C818.665 654.589 818.732 654.648 818.781 654.723C818.83 654.798 818.854 654.881 818.854 654.973C818.854 655.038 818.841 655.102 818.816 655.165C818.791 655.227 818.748 655.297 818.686 655.373C818.625 655.449 818.54 655.542 818.432 655.652L818.006 656.08V656.094H818.887V656.285H817.691Z" fill="black" />
                        <path d="M822.978 656.31C822.855 656.31 822.746 656.29 822.651 656.25C822.555 656.211 822.48 656.156 822.424 656.086C822.368 656.015 822.338 655.933 822.333 655.84H822.566C822.571 655.897 822.592 655.947 822.629 655.988C822.666 656.03 822.715 656.062 822.775 656.084C822.835 656.107 822.901 656.118 822.974 656.118C823.055 656.118 823.128 656.105 823.191 656.078C823.254 656.051 823.303 656.014 823.339 655.967C823.375 655.919 823.392 655.864 823.392 655.801C823.392 655.736 823.375 655.678 823.341 655.628C823.306 655.578 823.255 655.538 823.189 655.51C823.122 655.481 823.04 655.467 822.944 655.467H822.792V655.276H822.944C823.019 655.276 823.086 655.263 823.142 655.237C823.2 655.212 823.245 655.176 823.277 655.129C823.309 655.083 823.326 655.029 823.326 654.966C823.326 654.906 823.312 654.853 823.283 654.808C823.255 654.764 823.215 654.729 823.163 654.704C823.111 654.679 823.051 654.666 822.981 654.666C822.916 654.666 822.854 654.678 822.796 654.7C822.739 654.722 822.692 654.755 822.655 654.797C822.619 654.839 822.599 654.889 822.596 654.948H822.374C822.377 654.855 822.407 654.773 822.463 654.703C822.52 654.632 822.593 654.577 822.684 654.538C822.775 654.498 822.876 654.478 822.985 654.478C823.102 654.478 823.203 654.501 823.287 654.545C823.371 654.59 823.435 654.648 823.48 654.72C823.526 654.793 823.548 654.871 823.548 654.955C823.548 655.056 823.52 655.141 823.464 655.212C823.408 655.283 823.333 655.332 823.237 655.359V655.373C823.357 655.392 823.45 655.44 823.517 655.517C823.585 655.593 823.618 655.688 823.618 655.801C823.618 655.898 823.59 655.985 823.534 656.062C823.479 656.139 823.403 656.199 823.306 656.243C823.21 656.288 823.1 656.31 822.978 656.31Z" fill="black" />
                        <path d="M826.911 655.92V655.742L827.744 654.503H827.881V654.778H827.789L827.159 655.714V655.728H828.282V655.92H826.911ZM827.804 656.285V654.503H828.022V656.285H827.804Z" fill="black" />
                    </g>
                </g>
                <g id="vent" onClick={handleClick}>
                    <rect id="Rectangle 89" x="305" y="259" width="121" height="69" fill="#454545" />
                    <rect id="Rectangle 90" x="308.3" y="268.093" width="114.4" height="54.0233" fill="#1F1F1F" />
                    <rect id="Rectangle 91" x="310.5" y="270.767" width="110" height="49.2093" fill="#454545" />
                    <rect id="Rectangle 92" x="312.7" y="276.116" width="2.13953" height="105.6" transform="rotate(-90 312.7 276.116)" fill="#1F1F1F" />
                    <rect id="Rectangle 93" x="312.7" y="282" width="2.13953" height="105.6" transform="rotate(-90 312.7 282)" fill="#1F1F1F" />
                    <rect id="Rectangle 94" x="312.7" y="287.884" width="2.13953" height="105.6" transform="rotate(-90 312.7 287.884)" fill="#1F1F1F" />
                    <rect id="Rectangle 95" x="312.7" y="293.767" width="2.13953" height="105.6" transform="rotate(-90 312.7 293.767)" fill="#1F1F1F" />
                    <rect id="Rectangle 96" x="312.7" y="299.651" width="2.13953" height="105.6" transform="rotate(-90 312.7 299.651)" fill="#1F1F1F" />
                    <rect id="Rectangle 97" x="312.7" y="305.535" width="2.13953" height="105.6" transform="rotate(-90 312.7 305.535)" fill="#1F1F1F" />
                    <rect id="Rectangle 98" x="312.7" y="311.419" width="2.13953" height="105.6" transform="rotate(-90 312.7 311.419)" fill="#1F1F1F" />
                    <rect id="Rectangle 99" x="312.7" y="317.302" width="2.13953" height="105.6" transform="rotate(-90 312.7 317.302)" fill="#1F1F1F" />
                </g>
                <g id="pc" onClick={handleClick}>
                    <g id="pc">
                        <rect id="Rectangle 114" x="601" y="398" width="59" height="117.793" fill="#202020" />
                        <rect id="Rectangle 115" x="620.046" y="398" width="39.9544" height="65.0035" fill="#323232" />
                        <ellipse id="Ellipse 27" cx="626.981" cy="404.211" rx="3.20877" ry="3.31228" fill="black" />
                        <circle id="Ellipse 28" cx="623.772" cy="412.077" r="1.03509" fill="black" />
                        <circle id="Ellipse 29" cx="627.498" cy="412.077" r="1.03509" fill="black" />
                        <circle id="Ellipse 30" cx="631.639" cy="412.077" r="1.03509" fill="black" />
                        <rect id="Rectangle 116" x="648.407" y="414.561" width="7.24561" height="2.48421" fill="#111111" />
                        <rect id="Rectangle 117" x="648.407" y="419.323" width="7.24561" height="2.48421" fill="#111111" />
                        <rect id="Rectangle 118" x="648.407" y="424.084" width="7.24561" height="2.48421" fill="#111111" />
                        <rect id="Rectangle 119" x="648.407" y="428.846" width="7.24561" height="2.48421" fill="#111111" />
                        <rect id="Rectangle 120" x="620.046" y="420.358" width="5.38246" height="42.6456" fill="#0E0E0E" />
                    </g>
                    <g id="monitor">
                        <rect id="Rectangle 121" x="492" y="505" width="54" height="9" fill="#202020" />
                        <rect id="Rectangle 123" x="514" y="512" width="26" height="10" transform="rotate(-90 514 512)" fill="#202020" />
                        <rect id="Rectangle 124" x="443" y="411" width="152" height="75.1314" fill="#202020" />
                        <rect id="Rectangle 125" x="446.474" y="412.737" width="145.486" height="71.2229" fill="#0B0B0B" />
                    </g>
                </g>
            </g>
            <g id="box-3" onClick={handleClick}>
                <path id="Rectangle 3_15" d="M1034 500L1072.5 513V543.5L1034 529V500Z" fill="#454545"/>
                <path id="Rectangle 5_5" d="M1058.5 496L1100 510.5L1072.5 513.5L1034 499.5L1058.5 496Z" fill="#0F0F0F"/>
                <path id="Rectangle 4_5" d="M1100 510.5L1072 513.261V543.5L1100 539.5V510.5Z" fill="#1D1D1D"/>
                <path id="Vector 47" d="M1034 506.5L1072 521L1100 519" stroke="black"/>
                <g id="Group 40">
                    <path id="Rectangle 3_16" d="M1045 508.121L1054.33 511.273V518.667L1045 515.152V508.121Z" fill="#989898"/>
                    <path id="Rectangle 5_6" d="M1047.5 508L1056.5 511.152L1054.33 511.394L1045 508H1047.5Z" fill="#B1B1B1"/>
                    <path id="Rectangle 4_6" d="M1056.5 511.152L1054.21 511.336V518.667L1056.5 518.152V511.152Z" fill="#7A7A7A"/>
                </g>
            </g>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_0_1" transform="matrix(0.00134295 0 0 0.0015625 -0.00629353 0)" />
                </pattern>
                <clipPath id="clip0_0_1">
                    <rect width="1249" height="812" fill="white" />
                </clipPath>
                
            </defs>
            </svg>




        </div>
    )
}

export default Main
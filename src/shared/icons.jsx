const SearchIcon = ({width,height,fill, currentStyle}) => {
    width = width || '24px';
    height = height || '24px';
    fill = fill || 'none';

    return(
        <svg className={currentStyle} width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path className="dark:stroke-gray-500" d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" fill="black" fillOpacity="0.16"/>
            <path className="dark:stroke-gray-500" d="M21 21L17 17M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const LogoIcon = ({width, height,fill, currentStyle}) => {
    width = width || '24px';
    height = height || '24px';
    fill = fill || 'none';

    return(
        <svg className={currentStyle} strokeWidth={width} height={height} viewBox="0 0 36 36" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path className="dark:stroke-[#141516]" d="M12.855 26.895C10.515 25.275 9 22.56 9 19.5C9 14.535 13.035 10.5 18 10.5C22.965 10.5 27 14.535 27 19.5C27 22.575 25.455 25.29 23.1 26.91" fill="black" fillOpacity="0.16"/>
            <path className="dark:stroke-white" d="M18 6V3M4.5 19.5H1.5M34.5 19.5H31.5M29.6673 7.83274L27.5459 9.95406M8.45402 9.95406L6.3327 7.83274M6 27H30M12 31.5H24M12.855 26.895C10.515 25.275 9 22.56 9 19.5C9 14.535 13.035 10.5 18 10.5C22.965 10.5 27 14.535 27 19.5C27 22.575 25.455 25.29 23.1 26.91L12.855 26.895Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
        </svg>
    )
}

const LeftArrow = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path className="dark:stroke-white"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 20-8-8 8-8"
      />
    </svg>
  )

const RightArrow = ({width,height,fill, currentStyle}) => {
    width = width || '24px';
    height = height || '24px';
    fill = fill || 'none'
    return(
        <svg className={currentStyle} width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path className="dark:stroke-white" d="M8 20L16 12L8 4" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const LinkUp = ({width, height, fill, currentStyle}) => {
    width = width || '24px';
    height = height || '24px';
    fill = fill || 'none';
    return(
        <svg className={currentStyle} width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path className="dark:stroke-white" d="M8 16L16 8M16 8L16 13M16 8L11 8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const LightMode = ({width, height, fill, currentStyle}) => {
    width = width || '24px';
    height = height || '24px';
    fill = fill || 'none';
    return(
        <svg className={currentStyle} width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="dark:stroke-white" fillRule="evenodd" clipRule="evenodd" d="M24 15C24.5523 15 25 15.4477 25 16V18C25 18.5523 24.5523 19 24 19C23.4477 19 23 18.5523 23 18V16C23 15.4477 23.4477 15 24 15ZM24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26ZM24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28ZM25 30C25 29.4477 24.5523 29 24 29C23.4477 29 23 29.4477 23 30V32C23 32.5523 23.4477 33 24 33C24.5523 33 25 32.5523 25 32V30ZM33 24C33 24.5523 32.5523 25 32 25H30C29.4477 25 29 24.5523 29 24C29 23.4477 29.4477 23 30 23H32C32.5523 23 33 23.4477 33 24ZM18 25C18.5523 25 19 24.5523 19 24C19 23.4477 18.5523 23 18 23H16C15.4477 23 15 23.4477 15 24C15 24.5523 15.4477 25 16 25H18ZM30.364 17.636C30.7545 18.0266 30.7545 18.6597 30.364 19.0503L28.9498 20.4645C28.5592 20.855 27.9261 20.855 27.5355 20.4645C27.145 20.0739 27.145 19.4408 27.5355 19.0503L28.9498 17.636C29.3403 17.2455 29.9734 17.2455 30.364 17.636ZM20.4645 28.9498C20.855 28.5592 20.855 27.9261 20.4645 27.5355C20.0739 27.145 19.4408 27.145 19.0502 27.5355L17.636 28.9498C17.2455 29.3403 17.2455 29.9734 17.636 30.364C18.0266 30.7545 18.6597 30.7545 19.0502 30.364L20.4645 28.9498ZM30.364 30.364C29.9734 30.7545 29.3403 30.7545 28.9498 30.364L27.5355 28.9498C27.145 28.5592 27.145 27.9261 27.5355 27.5355C27.9261 27.145 28.5592 27.145 28.9498 27.5355L30.364 28.9498C30.7545 29.3403 30.7545 29.9734 30.364 30.364ZM19.0502 20.4645C19.4408 20.855 20.0739 20.855 20.4645 20.4645C20.855 20.0739 20.855 19.4408 20.4645 19.0502L19.0502 17.636C18.6597 17.2455 18.0266 17.2455 17.636 17.636C17.2455 18.0266 17.2455 18.6597 17.636 19.0502L19.0502 20.4645Z" fill="#222222"/>
        </svg>

    )
}

const MenuIcon = ({width, height, fill, currentStyle}) => {
    width = width || '24px';
    height = height || '24px';
    fill = fill || 'none';
    return(
        <svg className={currentStyle} width={width} height={height} viewBox="0 0 40 40" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path className="dark:stroke-white dark:fill-white" d="M13.3333 11.6667C12.4129 11.6667 11.6667 12.4129 11.6667 13.3333C11.6667 14.2538 12.4129 15 13.3333 15H33.3333C34.2538 15 35 14.2538 35 13.3333C35 12.4129 34.2538 11.6667 33.3333 11.6667H13.3333Z" fill="black"/>
            <path className="dark:stroke-white dark:fill-white" d="M8.33333 20C8.33333 19.0795 9.07953 18.3333 10 18.3333H30C30.9205 18.3333 31.6667 19.0795 31.6667 20C31.6667 20.9205 30.9205 21.6667 30 21.6667H10C9.07953 21.6667 8.33333 20.9205 8.33333 20Z" fill="black"/>
            <path className="dark:stroke-white dark:fill-white" d="M5 26.6667C5 25.7462 5.74619 25 6.66667 25H26.6667C27.5871 25 28.3333 25.7462 28.3333 26.6667C28.3333 27.5871 27.5871 28.3333 26.6667 28.3333H6.66667C5.74619 28.3333 5 27.5871 5 26.6667Z" fill="black"/>
        </svg>

    )
}

const DarkMode = ({width, height, fill, currentStyle}) => {
    width = width || '24px';
    height = height || '24px';
    fill = fill || 'none';
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className={currentStyle} height={height} viewBox="0 -960 960 960" width={width} fill="#000">
            <path className="dark:stroke-black" d="M380-160q133 0 226.5-93.5T700-480q0-133-93.5-226.5T380-800h-21q-10 0-19 2 57 66 88.5 147.5T460-480q0 89-31.5 170.5T340-162q9 2 19 2h21Zm0 80q-53 0-103.5-13.5T180-134q93-54 146.5-146T380-480q0-108-53.5-200T180-826q46-27 96.5-40.5T380-880q83 0 156 31.5T663-763q54 54 85.5 127T780-480q0 83-31.5 156T663-197q-54 54-127 85.5T380-80Zm80-400Z"/>
        </svg>
    )
}










export {SearchIcon, LogoIcon, RightArrow, LeftArrow, LinkUp, DarkMode, LightMode, MenuIcon};
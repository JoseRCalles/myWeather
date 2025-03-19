import {SearchIcon, LogoIcon} from './icons.jsx';
import {Navigation} from './components/navigation.jsx';
import {navs} from './data.jsx';
import {DarkMode, MenuIcon} from '../shared/icons.jsx'
import { useState, useEffect, use } from 'react';


const SearchBar = ({placeholder}) => {
    return(
      <label htmlFor="username" className='py-1.5 w-4/6 border-1 border-[#e5e5e5] rounded-3xl shadow-2xs relative dark:bg-transparent dark:border-gray-500 dark:text-gray-200 min-w-36'>
        <SearchIcon width={'20px'} height={'20px'} currentStyle={'absolute right-3 top-2 dark:stroke-white'}/>
        <input type="text" id="username" placeholder={placeholder} className='peer placeholder-transparent bg-transparent w-4/5 h-full pl-5 outline-none'/>
          <span className='absolute left-3 -translate-y-5 dark:bg-[#141516] bg-white px-1.5 py-0 text-sm pointer-events-none transition-transform peer-placeholder-shown:translate-0 peer-focus:-translate-y-5'>{placeholder}</span>
      </label>
    )
}

const Logo = () => {
  return(
    <div className="flex justify-around items-center w-34 h-[50px]">
      <LogoIcon currentStyle={'dark:fill-gray-500'} className='absolute'/>
      <h6 className="font-lexend text-black dark:text-white">MyWeather</h6>
    </div>
  );
}



const MenuButton = () => {
  return(
    <button className='p-1 rounded-full bg-gray-100 dark:bg-[#282A2C] md:block lg:hidden xl:hidden'>
      <MenuIcon width={'30px'} height={'30px'}/>
    </button>
  )
}

const DarkModeButton = () => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    const dataDark = localStorage.getItem('colorScheme-data');
    if (dataDark === 'dark') {
      setDark(true);
      document.body.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('colorScheme-data', 'dark');
    } else {
      document.body.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('colorScheme-data', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setDark(!isDark);
  };

  return (
    <button
      className="rounded-full bg-black p-2 ml-2 dark:bg-gray-100 cursor-pointer"
      onClick={toggleTheme}
    >
      <DarkMode width={'20px'} height={'20px'} currentStyle={'fill-white dark:fill-black'}/>
    </button>
  );
};

  
const Header = ({pageName}) => {
return (
    <header className=" min-h-28 w-full flex items-center justify-evenly sm:pt-3 lg:pt-0 lg:justify-around">
      <MenuButton/>
      <Logo/>
      <Navigation links={navs} pageName={pageName}/>
      <div className="flex items-center w-1/5">
        <SearchBar placeholder={'Search'} className=''/>
        <DarkModeButton/>
      </div>
    </header>
)
}
  
export default Header;
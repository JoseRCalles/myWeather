import Home from './home/home.jsx';
import WeatherNews from './weatherNews/weatherNews';
import WikiWeather from './wikiWeather/wikiWeather';
import Profile from './profile/profile.jsx';
import {Routes, Route} from 'react-router';





const App = () => {
  return(
    <div className='w-full h-full font-lexend dark:bg-[#141516] dark:text-gray-200'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/weatherNews' element={<WeatherNews/>}/>
        <Route path='/wikiWeather' element={<WikiWeather/>} />
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}


export default App


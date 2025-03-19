import {LeftArrow, RightArrow, LinkUp} from '../shared/icons.jsx';
import {nanoid} from 'nanoid';
import { articles, stateWeather} from '../shared/data.jsx';
import Header from '../shared/header.jsx';
const pageName = 'Home'


const WeatherSelector = ({cityName}) => {
  return(
    <section className='w-3/5 p-3 rounded-sm flex items-center justify-between bg-blue-100 dark:bg-blue-950 dark:text-gray-200 min-w-92'>
      <LeftArrow width={'20px'} height={'20px'} currentStyle={'cursor-pointer'}/>
      <h6 className='<div className="text-black text-[16px] font-medium'>{cityName}</h6>
      <RightArrow width={'20px'} height={'20px'} currentStyle={'cursor-pointer'}/>
    </section>
  )
}

const WeatherContainer = ({stateWeather}) => {
  return(
    <section className='w-6/8 h-72 rounded-sm bg-green-100 dark:bg-green-950 dark:text-gray-200 mt-6 p-4 min-w-92'>
      <header className='flex justify-between'>
        <div className='text-xs font-normal flex-col h-12 justify-around items-center'>
            <p className='mb-1'>
              Humidity:
              <b className='font-medium'> {stateWeather.humidity}</b>
            </p>

            <p>
              Wind Velocity:
              <b className='font-medium'> {stateWeather.windVelocity}</b>
            </p>
        </div>

        <div>
          <ul className='text-xs'>
            <li>Thermal Sensation: <b className='font-medium'>{stateWeather.degrees}</b></li>
          </ul>
        </div>
      </header>

      <div className='flex justify-between items-center'>
        <LeftArrow currentStyle={'cursor-pointer dark:stroke-white'}/>
        <div className='flex flex-col items-center pt-4'>
          <img src={stateWeather.iconWeather} alt={stateWeather.titleWeather} />
          <h5>{stateWeather.titleWeather}</h5>
          <p className='font-medium'>{stateWeather.degrees}</p>
        </div>
        <RightArrow currentStyle={'cursor-pointer'}/>
      </div>
    </section>
  )
}

const NewCard = ({img,title,content}) => {
  const altName = img.match(/([^/]+)\.png$/)[1];
  return(
    <section className='flex border-1 w-92 py-2 px-2.5 rounded-lg shadow-sm relative cursor-pointer hover:bg-gray-50 
    dark:border-gray-700 dark:text-gray-200 dark:bg-[#282A2C] dark:hover:bg-gray-700
    '>
      <img className='w-24 h-24 rounded-xl' src={img}/>
      <div className='flex flex-col pl-4 p-0 '>
        <h6 className='text-[13.3px] font-medium'>{title}</h6>
        <p className='text-xs pt-1 w-52'>{content}</p>
        <LinkUp currentStyle={'absolute right-0.5 bottom-0.5 dark:fill-white'}/>
      </div>
    </section>
  )
}

const NewsContainer = ({titleArticle}) => {
    return(
      <article className='flex flex-col justify-around w-full h-full pt-6 sm:pt-6 min-w-full'>
        <div className='h-1/6 flex'>
          <h6 className='font-medium dark:text-gray-200 sm:text-left sm:p-0 sm:h-0 lg:text-lg'>{titleArticle}</h6>
        </div>
        <div className="flex flex-col justify-between w-full h-5/6">
          <ul className='flex items-center justify-around flex-col h-full w-full'>
            {articles.map(article => {
              return(
              <li key={nanoid()} ><NewCard img={article.img} title={article.title} content={article.content}/></li>
              )
              })
            }
          </ul>
        </div>
      </article>
    )
}


const Main = () => {
  return(
    <main className='w-full h-screen flex justify-center mx-auto flex-col items-center sm:flex-col lg:flex-row
     lg:w-4/5 lg:h-4/7'>
        <div className='lg:w-4/5 pt-8'>
          <WeatherSelector cityName={'Sansburg'}/>
          <WeatherContainer stateWeather={stateWeather} 
          />
        </div>

        <div className='lg:h-6/7 h-screen pb-5'>
          <NewsContainer titleArticle={'Recent News'}/>
        </div>
    </main>
  )
}


const Home = () => {
  return (
    <div className="w-sreen h-screen flex flex-col overflow-auto scroll-smooth dark:bg-[#141516] dark:text-gray-200">
      <Header pageName={pageName}/>
      <Main/>
    </div>
  )
}


export default Home
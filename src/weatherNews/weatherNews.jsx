import Header from '../shared/header.jsx';
import {dataTrendingNews, dataLastNews} from './assets/data.jsx';
import { LeftArrow, RightArrow } from '../shared/icons.jsx';

const TrendingNew = ({bg, title, description}) => {
    return(
        <div className="bg-black w-full h-full z-1">
            <div className="w-full h-full bg-no-repeat overflow-hidden m-0 bg-cover bg-center bg-filter" style={{backgroundImage: `url(${bg})`}}>
                <div className='h-full w-full flex flex-col justify-center text-left box-border px-4 brightness-100'>
                    <h6 className=''>
                        {title}
                    </h6>
                    <p className='text-xs'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

const TrendingNews = ({sectionTitle, data}) => {

    return(
        <section className='w-full h-1/3 flex flex-col items-start self-start'>
            <div className='w-1/5 text-center'>
                <h5>{sectionTitle}</h5>
            </div>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='w-full h-6/7 flex justify-center items-center'>
                    <LeftArrow />
                    <div className='w-7/8 h-full grid gap-0 grid-cols-3 box-border px-5'>
                        {
                            data.map((val) => (
                                <TrendingNew bg={val.img} title={val.title} description={val.description} key={val.title}/>
                            ))
                        }
                    </div>
                    <RightArrow/>
                </div>
            </div>
        </section>
    )
}


const LastNew = ({img,title,description}) => {

    return(
        <div className="w-2/3">

            <img src={img} alt={title} />
            <h6>
                {title}
            </h6>
            <p>
                {description}
            </p>
        </div>
    )
}


const  LastNews = ({sectionTitle, data}) => {
    return(
        <section className='w-full flex flex-col'>
            <div>
                <h6>{sectionTitle}</h6>
            </div>

            <div className='flex'>
                {
                    data.map((val) => (
                        <LastNew img={val.img} title={val.title} description={val.description}/>
                    ))
                }
            </div>
        </section>
    )
}



const WeatherNews = () => {
    return(
        <div className='h-screen w-screen flex flex-col items-center justify-around dark:bg-[#141516] dark:text-gray-200 overflow-auto'>
            <Header/>
            <TrendingNews sectionTitle={'Trending News'} data={dataTrendingNews}/>
            <LastNews sectionTitle={'Last News'} data={dataLastNews}/>
        </div>
    )
}

export default WeatherNews;
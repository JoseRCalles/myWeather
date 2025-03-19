import React, { useState, useMemo } from 'react';
import nations from './assets/data.jsx';
import Header from '../shared/header.jsx';
import { LinkUp } from '../shared/icons.jsx';
import SelectFilter from '../shared/components/selectFilter.jsx'
const pageName = 'wikiWeather';

const DataHeader = ({ title }) => {
    const options = {
        weather: ['all', 'winter', 'fall', 'summer', 'spring'],
        continent: ['all', 'oceania', 'asia', 'europe', 'north America', 'America'],
    };

    const [weatherFilter, setWeatherFilter] = useState('all');
    const [continentFilter, setContinentFilter] = useState('all');

    const filteredNations = useMemo(() => {
        let result = nations;
        if (weatherFilter !== 'all') {
            result = result.filter((nation) => nation.tags.includes(weatherFilter));
        }
        if (continentFilter !== 'all') {
            result = result.filter((nation) => nation.tags.includes(continentFilter));
        }
        return result;
    }, [weatherFilter, continentFilter, nations]);

    return (
        <header className="w-full h-full flex flex-col justify-between mt-4">
            <div className="flex justify-around w-full">
                <h6 className="text-xl">{title}</h6>
                <div className='w-1/4 flex justify-around'>
                    <SelectFilter title={'Weather'} dataSelect={options.weather} filter={weatherFilter} setFilter={setWeatherFilter} />
                    <SelectFilter title={'Continent'} dataSelect={options.continent} filter={continentFilter} setFilter={setContinentFilter} />
                </div>
            </div>
            <NationsContainer nations={filteredNations} />
        </header>
    );
};



const Nation = ({ img, title, content, tags }) => {
    return (
        <div className="w-72 h-61 dark:bg-[#282A2C] border border-gray-500 rounded-sm p-4 cursor-pointer dark:hover:bg-gray-800">
            <img src={img} alt={title} />
            <div className="pt-2">
                <h6 className="">{title}</h6>
                <p className="text-xs">{content}</p>
            </div>
            <div className="border-t border-t-gray-500 mt-9 flex items-center justify-between pt-2 w-full">
                <div className="w-1/2 flex justify-around">
                    {tags.map((element) => (
                        <p className="text-xs" key={element}>
                            {element}
                        </p>
                    ))}
                </div>
                <LinkUp />
            </div>
        </div>
    );
};

const NationsContainer = ({ nations }) => {
    return (
        <section className="flex w-full h-full justify-center mt-4">
            <div className="grid grid-cols-2 gap-11 justify-items-center items-center md:grid-cols-2 md:gap-x-24 md:gap-y-2 lg:grid-cols-3">
                {nations.length === 0 ? (
                    <p>No hay datos para mostrar</p>
                ) : (
                    nations.map((element) => (
                        <Nation
                            key={element.title}
                            title={element.title}
                            img={element.img}
                            content={element.content}
                            tags={element.tags}
                        />
                    ))
                )}
            </div>
        </section>
    );
};

const WikiWeather = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-around dark:bg-[#141516] dark:text-gray-200 overflow-auto">
            <Header pageName={pageName}/>
            <DataHeader title={'WikiNations'} />
        </div>
    );
};

export default WikiWeather;
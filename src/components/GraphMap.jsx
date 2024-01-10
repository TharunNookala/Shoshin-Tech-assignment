import React from 'react';
import BerlinMap from '../assets/BerlinMap.webp'
import snow from '../assets/snow.png'
import cloudy from '../assets/cloudy.png'
import clearsky from '../assets/clear-sky.png'
import sunrise from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'
import { dateConverter } from '../utils/dateConverter';

const GraphMap = ({data}) => {
    function weatherCodeConverter(code){
        if([77, 71, 73, 75, 85, 86].includes(code)) return <img src={snow} alt={snow} width={50} height={50}/>;
        if([1, 2, 3].includes(code)) return <img src={cloudy} alt={cloudy} width={50} height={50}/>;
        if([0].includes(code)) return <img src={clearsky} alt={clearsky} width={50} height={50}/>;  
        else return <img src={cloudy} alt={cloudy} width={50} height={50}/>;;
    }
  return (
    <div className='flex flex-col sm:flex-row items-start justify-between sm:px-10 '>
        <div className='flex  flex-col items-center justify-around w-full h-full sm:w-4/5 p-2'>
           <div className='flex flex-col justify-around w-full'>
                <h2 className='text-lg font-medium'>DAILY FORECAST</h2>
                    <div className='w-full flex justify-between items-center gap-5 sm:gap-2 border-t-2 border-yellow-600 pt-2'>
                        {data.daily.sunrise.map((value, index)=>{
                            return (
                                <div className='flex flex-col gap-4 items-center'>
                                    <p key={index} className='text-lg font-medium text-center'>{dateConverter(value).split(',')[1]}</p>
                                    <div className="">
                                        {weatherCodeConverter(data.daily.weathercode[index])}
                                    </div>
                                </div>
                                    )
                        })}
                    </div>
           </div>
            <div className='flex justify-center sm:justify-evenly items-center gap-4 w-full sm:w-1/5 bg-black sm:bg-transparent'>
            <div>
                <p className='text-lg font-medium'>{dateConverter(data.daily.sunrise[0]).split(',')[3]}</p>
                <img src={sunrise} alt={sunrise} width={90} height={90}/>
            </div>
            <div>
                <p className='text-lg font-medium'>{dateConverter(data.daily.sunset[0]).split(',')[3]}</p>
                <img src={sunset} alt={sunset} width={90} height={90}/>
            </div>
        </div>
        </div>

        <div className='flex items-center justify-center opacity-50 '>
            <img src={BerlinMap} alt='map' className='rounded-lg' />
        </div>
    </div>
  )
}

export default GraphMap
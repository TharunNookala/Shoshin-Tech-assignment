import React, { useEffect, useState } from 'react'
import CurrentTempDate from './CurrentTempDate';
import LatLong from './LatLong';
import MaxMinTemp from './MaxMinTemp';
import GraphMap from './GraphMap';
const AppLayout = () => {
    const [data, setData] = useState();
    useEffect(()=>{
        const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_days=3";
        async function fetchData(){
            const apiData = await fetch(API_URL);
            const response = await apiData.json();
            setData(response)
        }
        fetchData()
        
    },[])
    if(!data) return <h1>Loading</h1>
  return (
    <div className="w-full h-full flex flex-col gap-5 hero-pattern text-white border-2 ">
        <div className='flex flex-col sm:flex-row items-center justify-evenly gap-2 z-30 '>
            <CurrentTempDate currentTempDate={data.current} />
            <MaxMinTemp data={data} />
            <LatLong latLongData={data}/>
        </div>
        
        <GraphMap data={data}/>
        
    </div>
)}
export default AppLayout
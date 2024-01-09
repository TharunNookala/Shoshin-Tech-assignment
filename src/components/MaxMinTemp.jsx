import React from 'react'

const MaxMinTemp = ({data}) => {
  return (
    <div className='w-56 h-36 z-30 rounded-md border-gray-500 p-2 flex flex-col items-center justify-evenly shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
        <div className=' flex items-center justify-center'> 
            <h2 className='text-4xl font-bold'>{data.current.temperature_2m} °C</h2> 
        </div>
        <div className='p-2 flex justify-between items-center gap-4'>
             <p className='text-lg'>Min : <span className='text-2xl'>{data.daily.temperature_2m_min[0]}</span></p>
             <p className='text-lg'>Max : <span className='text-2xl'>{data.daily.temperature_2m_max[0]}</span></p>
        </div>
    </div>
  )
}

export default MaxMinTemp
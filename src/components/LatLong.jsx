import React from 'react'

const LatLong = ({latLongData}) => {
  return (
    <div className='sm:w-[30%] min-h-[144px]  rounded-md flex justify-center flex-col gap-5 mt-2 p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <div className='flex flex-col items-center justify-center'>
            <h2>Timezone : <span className='text-xl sm:text-3xl font-semibold sm:font-bold'>{latLongData.timezone_abbreviation}</span></h2>
            <h2 className='text-2xl bg-blue-700 text-white rounded-md p-2 mt-2 font-extrabold'>{latLongData.timezone}</h2>
        </div>
        <div className='flex items-center justify-between gap-4 sm:gap-0 sm:justify-around px-4'>
            <h2>latitude : <span className='text-xl font-medium sm:font-semibold italic'>{latLongData.latitude}</span></h2>
            <h2>longitude :<span className='text-xl font-medium sm:font-semibold italic'>{latLongData.longitude}</span></h2>
        </div>
    </div>
  )
}

export default LatLong
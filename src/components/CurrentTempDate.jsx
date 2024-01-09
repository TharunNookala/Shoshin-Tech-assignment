import React, { useEffect, useState } from 'react';
import { dateConverter } from '../utils/dateConverter';

const CurrentTempDate = ({ currentTempDate }) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const convertedDate = dateConverter(currentTempDate.time);
    setFormattedDate(convertedDate);
  }, [currentTempDate]);

  return (
    <div className='h-36 z-30 rounded-md border-gray-500 p-2 flex flex-col items-center justify-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
      <h2 className='text-xl md:text-2xl font-semibold sm:font-bold'>{formattedDate.split(',').slice(0,3)}</h2>
      <h2 className='text-2xl md:text-3xl font-medium sm:font-extrabold'>{formattedDate.split(',').splice(3)}</h2>
    </div>
  );
};

export default CurrentTempDate;

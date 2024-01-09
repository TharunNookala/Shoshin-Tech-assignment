import React, { useState } from 'react'

const Header = () => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  const msg = `Sorry! Can't search for this location ${search}`;
  alert(msg)
  setSearch("");
  }
  return (
    <header className='w-full flex flex-col justify-between gap-2 bg-black text-white px-2 sm:px-4 lg:px-10 py-4 '>
      <div className='flex justify-between gap-1 items-center'>
        <h2 className='text-sm font-semibold sm:text-xl sm:font-extrabold flex justify-center'>Weather-2-Day<span className='rotate text-xl'>🔆</span></h2>
        <form onSubmit={handleSubmit} className=''>
        <input 
        type='search'
        placeholder='Search city...'
        className='border-2 p-1 sm:p-2 rounded-md text-black focus:outline-none'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        </form>
        <ul className='hidden sm:flex items-center gap-4 text-lg font- font-semibold'>
            <li><button className='rounded px-2 bg-gray-400'>News</button></li>
            <li><button className='rounded px-2 bg-gray-400'>Videos</button></li>
            <li><button className='rounded px-2 bg-red-500'>Helpline</button></li>
        </ul>
        </div>

        <div className='flex items-center justify-center'>
        <ul className='sm:hidden flex items-center gap-4 text-lg font- font-semibold'>
            <li><button className='rounded px-2 bg-gray-400'>News</button></li>
            <li><button className='rounded px-2 bg-gray-400'>Videos</button></li>
            <li><button className='rounded px-2 bg-red-500'>Helpline</button></li>
        </ul>
        </div>
    </header>
  )
}

export default Header
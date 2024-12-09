import { GripHorizontal, SlidersHorizontal, StretchHorizontal } from 'lucide-react'
import React from 'react'

const Filter = () => {
  return (
    <div className='md:w-[1440px] w-[100vw] h-fit py-4 md:py-1 md:h-[100px] bg-[#F9F1E7] flex flex-col md:flex-row gap-4 md:gap-1 justify-between px-4 md:px-32 items-center'>
        <div className='flex gap-3 items-center'>
        <SlidersHorizontal strokeWidth={1.25} />
        <div className='md:text-[20px] text-[12px] font-semibold'>Filter</div>
        <GripHorizontal color="#000000" strokeWidth={2.75} />
        <StretchHorizontal strokeWidth={1} />
        <div>|</div>
        <div className='md:text-[18px] text-[11px]'>Showing 1&ndash;16 of 32 results</div>
        </div>
        <div className='flex gap-3 items-center'>
            <div className='md:text-[20px] text-[12px]'>show</div>
            <div className='md:w-[55px] w-[25px] md:h-[55px] h-[30px] bg-white flex justify-center items-center text-gray-500 md:text-[18px] text-[11px]'>16</div>
            <div className='md:text-[20px] text-[12px]'>Sort by</div>
            <div className='md:w-[188px] w-[100px] md:h-[55px] h-[30px] bg-white flex justify-center items-center text-gray-500 md:text-[18px] text-[11px]'>default</div>

        </div>
    </div>
  )
}

export default Filter
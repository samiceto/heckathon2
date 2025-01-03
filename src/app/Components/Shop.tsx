import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const Shop = (props:any) => {
  return (
    <div className='md:w-[1440px] md:h-[316px] w-[100vw] h-[40vw] relative'>
    <Image src="/shop.png" alt="" width={1440} height={316} className='md:w-[1440px] md:h-[316px] w-[100vw] h-[40vw]'></Image>
    <div className='absolute md:top-[100px] top-[4vw] left-[28%] flex flex-col justify-center items-center md:w-[500px] w-[50vw]'>
    <Image src="/logo.png" alt="" width={77} height={77} className={`md:w-[77px] w-[25px] ${props.shop.disp}`}></Image>
    <h1 className='md:text-[48px] text-[18px] font-medium'>{props.shop.heading}</h1>
    <div className='flex gap-2'>
     <div className='md:text-[16px] text-[11px] font-medium'>{props.shop.first}</div> 
     <div><ChevronRight color="#000000" strokeWidth={2.25} className='w-[15px] md:w-[20px]'/></div> 
    <div className='md:text-[16px] text-[11px]'>{props.shop.second}</div>  
    </div>
    </div>

    </div>
  )
}

export default Shop
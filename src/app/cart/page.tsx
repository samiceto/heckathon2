import React from 'react'
import Image from 'next/image'
import { ArchiveX } from 'lucide-react'
import Icon from '../Components/Icon'
import Shop from '../Components/Shop'

const page = () => {

      let shop={
        heading:'cart',
        first:'Home',
        second:'cart',
        disp:"block"
      }
  return (
    <div>
         <Shop shop={shop}/>
    <div className='md:w-[1440px] md:h-[525px] w-[100vw] h-fit flex flex-col md:flex-row items-center justify-center my-6 md:my-1'>
        <div className='flex flex-col md:flex-row gap-10 '>
            <div className='flex flex-col gap-8'>
                <div className='md:w-[817px] w-[90vw] h-[55px] bg-[#F9F1E7] text-[16px] font-medium flex justify-evenly items-center'>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Subtotal</div>
                </div>
                <div className='md:w-[817px] w-[90vw] h-[105px] flex items-center justify-between'>
                <Image src="/img2.png" alt="" width={150} height={150} className='md:w-[105px] w-[80px] rounded-lg'></Image>
                <p className='text-gray-500 text-[16px]'>Rs. 250,000.00</p>
                <button className='py-2 px-2 rounded-lg border-2 border-black md:w-[50px] md:h-[50px] w-[40px] h-[40px]'>1</button>
                <p className=' text-[16px]'>Rs. 250,000.00</p>
                <ArchiveX size={20} color="#ce870d" />
                </div>
            </div>
            <div className='w-[393px] h-[390px] bg-[#F9F1E7] flex justify-center flex-col items-center gap-6'>
                <h1 className='text-[32px] font-semibold'>Cart Totals</h1>
                <div className='flex gap-5'>
                    <h1 className='text-[16px] font-medium'>Subtotal</h1>
                    <p className='text-gray-500'>Rs. 250,000.00</p>
                </div>
                <div className='flex gap-5'>
                    <h1 className='text-[16px] font-medium'>Total</h1>
                    <p className='text-[#B88E2F] text-[20px]'>Rs. 250,000.00</p>
                </div>
                <button className='py-2 px-7 rounded-lg border-2 border-black'>Check Out</button>


            </div>
        </div>
    </div>
    <Icon />
    </div>
  )
}

export default page
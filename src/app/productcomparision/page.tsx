import React from 'react'
import Shop from '../Components/Shop'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const page = () => {
      let shop={
    heading:'Product comparison',
    first:'Home',
    second:'comparison',
    disp:"block"
  }
  return (
    <div> <Shop shop={shop}/>
    <div className='md:w-[1440px] w-[100vw] md:h-[384px] h-fit flex flex-col md:flex-row items-center justify-between px-12 my-11 md:my-1 gap-6 md:gap-1'>
        <div className="w-[223px] text-center">
            <h1 className='text-[28px] font-medium'>Go to Product page for more 
            Products</h1>
            <Link href="/" className='underline underline-offset-2 text-gray-500'>View More</Link>
        </div>
        <div className='text-center'>
        <Image src="/p3.png" alt="" width={280} height={177} className='w-[280px] h-[177px] rounded-md'></Image>
<h1 className='text-[24px] font-medium'>Asgaard Sofa</h1>
<p className='text-[18px] font-medium'>Rs. 250,000.00</p>
<div className='flex gap-2 text-center justify-center'>
<Image src="/Four-Half.png" alt="" width={180} height={177} className='w-[124px] '></Image>
    <p className='text-gray-500 text-[10px]'>204 Review</p>
</div>
        </div>
        <div className='text-center'>
        <Image src="/p3.png" alt="" width={280} height={177} className='w-[280px] h-[177px] rounded-md'></Image>
<h1 className='text-[24px] font-medium'>Asgaard Sofa</h1>
<p className='text-[18px] font-medium'>Rs. 250,000.00</p>
<div className='flex gap-2 justify-center'>
<Image src="/Four-Half.png" alt="" width={180} height={177} className='w-[124px] '></Image>
    <p className='text-gray-500 text-[10px]'>204 Review</p>
</div>

   </div>
        <div className="w-[223px]">
            <h1 className='text-[28px] font-medium'>Add A Product</h1>
           <button className='py-2 px-5 bg-[#B88E2F] text-white rounded-lg flex'>Choose a product <ChevronDown size={20} color="#ffffff" className='ml-4' /></button>
        </div>
        <div></div>
        <div></div>
    </div>
    


    <div className='md:w-[1440px] w-[90vw] px-11'>
        <hr />
    <div className="flex space-x-2 ">
      <div className="flex-1 px-2 md:px-4 py-2 hidden border-l border-gray-400 md:flex flex-col gap-8 mx-auto">
<div className='text-[20px] font-medium'>General</div>
<div>Sales Package<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number <br /></div>

<div className='text-[20px] font-medium'>Product </div>
<div>Sales Package<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number <br /></div>


<div className='text-[20px] font-medium'>Dimensions</div>
<div>Sales Package<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number <br /></div>



<div className='text-[20px] font-medium'>Warranty</div>
<div>Sales Package<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number<br /></div>
<div>Model Number <br /></div>


      </div>
      <div className="flex-1 px-2 md:px-4 py-2 border-l border-gray-400 flex flex-col gap-8">

      <div>SL shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>ML shaped fabric<br /></div>
<br />
<br />
<br /> <div>SL shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>ML shaped fabric<br /></div>
<br />
<br />
<br /> <div>SL shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>ML shaped fabric<br /></div>
<br />
<br />
<br /> <div>SL The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.<br /></div>
<div>L The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.<br /></div>
<div>ML The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.<br />
<button className='py-2 px-3 bg-[#B88E2F] text-[12px] text-white flex w-[100px]'>Add to Cart </button>

</div>

      </div>
      <div className="flex-1 px-2 md:px-4   py-2 border-l border-gray-400 flex flex-col gap-8">

      <br />
<br />
<br /> <div>SL shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>ML shaped fabric<br /></div>
<br />
<br />
<br /> <div>SL shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>ML shaped fabric<br /></div>
<br />
<br />
<br /> <div>SL The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L shaped fabric<br /></div>
<div>L The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.<br /></div>
<div>L The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.<br /></div>
<div>ML The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.<br />

<button className='py-2 px-3 bg-[#B88E2F] text-[12px] text-white flex w-[100px]'>Add to Cart </button>

</div>
      </div>
      <div className="flex-1 px-4 md:px-4 hidden md:flex py-2 border-l border-gray-400"></div>
    </div>
    </div>
    
    </div>
  )
}

export default page
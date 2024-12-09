import React from 'react'
import Image from 'next/image'
import { Facebook, Linkedin, Twitter } from 'lucide-react'

const Productpage1 = () => {
  return (
    <div className='md:w-[1440px] md:h-[800px] w-[100vw] h-fit flex flex-col md:flex-row md:gap-20'>
        <div className='flex md:gap-8 gap-4 md:w-[553px] w-[90vw] mx-auto md:mx-0 my-8 md:my-1'>
            <div className='flex flex-col gap-6'>
            <Image src="/im1.png" alt="" width={76} height={80} className='md:w-[76px] md:h-[80px] w-[50px] h-[60px]'></Image>
            <Image src="/img2.png" alt="" width={76} height={80} className='md:w-[76px] md:h-[80px] w-[50px] h-[60px]'></Image>
            <Image src="/img3.png" alt="" width={76} height={80} className='md:w-[76px] md:h-[80px] w-[50px] h-[60px]'></Image>
            <Image src="/img4.png" alt="" width={76} height={80} className='md:w-[76px] md:h-[80px] w-[50px] h-[60px]'></Image>
            </div>
            <div className='md:w-[423px] md:h-[500px] w-[323px] h-[350px] bg-[#F9F1E7] flex md:justify-center items-center'>
            <Image src="/imgmain.png" alt="" width={481} height={391} className='md:w-[481px] md:h-[391px] w-[300px] h-[220px]'></Image>
            </div>
        </div>
        <div className='md:w-[424px] w-[90vw] mx-auto md:mx-0'>
            <div className='flex flex-col gap-3 text-center md:text-start'>
                <h1 className='text-[42px]'>Asgaard sofa</h1>
                <p className='text-gray-500'>Rs. 250,000.00</p>
                <div className='flex gap-3 justify-center items-center md:justify-start'>
                    <div>
                    <Image src="/Four-Half.png" alt="" width={124} height={24} className='w-[124px] '></Image>
                    </div>
                    <div>|</div>
                    <div className='text-[10px] text-gray-500'>5 Customer Review</div>
                </div>
                <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
            </div>
            <div className='flex flex-col gap-3'>
            <div className='text-gray-500'>Size</div>
            <div className='flex gap-4'>
                <div className='w-[30px] h-[30px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white flex justify-center items-center'>L</div>
                <div className='w-[30px] h-[30px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white flex justify-center items-center'>XL</div>
                <div className='w-[30px] h-[30px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white flex justify-center items-center'>XS</div>

            </div>
            <div className='text-gray-500'>Color</div>
            <div className='flex gap-4'>
                <div className='w-[30px] h-[30px] rounded-full bg-[#816DFA]'></div>
                <div className='w-[30px] h-[30px] rounded-full bg-black'></div>
                <div className='w-[30px] h-[30px] rounded-full bg-[#B88E2F]'></div>
            </div>
            </div>
            <div className='flex gap-3 my-3'>
                <div className='md:py-3 md:px-7 py-2 px-4 flex justify-center items-center border rounded-md'>-  1  +</div>
                <div className='md:py-3 md:px-7 py-2 px-4 flex justify-center items-center border rounded-md'>Add To Cart</div>
                <div className='md:py-3 md:px-7 py-2 px-4 flex justify-center items-center border rounded-md'>+ Compare</div>
            </div>
            <div><hr /></div>
            <div className='flex flex-col gap-4 my-4 tex-[10px]'>
                <div className='text-gray-500 flex gap-4'>
                    <div>SKU</div>
                    <div>:</div>
                    <div>SSOO1</div>
                </div>
                <div className='text-gray-500 flex gap-4'>
                    <div>Catagory</div>
                    <div>:</div>
                    <div>Sofas</div>
                </div>
                <div className='text-gray-500 flex gap-4'>
                    <div>Tags</div>
                    <div>:</div>
                    <div>Sofa, Chair, Home, Shop</div>
                </div>
                <div className='flex gap-4 text-gray-500 '>
                    <div>Share</div>
                    <div>:</div>
                    <div className='flex gap-2'>
                    <Facebook size={20} strokeWidth={1.5} />
                    <Linkedin size={20} />
                    <Twitter size={20} />
                    </div>
                </div>
                <div></div>
            </div>

        </div>
    </div>
  )
}

export default Productpage1
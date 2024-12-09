import { ChevronRight } from 'lucide-react'
import React from 'react'
import Productpage1 from '../Components/Productpage'
import Discription from '../Components/Discription'
import Products from '../Components/Products'
const page = () => {
  let product=[
    {
      img:'/p1.png',
      title:'Syltherine',
      des:'Stylish cafe chair',
      price:'Rp 2.500.000',
      sale:'Rp 3.500.000',
      off:'-30%',
      disp1:'hidden',
      disp2:'hidden',
      disp3:'block'
    },
    {
      img:'/p2.png',
      title:'Levoisa',
      des:'Stylish cafe chair',
      price:'Rp 2.500.000',
      sale:'Rp 3.500.000',
      off:'-30%',
      disp1:'hidden',
      disp2:'block',
      disp3:'block'
    },
    {
      img:'/p3.png',
      title:'Lolito',
      des:'Luxury big sofa',
      price:'Rp 7.000.000',
      sale:'Rp 14.000.000',
      off:'-50%',
      disp1:'block',
      disp2:'hidden',
      disp3:'hidden'
    },
    {
      img:'/p4.png',
      title:'Respira',
      des:'Outdoor bar table and stool',
      price:'Rp 500.000',
      sale:'Rp 3.500.000',
      off:'-30%',
      disp1:'block',
      disp2:'hidden',
      disp3:'hidden'
    }
  ]
  return (
    <div className='md:w-[1440px] w-[100vw]'>
         <div className='md:w-[1440px] w-[100vw] md:h-[100px] h-fit bg-[#F9F1E7] flex  md:px-32 items-center'>
        <div className='flex gap-3 items-center'>
      <div className='text-gray-500'>Home</div>
      <div><ChevronRight size={48} color="#000000" strokeWidth={1.5} className='w-[20px]'/></div>
      <div className='text-gray-500'>Shop</div>
      <div><ChevronRight size={48} color="#000000" strokeWidth={1.5} className='w-[20px]'/></div>
      <div>|</div>
      <div>Asgard sofa</div>
        </div>
    </div>
    <div className='mt-7 md:mx-32'><Productpage1 /></div>
    <hr />
    <Discription />
    <div className='text-[24px] font-bold mx-auto w-fit'>Related Products</div>
    <Products product={product}/>

    </div>
  )
}

export default page
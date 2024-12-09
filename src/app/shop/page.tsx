import React from 'react'
import Shop from '../Components/Shop'
import Filter from '../Components/Filter'
import Icon from '../Components/Icon'
import Products from '../Components/Products'

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  

const page = () => {
    let shop={
        heading:'shop',
        first:'Home',
        second:'cart',
        disp:"block"
      }
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
        },
        {
          img:'/p5.png',
          title:'Syltherine',
          des:'Stylish cafe chair',
          price:'Rp 2.500.000',
          sale:'Rp 3.500.000',
          off:'-30%',
          disp1:'hidden',
          disp2:'hidden',
          disp3:'hidden'
        },
        {
          img:'/p6.png',
          title:'Syltherine',
          des:'Stylish cafe chair',
          price:'Rp 2.500.000',
          sale:'Rp 3.500.000',
          off:'-30%',
          disp1:'hidden',
          disp2:'block',
          disp3:'block'
        },
        {
          img:'/p7.png',
          title:'Syltherine',
          des:'Stylish cafe chair',
          price:'Rp 2.500.000',
          sale:'Rp 3.500.000',
          off:'-30%',
          disp1:'block',
          disp2:'hidden',
          disp3:'hidden'
        },
        {
          img:'/p5.png',
          title:'Syltherine',
          des:'Stylish cafe chair',
          price:'Rp 2.500.000',
          sale:'Rp 3.500.000',
          off:'-30%',
          disp1:'hidden',
          disp2:'block',
          disp3:'hidden'
        }
      ]
  return (
    <div className='md:w-[1440px] w-[100vw]'>
        <Shop shop={shop}/>
        <Filter />
        <Products product={product}/>
        <Pagination className='md:my-28 my-8'>
  <PaginationContent >
    <PaginationItem >
      <PaginationPrevious href="#"  className='bg-[#FAF3EA] md:text-[20px] text-[12px] md:w-[200px] md:h-[50px] w-[100px] h-[30px] hover:bg-[#B88E2F] hover:text-white'/>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" className='bg-[#FAF3EA]  md:text-[20px] text-[12px] md:w-[100px] md:h-[50px] w-[50px] h-[30px] hover:bg-[#B88E2F] hover:text-white'>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
    <PaginationLink href="#"className='bg-[#FAF3EA] md:text-[20px] text-[12px] md:w-[100px] md:h-[50px] w-[50px] h-[30px] hover:bg-[#B88E2F] hover:text-white'>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" className='bg-[#FAF3EA] md:text-[20px] text-[12px] md:w-[200px] md:h-[50px] w-[100px] h-[30px] hover:bg-[#B88E2F] hover:text-white'/>
    </PaginationItem>
  </PaginationContent>
</Pagination>

        <Icon />
        
    </div>
  )
}

export default page
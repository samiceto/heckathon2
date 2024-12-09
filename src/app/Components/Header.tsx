import React from 'react'
import Image from 'next/image'
import {
    Menubar,

    MenubarMenu,

    MenubarTrigger,
  } from "@/components/ui/menubar"
import Link from 'next/link'
  

const Header = (props:any) => {
  return (
    <div>
    <div className='hidden  w-[1440px] h-[100px] md:flex justify-between items-center px-[30px]'>
        <div className='flex items-center gap-4'>
        <Image src="/logo.png" alt="" width={50} height={50} className='w-[50px]'></Image>
            <h1 className='text-[34px] font-bold inter2'>Furniro</h1></div>
        <div className='flex text-[16px]'>
        <Menubar>
  <MenubarMenu>
    <MenubarTrigger>
    <Link href="/" className='text-[16px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Home</Link>

    </MenubarTrigger>
    
  </MenubarMenu>
  
</Menubar>

<Menubar>
<MenubarMenu>
<MenubarTrigger>
<Link href="/shop" className='text-[16px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Shop</Link>
</MenubarTrigger>
    
    </MenubarMenu>
</Menubar>

<Menubar>
<MenubarMenu>
<MenubarTrigger>
<Link href="/blog" className='text-[16px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Blog</Link>
</MenubarTrigger>
    
    </MenubarMenu>
</Menubar>

<Menubar>
<MenubarMenu>
<MenubarTrigger>
   <Link href="/contect" className='text-[16px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Contact</Link>
   </MenubarTrigger>
    
    </MenubarMenu>
</Menubar>
        </div>
        <div className='flex items-center gap-4'>
        <div className='text-gray-800'>{props.cart}</div>


            <div className='flex items-center'>
                <Image src="/search.png" alt="" width={24} height={24} className='w-[24px]'></Image>
            </div>
            <div>{props.heart}</div>
            <div className='text-gray-800'>{props.user}</div>

            
        </div>
    </div>
    <div className='md:hidden w-[100vw] h-full flex-col  items-center px-[10px] my-4 gap-4'>
      <div className='flex justify-between px-2 w-full'>
        <div className='flex items-center gap-4 w-fit '>
        <Image src="/logo.png" alt="" width={50} height={50} className='w-[35px]'></Image>
            <h1 className='text-[22px] font-bold inter2'>Furniro</h1></div>
        <div className='flex items-center gap-4 w-fit '>
        <div className='text-gray-800 '>{props.cart2}</div>


            <div className='flex items-center'>
                <Image src="/search.png" alt="" width={24} height={24} className='w-[20px]'></Image>
            </div>
            <div className='w-[20px]'>{props.heart}</div>
            <div className='text-gray-800 mt-2'>{props.user2}</div>

            
        </div>
        </div>
        <div className='flex text-[16px] w-fit mx-auto'>
        <Menubar>
  <MenubarMenu>
    <MenubarTrigger>
    <Link href="/" className='text-[12px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Home</Link>

    </MenubarTrigger>
    
  </MenubarMenu>
  
</Menubar>

<Menubar>
<MenubarMenu>
<MenubarTrigger>
<Link href="/shop" className='text-[12px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Shop</Link>
</MenubarTrigger>
    
    </MenubarMenu>
</Menubar>

<Menubar>
<MenubarMenu>
<MenubarTrigger>
<Link href="/blog" className='text-[12px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Blog</Link>
</MenubarTrigger>
    
    </MenubarMenu>
</Menubar>

<Menubar>
<MenubarMenu>
<MenubarTrigger>
   <Link href="/contect" className='text-[12px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Contact</Link>
   </MenubarTrigger>
    
    </MenubarMenu>
</Menubar>
        </div>
       
    </div>

    </div>
  )
}

export default Header
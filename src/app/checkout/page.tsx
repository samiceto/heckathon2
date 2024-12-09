import { CircleDot } from 'lucide-react'
import React from 'react'
import Icon from '../Components/Icon'
import Shop from '../Components/Shop'

const page = () => {
    let shop={
        heading:'checkout',
        first:'Home',
        second:'checkout',
        disp:"block"
      }
  return (
    <div>
         <Shop shop={shop}/>
    <div className='md:w-[1440px] w-[100vw] md:h-[1829px] h-fit flex flex-col md:flex-row justify-center my-8 md:my-1'>
        <div className='md:w-[608px] w-fit md:h-[1714px] h-fit flex flex-col md:flex-row flex-wrap justify-center gap-4 mx-auto'>
            <div className='w-full md:ml-10 ml-[20vw]'><h1 className='md:text-[40px] text-[30px] font-semibold'>Billing details</h1> </div>
            <div className='flex flex-col gap-2'>First Name
            <label htmlFor="name">
                <input type="text" name="name" className='w-[212px] md:h-[75px] h-[50px] border-2 rounded-lg p-3 border-black'/>
            </label>
            </div>
            <div className='flex flex-col gap-2'>Last Name
            <label htmlFor="name">
                <input type="text" name="name" className='w-[212px] md:h-[75px] h-[50px] border-2 rounded-lg p-3 border-black'/>
            </label>
            </div>
            <div className='flex flex-col gap-2'>Company Name (Optional)
            <label htmlFor="name">
                <input type="text" name="name" className='w-[412px] md:h-[75px] h-[50px] border-2 rounded-lg p-3 border-black'/>
            </label>
            </div>
            <div className='flex flex-col  gap-2'>Country / Region
            <label htmlFor="name">
                <input type="text" name="name" className='w-[412px] md:h-[75px] h-[50px] border-2 rounded-lg p-3 border-black'/>
            </label>
            </div>
            <div className='flex flex-col gap-2'>Street address
            <label htmlFor="name">
                <input type="text" name="name" className='w-[412px] md:h-[75px] h-[50px] border-2 rounded-lg p-3 border-black'/>
            </label>
            </div>
            <div className='flex flex-col gap-2'>Town / City
            <label htmlFor="name">
                <input type="text" name="name" className='w-[412px] md:h-[75px] h-[50px] border-2 rounded-lg p-3 border-black'/>
            </label>
            </div>
            <div className='flex flex-col gap-2'>Province
            <label htmlFor="name">
                <input type="text" name="name" className='w-[412px] md:h-[75px] h-[50px] border-2 rounded-lg p-3 border-black'/>
            </label>
            </div>
            <div className='flex flex-col gap-2'>ZIP code
            <label htmlFor="name">
                <input type="text" name="name" className='w-[412px] md:h-[75px] h-[50px] border-2 rounded-lg p-3 border-black'/>
            </label>
            </div>
            <div className='flex flex-col gap-2'>Phone
            <label htmlFor="name">
                <input type="text" name="name" className='w-[412px] md:h-[75px] h-[50px] border-2 rounded-lg p-3 border-black'/>
            </label>
            </div>
            <div className='flex flex-col gap-2'>Email address
            <label htmlFor="name">
                <input type="text" name="name" className='w-[412px] md:h-[75px] h-[50px] border-2 rounded-lg p-3 border-black'/>
            </label>
            </div>
            <div className='flex flex-col'>
            <label htmlFor="name">
                <input type="text" name="name" className='w-[412px] md:h-[75px] h-[50px] border-2 rounded-lg p-3 border-black' placeholder='Additional information'/>
            </label>
            </div>

        </div>
        <div className='md:w-[508px] w-[300px] md:h-[789px] h-fit flex flex-col gap-6 justify-center items-center mx-auto mt-10 md:mt-1'>
        <div className='flex gap-5 justify-between w-full'>
                    <h1 className='text-[20px] font-medium'>Product</h1>
                    <p className='text-[20px] font-medium'>Subtotal</p>
                </div>
        
        <div className='flex gap-5 justify-between w-full'>
                    <h1 className='text-gray-500'>Asgaard sofa</h1>
                    <p className='text-gray-500 '>Rs. 250,000.00</p>
                </div>
                
                <div className='flex gap-5 justify-between w-full'>
                    <h1 className='text-[16px] font-medium'>Subtotal</h1>
                    <p className='text-gray-500 '>Rs. 250,000.00</p>
                </div>
                <div className='flex gap-5 justify-between w-full'>
                    <h1 className='text-[16px] font-medium'>Total</h1>
                    <p className='text-[#B88E2F] text-[20px] font-semibold'>Rs. 250,000.00</p>
                </div>
                <hr />
                <div className='flex gap-3 w-full justify-start'>
                <CircleDot size={20} color="#000000" strokeWidth={3} />
                    <p>Direct Bank Transfer</p>
                </div>
                <div className='text-gray-500'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</div>
                <form className='flex flex-col gap-2 w-full justify-start'>
        <label>
          <input
            type="radio"
            name="option"
            value="option1"
          />
          Bank
        </label>

        <label>
          <input
            type="radio"
            name="option"
            value="option2"
          />
         Cash on delevry
        </label>


      </form>
      <div>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</div>
                <button className='py-2 px-7 rounded-lg border-2 border-black w-fit'>Check Out</button>

        </div>
    </div>
<Icon />
    </div>
  )
}

export default page
import React from 'react'
import { Customer , Exchange, Return } from '../../icon'

const Subscribe = () => {
  return (
    <section>
        <div className="container">
            
            <div className="flex flex-row flex-wrap mx-[-12px] pb-[121px] pt-[201px]">
                <div className="lg:w-4/12 sm:w-6/12 w-full px-3">
                <div className="flex flex-col items-center">
                    <Exchange/>
                    <h5 className='font-outfit font-semibold text-[18px] text-[#373737] pt-[22px]'>Easy Exchange Policy</h5>
                    <h6 className='font-outfit  text-[18px] font-normal pt-2 text-[#898989]'>We offer hassle free  exchange policy</h6>
                </div>
                </div>
                  <div className="lg:w-4/12 sm:w-6/12 w-full px-3 pt-[98px] sm:pt-0">
                <div className="flex flex-col items-center">
                    <Return/>
                    <h5 className='font-outfit font-semibold text-[18px] text-[#373737] pt-[22px]'>7 Days Return Policy</h5>
                    <h6 className='font-outfit  text-[18px] font-normal pt-2 text-[#898989]'>We provide 7 days free return policy </h6>
                </div>
                </div>
                  <div className="lg:w-4/12  w-full px-3 pt-[98px] lg:pt-0">
                <div className="flex flex-col items-center">
                    <Customer/>
                    <h5 className='font-outfit font-semibold text-[18px] text-[#373737] pt-[22px]'>Best Customer Support</h5>
                    <h6 className='font-outfit  text-[18px] font-normal pt-2 text-[#898989]'>We provide 24/7 customer support</h6>
                </div>
                </div>

            </div>
       <div className="flex flex-col items-center sm:pb-[165px]  pb-[65px] sm:pt-[100px] pt-[75px]">
             <h3 className='text-[#373737] font-outfit font-medium text-[34px] text-center'>Subscribe now & get 20% off</h3>
            <p className='font-outfit font-normal text-[18px] text-[#9A9A9A] text-center pt-[19px] pb-[46px]'>Lorem Ipsum is simply dummy text of the printing and typesetting  industry. </p>
            <div className="border-[1px] border-solid border-[#C7C7C7] max-w-[724px] flex w-full">
                <input type="email" placeholder='Enter your email id' className='font-outfit text-[#9A9A9A] text-[14px]  w-full ps-5' />
                <input type="submit"  value='SUBSCRIBE' className='text-white cursor-pointer  font-outfit font-normal text-[16px] bg-black px-11 py-[21px]' />
            </div>   </div>         

        </div>
    </section>
  )
}

export default Subscribe
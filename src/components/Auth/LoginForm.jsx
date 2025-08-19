import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
 

  return (
    <section>
      <div className="container">
        <div className=" max-w-[517px] mx-auto pt-[180px] pb-[192px]">
          <div className="flex items-center gap-4 justify-center pb-[38px]">
            <h2 className=' font-prata font-normal text-[40px] leading-[120px] text-[#414141]'>Login</h2>
            <div className="bg-[#484848] h-[2px] w-[43px]"></div>
          </div>
          <form className='flex flex-col items-center' >
            <input type="email"  placeholder='Email' className='font-outfit mt-6 text-[#6A6A6A] w-full text-[18px] font-normal  border-[1px] border-solid border-[#000000] py-[14px] px-[18px]' />
            <input type="password"  placeholder='Password' className='font-outfit mt-6 text-[#6A6A6A] w-full text-[18px] font-normal  border-[1px] border-solid border-[#000000] py-[14px] px-[18px]' />
            <div className="flex justify-between w-full pt-[14px]">
              <a href="" className='font-outfit text-[#3C3C3C] font-normal text-[16px]'>Forgot your password?</a>
              <a href="" className='font-outfit text-[#3C3C3C] font-normal text-[16px]'>Create account</a>
            </div>
            <input type="submit" value='Login' className='text-white bg-black font-outfit font-light text-[20px] py-[14px] px-[45px] mt-[41px]' />
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginForm
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UseMyContext } from '../../context/Mycontext'

const SignupForm = () => {
    const { signup} = UseMyContext();
    const [ formdata , setFormdata] = useState({name:"" , email:"" , password:"" })


    const handleSubmit = async (e) =>{
        e.preventDefault()
        await signup(formdata)
        setFormdata({name:"" , email:"" , password:"" })
    }

  return (
    <section className='h-screen'>
        
        <div className="container">
        <div className=" max-w-[517px] mx-auto">
              <div className="flex items-center gap-4 justify-center pb-[38px]">
              <h2 className=' font-prata font-normal text-[40px] leading-[120px] text-[#414141]'>Sign Up</h2>
            <div className="bg-[#484848] h-[2px] w-[43px]"></div>
          </div>
            <form  className='flex flex-col items-center' onSubmit={handleSubmit}>
                <input type="text" required  value={formdata.name} onChange={(e) => setFormdata({...formdata,  name:e.target.value})}  placeholder='Name' className='font-outfit text-[#6A6A6A] w-full text-[18px] font-normal  border-[1px] border-solid border-[#000000] py-[14px] px-[18px]'/> 
                <input type="email"  required value={formdata.email} onChange={(e) => setFormdata({...formdata, email:e.target.value})}  placeholder='Email' className='font-outfit mt-6 text-[#6A6A6A] w-full text-[18px] font-normal  border-[1px] border-solid border-[#000000] py-[14px] px-[18px]'/> 
                <input type="password" required  value={formdata.password} onChange={(e) => setFormdata({...formdata, password :e.target.value})}  placeholder='Password' className='font-outfit mt-6 text-[#6A6A6A] w-full text-[18px] font-normal  border-[1px] border-solid border-[#000000] py-[14px] px-[18px]'/> 
                  <div className="flex justify-end w-full pt-[14px]">
                    
                    <Link to='/login' className='font-outfit text-[#3C3C3C] font-normal text-[16px]'>i have an account already</Link>
                </div>
                <input type="submit" value='Create' className='text-white bg-black font-outfit font-light cursor-pointer text-[20px] py-[14px] px-[45px] mt-[41px]' />
            </form>
        </div>
        </div>
    </section>
  )
}

export default SignupForm
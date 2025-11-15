import React from 'react'
import {Link} from 'react-router-dom'
import { Logo } from '../../icon';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-gray-100'>
      <div className="container">
        <div className="flex flex-wrap flex-row mx-[-12px] pb-[62px] border-b-[1px] border-solid border-[#BDBDBD] pt-[100px]">
          <div className="lg:w-6/12 w-full px-3">
          <div className="">
            <Link to='/'> <Logo className="sm:w-[143px] w-[100px]"/>  </Link>
            
            <h6 className='font-outfit text-[18px] leading-[30px] font-normal text-[#595959] max-w-[646px] pt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
          </div>
          
          </div>
          <div className="lg:w-3/12  sm:w-6/12 w-full pt-6 lg:pt-0 px-3">
            
              <h5 className='font-outfit font-semibold text-[#5A5A5A] text-[22px] leading-[30px] pb-10'>COMPANY</h5>
              <ul>
                <li className='font-outfit text-[18px] text-[#595959] font-normal '><Link to='' > Home</Link></li>
                <li className='font-outfit text-[18px] text-[#595959] font-normal pt-2'><Link to=''> About</Link></li>
                <li className='font-outfit text-[18px] text-[#595959] font-normal pt-2'><Link to=''> Delivery</Link></li>
                <li className='font-outfit text-[18px] text-[#595959] font-normal pt-2'><Link to='' >Privacy policy </Link></li>
              </ul>
            
          
          </div>
          <div className="lg:w-3/12 sm:w-6/12  w-full pt-6 lg:pt-0 px-3">
            <h5 className='font-outfit font-semibold text-[#5A5A5A] text-[22px] leading-[30px] pb-10'>GET IN TOUCH</h5>
              <ul>
                <li className='font-outfit text-[18px] text-[#595959] font-normal '><a href="tel:+1-212-456-7890">+1-212-456-7890</a></li>
                
                <li className='font-outfit text-[18px] text-[#595959] font-normal pt-2'><a href="mailto:greatstackdev@gmail.com">greatstackdev@gmail.com</a></li>
                                
              </ul>
          </div>

        </div>
        <h6 className='font-outfit text-[#565656] text-[18px] leading-[30px] py-[29px] text-center'>Copyright {year} © GreatStack.dev - All Right Reserved.</h6>
      </div>
      
    </footer>
  )
}

export default Footer
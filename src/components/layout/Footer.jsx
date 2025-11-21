import React from 'react'
import {Link} from 'react-router-dom'


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-gray-100'>
      <div className="container">
        <div className="flex flex-wrap flex-row mx-[-12px] pb-[62px] border-b-[1px] border-solid border-[#BDBDBD] pt-[100px]">
          <div className="lg:w-6/12 w-full px-3">
          <div className="">
            <Link to="/"  className="z-20 text-[32px] uppercase font-semibold">
                        
                        Shopora
                      </Link>
            
            <h6 className='font-outfit text-[18px] leading-[30px] font-normal text-[#595959] max-w-[646px] pt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
          </div>
          
          </div>
          <div className="lg:w-3/12  sm:w-6/12 w-full pt-6 lg:pt-0 px-3">
            
              <h5 className='font-outfit font-semibold text-[#5A5A5A] text-[22px] leading-[30px] pb-10'>COMPANY</h5>
              <ul className=' flex flex-col'>
                <li className='font-outfit text-[18px] text-[#595959] font-normal   '><Link to='/home' className='relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:w-0 after:h-[2px] hover:after:w-full after:bg-gray-500 after:rounded-md after:duration-300 inline-block' > Home</Link></li>
                <li className='font-outfit text-[18px] text-[#595959] font-normal pt-2'><Link to='/about' className='relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:w-0 after:h-[2px] hover:after:w-full after:bg-gray-500 after:rounded-md after:duration-300 inline-block'> About</Link></li>
                <li className='font-outfit text-[18px] text-[#595959] font-normal pt-2 '><Link to='/orders' className='relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:w-0 after:h-[2px] hover:after:w-full after:bg-gray-500 after:rounded-md after:duration-300 inline-block'> Delivery</Link></li>
                <li className='font-outfit text-[18px] text-[#595959] font-normal pt-2 '><Link to='/privacy' className='relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:w-0 after:h-[2px] hover:after:w-full after:bg-gray-500 after:rounded-md after:duration-300 inline-block' >Privacy policy </Link></li>
              </ul>
            
          
          </div>
          <div className="lg:w-3/12 sm:w-6/12  w-full pt-6 lg:pt-0 px-3">
            <h5 className='font-outfit font-semibold text-[#5A5A5A] text-[22px] leading-[30px] pb-10'>GET IN TOUCH</h5>
              <ul>
                <li className='font-outfit text-[18px] text-[#595959] font-normal '><a href="tel:+91 80000 70000">+91 80000 70000</a></li>
                
                <li className='font-outfit text-[18px] text-[#595959] font-normal pt-2'><a href="mailto:business@yourstore.shop">business@yourstore.shop</a></li>
                                
              </ul>
          </div>

        </div>
        <h6 className='font-outfit text-[#565656] text-[18px] leading-[30px] py-[29px] text-center'>Copyright {year} © GreatStack.dev - All Right Reserved.</h6>
      </div>
      
    </footer>
  )
}

export default Footer
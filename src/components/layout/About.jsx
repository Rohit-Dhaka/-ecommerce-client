import React from "react";
import Aboutimg from "../../assets/webp/about_img.png";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center gap-4 justify-center pb-[38px]">
          <h2 className=" font-outfit font-normal text-[30px] leading-[120px] text-[#414141]">
            ABOUT <span className="text-black">US</span>
          </h2>
          <div className="bg-[#484848] h-[2px] w-[43px]"></div>
        </div>
        <div className="flex flex-row flex-wrap mx-[-12px] items-center">
          <div className="lg:w-6/12 w-full px-3">
            <img src={Aboutimg} alt="about" className="w-full" />
          </div>
          <div className="lg:w-6/12 w-full px-3  lg:pt-0 pt-10">
            <div className="lg:ps-20">
              <h6 className="font-outfit text-[#6D6D6D] text-[18px] leading-[180%]">
                Forever was born out of a passion for innovation and a desire to
                revolutionize the way people shop online. Our journey began with
                a simple idea: to provide a platform where customers can easily
                discover, explore, and purchase a wide range of products from
                the comfort of their homes.
              </h6>

              <h6 className="font-outfit text-[#6D6D6D] text-[18px] leading-[180%] pt-8">
                Since our inception, we've worked tirelessly to curate a diverse
                selection of high-quality products that cater to every taste and
                preference. From fashion and beauty to electronics and home
                essentials, we offer an extensive collection sourced from
                trusted brands and suppliers.
              </h6>

              <h5 className="font-outfit text-[#6D6D6D] text-[18px] leading-[180%] font-bold pt-8">
                Our Mission
              </h5>

              <h6 className="font-outfit text-[#6D6D6D] text-[18px] leading-[180%] pt-8">
                Our mission at Forever is to empower customers with choice,
                convenience, and confidence. We're dedicated to providing a
                seamless shopping experience that exceeds expectations, from
                browsing and ordering to delivery and beyond
              </h6>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4  pb-[38px] pt-[89px]">
          <h2 className=" font-outfit font-normal text-[30px] leading-[120px] text-[#414141]">
            WHY <span className="text-black">CHOOSE US</span>
          </h2>
          <div className="bg-[#484848] h-[2px] w-[43px]"></div>
        </div>
        <div className="flex flex-row flex-wrap mx-[-12px] border-[1px] border-solid border-[#ABABAB]">
          <div className="lg:w-4/12 sm:w-6/12 w-full px-3 sm:border-r-[1px] border-solid border-[#ABABAB]">
            <div className="py-[110px] flex flex-col  items-center">
              <div className="">
                <h5 className="font-outfit font-semibold text-[18px] text-[#2A2A2A] uppercase ">
                  Quality Assurance:
                </h5>
                <h6 className="font-outfit text-[#6D6D6D] text-[18px] leading-[180%] pt-8 max-w-[316px] ">
                  We meticulously select and vet each product to ensure it meets
                  our stringent quality standards.
                </h6>
              </div>
            </div>
          </div>
           <div className="lg:w-4/12 sm:w-6/12 w-full px-3 lg:border-r-[1px] max-lg:border-t-[1px] border-solid border-[#ABABAB]">
            <div className="py-[110px] flex flex-col  items-center">
              <div className="">
                <h5 className="font-outfit font-semibold text-[18px] text-[#2A2A2A] uppercase ">
                  Convenience: 
                </h5>
                <h6 className="font-outfit text-[#6D6D6D] text-[18px] leading-[180%] pt-8 max-w-[316px] ">
            With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
                </h6>
              </div>
            </div>
          </div>
           <div className="lg:w-4/12 sm:w-6/12 w-full px-3 sm:border-r-[1px] max-sm:border-t-[1px] border-solid border-[#ABABAB]">
            <div className="py-[110px] flex flex-col  items-center">
              <div className="">
                <h5 className="font-outfit font-semibold text-[18px] text-[#2A2A2A] uppercase ">
                  Exceptional Customer Service:
                </h5>
                <h6 className="font-outfit text-[#6D6D6D] text-[18px] leading-[180%] pt-8 max-w-[316px] ">
                  Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
                  
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

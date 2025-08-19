import React from "react";
import Heroimg from "../../assets/webp/hero_img.png";


const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-wrap flex-row mx-[-12px] items-center border-[1px] border-solid  border-[#C8C8C8]">
          <div className="w-6/12 px-3">
            <div className="flex flex-col  items-center">
             <div className="">
                 <div className="flex  items-center gap-2 ">
                <span className="h-[2px] w-[44px]  bg-[#484848]  inline-block"></span>
                <h5 className=" uppercase font-outfit font-medium text-[18px] text-[#414141]">
                  our bestsellers
                </h5>
              </div>
              <h1 className="font-prata text-[60px]  leading-[120px]  font-normal text-[#414141]">
                Latest Arrivals
              </h1>
              <div className="flex  items-center gap-2">
                <h5 className=" uppercase font-outfit font-semibold text-[18px] text-[#414141]">
                  shop now
                </h5>
                <span className="h-[1px] w-[44px]  bg-[#484848]  inline-block"></span>
              </div>
             </div>
            </div>
          </div>
          <div className="w-6/12 ">
            <div className="">
              <img src={Heroimg} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";

const Myorders = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center gap-3 pt-[89px] pb-3">
          <h3 className=" font-medium text-[30px] ">MY ORDERS </h3>
          <span className="h-[2px] w-[50px] bg-black  inline-block"></span>
        </div>
        <div className="pt-[22px] pb-[24px] border-t-[1px] border-solid border-[#D1D1D1]">
          <div className="flex flex-row mx-[-12x] flex-wrap">
            <div className="w-6/12 px-3">
              <div className="flex gap-[23px]">
                <div className="h-[131px] w-[131px] bg-gray-100"></div>
                <div className="">
                  <h5 className=" font-outfit text-[#494949] font-medium text-[22px]">
                    Men Round Neck Pure Cotton T-shirt
                  </h5>
                  <div className="py-4  flex gap-3">
                    <h6 className="text-[#494949] text-[24px] font-light  font-outfit ">
                      $149
                    </h6>
                    <h6 className="text-[#494949] text-[24px] font-medium  font-outfit ">
                      Quantity: 1
                    </h6>
                    <h6 className="text-[#494949] text-[24px] font-medium  font-outfit ">
                      Size: L
                    </h6>
                  </div>
                  <h6 className=" font-outfit font-medium text-[18px] text-[#3C3C3C]">
                    Date: <span className="text-[#989898]">25, May, 2024</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className=" w-3/12 px-3 flex ">
              <div className="flex gap-[10px] items-center">
                <div className="w-3 h-3 bg-[#00A625] rounded-full"></div>

                <h3 className=" font-outfit text-[20px] text-[#454545]">
                  Ready to ship
                </h3>
              </div>
            </div>
            <div className="w-3/12 px-3 flex items-center">
              <button className=" font-outfit font-normal text-[20px] border-[1px] border-solid border-[#BABABA] rounded-[4px] py-2 px-[35px]">
                Track Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myorders;

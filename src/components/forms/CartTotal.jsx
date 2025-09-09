import React, { useEffect } from "react";
import { UseMyContext } from "../../context/Mycontext";
import Razorpay from "../../assets/webp/razorpay_logo.png";

const CartTotal = () => {
  const { subtotal, shipping, total, getCartTotal } = UseMyContext();

  useEffect(() => {
    getCartTotal(); // 🔹 refresh totals whenever CartTotal loads
  }, []);

  return (
    <section>
      <div className="container">
        <div className="flex flex-row flex-wrap mx-[-12px]">
          <div className="w-6/12 px-3">
            <div>
              <div className="flex items-center gap-3 pt-[89px] pb-3">
                <h3 className="font-medium text-[30px]">CART TOTALS</h3>
                <span className="h-[2px] w-[50px] bg-black inline-block"></span>
              </div>

              <div className="border-b border-[#E5E5E5] pb-4 flex justify-between">
                <h6 className="font-medium text-[16px] text-[#555555] pt-4">
                  Subtotal
                </h6>
                <h6 className="font-medium text-[16px] text-[#454545] pt-4">
                  ₹{subtotal.toFixed(2)}
                </h6>
              </div>

              <div className="border-b border-[#E5E5E5] pb-4 flex justify-between">
                <h6 className="font-medium text-[16px] text-[#555555] pt-4">
                  Shipping
                </h6>
                <h6 className="font-medium text-[16px] text-[#454545] pt-4">
                  ₹{shipping.toFixed(2)}
                </h6>
              </div>

              <div className="border-b border-[#E5E5E5] pb-4 flex justify-between">
                <h6 className="font-bold text-[16px] text-[#454545] pt-4">
                  Total
                </h6>
                <h6 className="font-medium text-[16px] text-[#454545] pt-4">
                  ₹{total.toFixed(2)}
                </h6>
              </div>

              <button className="mt-10 py-4 px-4 border-[1px] border-solid border-gray-400 inline-block">
                <img src={Razorpay} alt="Razorpay" className="h-6" />
              </button>
              <div className="flex justify-end"> <button  className="uppercase text-white bg-black py-[17px] px-[18px] mt-[40px]" > Place Order </button> </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartTotal;

import React, { useEffect } from "react";
import { Delete } from "../../icon";
import { UseMyContext } from "../../context/Mycontext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {getCart , cart  , removeCart  , getCartTotal  , subtotal , shipping , total} = UseMyContext();

  useEffect(() =>{
      getCart();
      getCartTotal();
  },[])
  


  const handleRemove = async (productId) => {
  try {
    await removeCart(productId); // API call
    alert("✅ Item removed from cart");
    getCart(); // cart ko update karna
  } catch (error) {
    console.log(error);
    alert("❌ Failed to remove item");
  }
};


console.log(cart)
  return (
    <section>

      
        
          
        
      
      
      <div className="container">
        <div className="flex items-center gap-3 pt-[89px] pb-3">
          <h3 className=" font-medium text-[30px] ">YOUR CART </h3>
          <span className="h-[2px] w-[50px] bg-black  inline-block"></span>
        </div>
      
       
      


      {/* ------------------------- */}
      <div className="pt-[22px] pb-[24px] border-t-[1px] border-solid border-[#D1D1D1]">
  {!Array.isArray(cart) || cart.length === 0 ? (
    <p>Your cart is empty</p>
  ) : (
    cart.map((item) => (
      <div
        key={item._id}
        className="flex flex-row mx-[-12px] flex-wrap mb-6"
      >
        <div className="w-6/12 px-3 flex gap-[23px]">
          <div className="h-[131px] w-[131px] border flex items-center justify-center">
            <img
              src={item.productId?.imagesUrl?.[0]}
              alt={item.productId?.title || "Product"}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h5 className="font-outfit text-[#494949] font-medium text-[22px]">
              {item.productId?.title}
            </h5>
            <div className="py-4 flex gap-3 items-center">
              <h6 className="text-[#494949] text-[24px] font-light font-outfit">
                ${item.productId?.price * item.quantity}
              </h6>
              <h6 className="text-[#494949] text-[20px] font-medium font-outfit bg-[#FBFBFB] border border-[#DFDFDF] py-[15px] px-[20px]">
                {item.size} x {item.quantity}
              </h6>
            </div>
          </div>
        </div>

        <div className="w-3/12 px-3 flex items-center">
          <div className="flex gap-[10px] items-center">
            <div className="w-3 h-3 bg-[#00A625] rounded-full"></div>
            <h3 className="font-outfit text-[20px] text-[#454545]">
              Ready to ship
            </h3>
          </div>
        </div>

        <div className="w-3/12 px-3 flex items-center justify-end">
          <button onClick={() => handleRemove(item._id)}>
            <Delete />
          </button>
        </div>
      </div>
    ))
  )}
</div>

        {/* ---------------- */}
        <div className="flex justify-end">
          <div className="w-[40%]">
            <div className="flex items-center gap-3 pt-[89px] pb-3">
              <h3 className="font-medium text-[30px]">CART TOTALS</h3>
              <span className="h-[2px] w-[50px] bg-black inline-block"></span>
            </div>

            <div className="border-b border-solid border-[#E5E5E5] pb-4 flex justify-between">
              <h6 className="font-medium text-[16px] font-outfit text-[#555555] pt-4">
                Subtotal
              </h6>
              <h6 className="font-medium text-[16px] font-outfit text-[#454545] pt-4">
                ${subtotal.toFixed(2)}
              </h6>
            </div>

            <div className="border-b border-solid border-[#E5E5E5] pb-4 flex justify-between">
              <h6 className="font-medium text-[16px] font-outfit text-[#555555] pt-4">
                Shipping
              </h6>
              <h6 className="font-medium text-[16px] font-outfit text-[#454545] pt-4">
                ${shipping.toFixed(2)}
              </h6>
            </div>

            <div className="border-b border-solid border-[#E5E5E5] pb-4 flex justify-between">
              <h6 className="font-bold text-[16px] font-outfit text-[#454545] pt-4">
                Total
              </h6>
              <h6 className="font-medium text-[16px] font-outfit text-[#454545] pt-4">
                ${total.toFixed(2)}
              </h6>
            </div>

            <div className="flex justify-end">
              <Link  to='/deliveryInformation' className="text-uppercase text-white bg-black py-[17px] px-[18px] mt-[40px]">
              Proceed to checkout
              </Link>
            
            </div>
          </div>
        </div>              
      </div>
    </section>
  );
};

export default Cart;

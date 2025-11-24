import React, { useEffect, useState } from "react";
import { Delete } from "../../icon";
import { UseMyContext } from "../../context/Mycontext";
import { Link } from "react-router-dom";
import Title from "../common/Title";
import MessageBar from "../common/MessageBar";

const Cart = () => {
  const {getCart , cart  , removeCart  , getCartTotal  , subtotal , shipping , total , incrementQty,
        decrementQty,} = UseMyContext();
 const [message, setMessage] = useState("");
  const [bar, setBar] = useState(false);


  useEffect(() => {
  getCart();    
}, []);


useEffect(() => {
  getCartTotal();
}, [cart]);


  
  


const handleRemove = async (productId) => {
  try {
    
    setMessage("Item removed from cart");
    setBar(true);

    
    setTimeout(async () => {
      try {
        await removeCart(productId);  
        await getCart();              
      } catch (err) {
        console.log(err);
        
      }

      
      setMessage("");
      setBar(false);
    }, 2000);

  } catch (error) {
    console.log(error);
    
  }
};


console.log(cart)
  return (
   <section>

<MessageBar message={message} showBar={bar} />

  <div className="container">

    {/* Page Title */}
    <div className="pt-[80px] pb-4">
      <Title text1="YOUR" text2="CART" />
    </div>

    {/* ---------------- CART ITEMS ---------------- */}
    <div className="pt-6 pb-6 border-t border-[#D1D1D1]">

      {(!Array.isArray(cart) || cart.length === 0) ? (
        <p className="text-center text-gray-600 py-10">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item._id}
            className="flex flex-wrap lg:flex-nowrap sm:gap-6 gap-2 border-b pb-6 mb-6"
          >
            
            {/* LEFT: Product + Size + Qty */}
            <div className="lg:w-6/12 w-full flex sm:gap-6 gap-1 max-sm:flex-col">

              {/* Product Image */}
              <div className="h-[131px] w-[131px] min-w-[110px] border rounded-md overflow-hidden flex items-center justify-center">
                <img
                  src={item.productId?.imagesUrl?.[0]}
                  alt={item.productId?.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div>
                {/* Product Title */}
                <h5 className="font-medium text-[20px] text-[#494949] font-outfit">
                  {item.productId?.title}
                </h5>

                {/* Price + Size + Qty */}
                <div className="py-4 flex flex-wrap gap-4 items-center">

                  {/* Price */}
                  <h6 className="text-[22px] text-[#494949] font-light">
                    ${item.productId?.price}
                  </h6>

                  {/* Size */}
                  <span className="text-[18px] font-medium text-[#494949] bg-[#FBFBFB] border border-[#DFDFDF] py-2 px-4 rounded-md">
                    {item.size}
                  </span>

                  {/* Quantity Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decrementQty(item.productId._id)}
                      className="px-3 py-1 bg-gray-200 rounded-md text-lg"
                    >
                      -
                    </button>

                    <span className="text-lg font-semibold w-8 text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => incrementQty(item.productId._id)}
                      className="px-3 py-1 bg-gray-200 rounded-md text-lg"
                    >
                      +
                    </button>
                  </div>

                </div>
              </div>
            </div>

            {/* Middle: Status */}
            <div className="lg:w-3/12 sm:w-6/12  flex items-center px-3">
              <div className="flex gap-2 items-center">
                <span className="w-3 h-3 bg-[#00A625] rounded-full"></span>
                <h3 className="font-outfit text-[18px] text-[#454545]">
                  Ready to ship
                </h3>
              </div>
            </div>

            {/* Right: Remove Button */}
            <div className="lg:w-3/12 sm:w-6/12 px-3 flex items-center justify-end">
              <button onClick={() => handleRemove(item.productId._id)}>
                <Delete />
              </button>
            </div>

          </div>
        ))
      )}

    </div>

    {/* ---------------- TOTALS SECTION ---------------- */}
    <div className="flex lg:justify-end pb-[80px]">

      <div className="lg:w-[40%] w-full">

        {/* Heading */}
        <div className="flex items-center gap-3 pt-[40px] pb-3">
          <h3 className="font-medium text-[26px]">CART TOTALS</h3>
          <span className="h-[2px] w-[50px] bg-black"></span>
        </div>

        {/* Subtotal */}
        <div className="border-b pb-3 flex justify-between">
          <h6 className="text-[16px] text-[#555555]">Subtotal</h6>
          <h6 className="text-[16px] text-[#454545] font-medium">
            ${subtotal.toFixed(2)}
          </h6>
        </div>

        {/* Shipping */}
        <div className="border-b pb-3 flex justify-between">
          <h6 className="text-[16px] text-[#555555]">Shipping</h6>
          <h6 className="text-[16px] text-[#454545] font-medium">
            ${shipping.toFixed(2)}
          </h6>
        </div>

        {/* Total */}
        <div className="border-b pb-3 flex justify-between">
          <h6 className="text-[16px] text-[#454545] font-bold">Total</h6>
          <h6 className="text-[16px] text-[#454545] font-medium">
            ${total.toFixed(2)}
          </h6>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <Link
            to="/deliveryInformation"
            className="bg-black text-white py-4 px-6 mt-6 rounded-md hover:bg-gray-900"
          >
            Proceed to Checkout
          </Link>
        </div>

      </div>
    </div>

  </div>
</section>

  );
};

export default Cart;

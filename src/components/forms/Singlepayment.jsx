import React, { useEffect } from "react";
import { UseMyContext } from "../../context/Mycontext";
import { useNavigate, useLocation } from "react-router-dom";

const Singlepayment = () => {

  const { paymentcreateOrder, fetchUser, user } = UseMyContext();

  const navigate = useNavigate();
  const location = useLocation();

  const { product, selectedSize, quantity } = location.state || {};

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (!product) navigate("/");
  }, [product]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) return;

    
    const orderData = await paymentcreateOrder(product.price * quantity);
    if (!orderData) return;

    const options = {
      key: "rzp_test_REzImRICNcMTCj",
      amount: product.price * quantity * 100, 
      currency: "INR",
      name: product.name,
      order_id: orderData.order.id,

      handler: async (response) => {
        navigate("/orders");
      },

      prefill: {
        name: user?.name || "Guest User",
        email: user?.email || "guest@example.com",
      },

      theme: { color: "black" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="  bg-gray-50 ">
     <div className="container flex items-center justify-center py-32">
         <div className="w-full max-w-md bg-white p-4  shadow-xl rounded-2xl">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Payment Summary
        </h1>

        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="text-lg font-semibold">
            Product: <span className="font-normal">{product?.title}</span>
          </p>

          <p className="text-lg font-semibold">
            Price: <span className="font-normal">₹{product?.price}</span>
          </p>

          <p className="text-lg font-semibold">
            Size: <span className="font-normal uppercase">{selectedSize}</span>
          </p>

          <p className="text-lg font-semibold">
            Quantity: <span className="font-normal">{quantity}</span>
          </p>
        </div>

        <div className="bg-gray-200 rounded-lg p-4 mb-4">
          <div className="flex justify-between text-gray-800">
            <span className="font-medium">Total Amount</span>
            <span className="font-bold text-xl">
              ₹{product?.price * quantity}
            </span>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900"
        >
          Pay Securely
        </button>
      </div>
     </div>
    </div>
  );
};

export default Singlepayment;

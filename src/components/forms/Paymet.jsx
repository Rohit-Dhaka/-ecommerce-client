import React, { useEffect } from "react";
import { UseMyContext } from "../../context/Mycontext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { paymentcreateOrder, total , fetchUser, user  } = UseMyContext();


  console.log("User" , user)
  console.log("User name" , user?.name )
  const fixedTotal = Number(total.toFixed(2));
  const navigate = useNavigate();

  
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
    try {
      const res = await loadRazorpayScript();
      if (!res) {
        console.log(res);
        return;
      }

      const orderData = await paymentcreateOrder(fixedTotal);
      if (!orderData) return;

      const options = {
        key: "rzp_test_REzImRICNcMTCj",
        amount: orderData.order.amount, 
        currency: orderData.order.currency,
        name: "Your App Name",
        order_id: orderData.order.id,
        handler: async (response) => {
          try {
            const token = localStorage.getItem("token");
            const verifyRes = await fetch("/delivery/verifyPayment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const data = await verifyRes.json();
            console.log("Payment verified:", data);
          } catch (err) {
            console.log("Payment verification error:", err);
          }
        },
        prefill: {
            name: user?.name || "Guest User",
           email: user?.email || "guest@example.com",
        },
        theme: { color: "black" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      navigate("/orders");
    } catch (error) {
      console.log("Payment error:", error);
    }
  };

  return (
    <div className="h-[60vh] flex items-center justify-center  p-4">
      <div className="container">
       

       <div className="flex flex-col  ">
         <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center font-outfit">
          Payment Page
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Total Amount: <span className="font-semibold text-lg font-outfit">₹{fixedTotal}</span>
        </p>
         <button
          onClick={handlePayment}
          className="mx-auto  bg-black  sm:px-20  px-10 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Pay Now
        </button>
       </div>
      </div>
    </div>
  );
};

export default Payment;

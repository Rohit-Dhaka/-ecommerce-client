import React, { useEffect, useState } from "react";
import { UseMyContext } from "../../context/Mycontext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { paymentcreateOrder, total, fetchUser, user } = UseMyContext();

  const navigate = useNavigate();

  
  useEffect(() => {
    fetchUser();
  }, []);

  const fixedTotal = Number(total.toFixed(2)); 
  const amountInPaise = fixedTotal * 100;      

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
      if (!res) return;

      
      const orderData = await paymentcreateOrder(amountInPaise);
      if (!orderData) return;

      const options = {
        key: "rzp_test_REzImRICNcMTCj",
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Your App Name",
        order_id: orderData.order.id,
        
        handler: async (response) => {
          navigate("/orders"); 
          try {
            const token = localStorage.getItem("token");

            const verifyRes = await fetch("/delivery/verifyPayment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(response),
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
    } catch (error) {
      console.log("Payment error:", error);
    }
  };

  return (
   <div className="h-[60vh] flex items-center justify-center p-4 bg-gray-50">
  <div className="w-full max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
    
    <h1 className="text-3xl font-semibold text-gray-900 mb-2 text-center font-outfit">
      Payment Summary
    </h1>

    <p className="text-center text-gray-500 mb-6">
      Complete your purchase securely
    </p>

    <div className="bg-gray-100 rounded-lg p-4 mb-4">
      <div className="flex justify-between text-gray-700">
        <span className="font-medium">Total Amount</span>
        <span className="font-bold text-xl">₹{fixedTotal}</span>
      </div>
      <div className="flex justify-between text-gray-500 mt-2 text-sm">
        <span>Taxes included</span>
        <span>Razorpay Payments</span>
      </div>
    </div>

    <button
      onClick={handlePayment}
      className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-900 transition duration-300"
    >
      Pay Securely
    </button>

    <div className="mt-6 text-center text-gray-500 text-sm">
      <p>Your payment is secured with Razorpay</p>
    </div>
  </div>
</div>

  );
};

export default Payment;

import React, { useEffect } from "react";
import { UseMyContext } from "../../context/Mycontext";
import { useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
  const { paymentcreateOrder, fetchUser, user } = UseMyContext();
  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product;
  const selectedSize = location.state?.selectedSize;
  const quantity = location.state?.quantity || 1;

  useEffect(() => {
    fetchUser();
  }, []);

  if (!product) {
    return <p className="text-center mt-20">Product not found.</p>;
  }

  const fixedTotal = product.price * quantity; // Rupee
  const amountInPaise = Math.round(fixedTotal * 100); // Convert to paise ✔️

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
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) return;

    const orderData = await paymentcreateOrder({
      total: amountInPaise,
      productId: product._id,
      name: product.title,
      price: product.price,
      quantity: quantity,
      image: product.imagesUrl[0],
    });

    console.log("orderData", orderData);

    if (!orderData || !orderData.razorpayOrder) {
      return console.error("Failed to create Razorpay order");
    }

    const options = {
      key: "rzp_test_REzImRICNcMTCj",
      amount: orderData.razorpayOrder.amount,
      currency: orderData.razorpayOrder.currency,
      name: "SHOPORA",
      description: product.title,
      image: product.imagesUrl?.[0],
      order_id: orderData.razorpayOrder.id,

      handler: (response) => {
        navigate("/orders");
      },

      prefill: {
        name: user?.name,
        email: user?.email,
      },

      theme: { color: "black" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="h-[60vh] flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 border">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2 text-center">
          Payment Summary
        </h1>

        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="font-medium">Product: {product.title}</p>
          <p className="font-medium">Size: {selectedSize}</p>
          <p className="font-medium">Quantity: {quantity}</p>
          <div className="flex justify-between text-gray-700 mt-3">
            <span className="font-medium">Total Amount</span>
            <span className="font-bold text-xl">₹{fixedTotal.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Pay Securely
        </button>
      </div>
    </div>
  );
};

export default Payment;

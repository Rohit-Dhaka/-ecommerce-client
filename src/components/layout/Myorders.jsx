import React, { useEffect } from "react";
import { UseMyContext } from "../../context/Mycontext";

const Myorders = () => {
  const { getallorder, allorders } = UseMyContext();

  useEffect(() => {
    getallorder();
  }, []);

  const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case "pending":
      return "bg-yellow-500";
    case "processing":
      return "bg-blue-500";
    case "shipped":
      return "bg-orange-500";
    case "delivered":
      return "bg-green-500";
    case "cancelled":
      return "bg-red-500";
    default:
      return "bg-gray-400";
  }
};


  if (!Array.isArray(allorders)) {
    return (
      <section className="pt-[89px] pb-[24px]">
        <div className="container">
          <h3 className="font-medium text-[30px]">MY ORDERS</h3>
          <p className="text-[18px] text-gray-600 mt-4">No orders found</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container px-3">
        {/* Header */}
        <div className="flex items-center gap-3 pt-[40px] md:pt-[80px] pb-3">
          <h3 className="font-medium text-[24px] md:text-[30px]">MY ORDERS</h3>
          <span className="h-[2px] w-[40px] md:w-[50px] bg-black inline-block"></span>
        </div>

        {/* Orders List */}
        <div className="pt-[22px] pb-[24px] border-t border-solid border-[#D1D1D1]">
          {allorders.length === 0 ? (
            <p className="text-[18px] text-gray-600">No orders found</p>
          ) : (
            allorders.map((order) => (
              <div
                key={order._id}
                className="flex flex-col lg:flex-row gap-6 border-b pb-6 mb-6"
              >
                {/* Left Section - Product List */}
                <div className="w-full lg:w-6/12">
                  {order.items?.map((item) => (
                    <div
                      key={item._id}
                      className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6"
                    >
                      {/* Product Image */}
                      <div className="h-[150px] w-[150px] sm:h-[120px] sm:w-[120px] border rounded-md overflow-hidden flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex flex-col gap-1">
                        <h5 className="font-outfit text-[#494949] font-medium text-[20px] sm:text-[22px]">
                          {item.name}
                        </h5>

                        <div className="flex flex-wrap gap-3 mt-2">
                          <h6 className="text-[#494949] text-[18px] font-light">
                            ₹{item.price}
                          </h6>
                          <h6 className="text-[#494949] text-[18px] font-medium">
                            Qty: {item.quantity}
                          </h6>
                        </div>

                        <h6 className="font-outfit font-medium text-[14px] mt-2">
                          Date:{" "}
                          <span className="text-[#989898]">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </span>
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Middle Section - Status */}
                <div className="w-full lg:w-3/12 flex items-start lg:items-center">
                 <div className="flex items-center gap-2">
  <div
    className={`w-3 h-3 rounded-full ${getStatusColor(order.status)}`}
  ></div>
  <h3 className="font-outfit text-[18px] sm:text-[20px] text-[#454545] capitalize">
    {order.status || "Processing"}
  </h3>
</div>

                </div>

                {/* Right Section - Track Order Button */}
                <div className="w-full lg:w-3/12 flex lg:items-center lg:justify-end">
                  <button className="font-outfit text-[18px] sm:text-[20px] border border-[#BABABA] rounded-md py-2 px-6 hover:bg-gray-100 transition">
                    Track Order
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Myorders;

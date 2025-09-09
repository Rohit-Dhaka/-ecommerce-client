import React, { useEffect } from "react";
import { UseMyContext } from "../../context/Mycontext";

const Myorders = () => {
  const { orders , getOrder } = UseMyContext();

  useEffect(() =>{
    getOrder()
  },[])

  if (!Array.isArray(orders)) {
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
      <div className="container">
        <div className="flex items-center gap-3 pt-[89px] pb-3">
          <h3 className="font-medium text-[30px]">MY ORDERS</h3>
          <span className="h-[2px] w-[50px] bg-black inline-block"></span>
        </div>

        <div className="pt-[22px] pb-[24px] border-t border-solid border-[#D1D1D1]">
          {orders.length === 0 ? (
            <p className="text-[18px] text-gray-600">No orders found</p>
          ) : (
            orders.map((order) => (
              <div
                key={order._id}
                className="flex flex-row mx-[-12px] flex-wrap mb-6 border-b pb-4"
              >
                {/* Left: Product info */}
                <div className="w-6/12 px-3">
                  {order.cartItems?.map((item) => (
                    <div key={item._id} className="flex gap-[23px] mb-4">
                      <div className="h-[131px] w-[131px] border flex items-center justify-center">
 <img
  src={item?.image || "/placeholder.png"}
  alt={item?.title || item?.productId?.title || "No title"}
  className="object-cover w-full h-full"
/>


                      </div>
                      <div>
                        <h5 className="font-outfit text-[#494949] font-medium text-[22px]">
                          {item.productId.title}
                        </h5>
                        <div className="py-4 flex gap-3 flex-wrap">
                          <h6 className="text-[#494949] text-[20px] font-light font-outfit">
                            ${item.productId.price}
                          </h6>
                          <h6 className="text-[#494949] text-[20px] font-medium font-outfit">
                            Quantity: {item.quantity}
                          </h6>
                          <h6 className="text-[#494949] text-[20px] font-medium font-outfit">
                            Size: {item.size}
                          </h6>
                        </div>
                        <h6 className="font-outfit font-medium text-[16px] text-[#3C3C3C]">
                          Date:{" "}
                          <span className="text-[#989898]">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </span>
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Middle: Status */}
                <div className="w-3/12 px-3 flex items-center">
                  <div className="flex gap-[10px] items-center">
                    <div className="w-3 h-3 bg-[#00A625] rounded-full"></div>
                    <h3 className="font-outfit text-[20px] text-[#454545]">
                      {order.status || "Processing"}
                    </h3>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="w-3/12 px-3 flex items-center justify-end">
                  <button className="font-outfit font-normal text-[20px] border border-solid border-[#BABABA] rounded-[4px] py-2 px-[35px]">
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

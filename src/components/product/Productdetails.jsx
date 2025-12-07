import React, { useEffect, useState } from "react";
import { UseMyContext } from "../../context/Mycontext";
import { Link, useNavigate, useParams } from "react-router-dom";
import Mybuttion from "../common/Mybuttion";
import MessageBar from "../common/MessageBar";
import Loader from "../common/Loader";
import { LightStart, Start } from "../../common/icon";

const Productdetails = () => {
  const { getOneproduct, addToCart } = UseMyContext();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [cartLoading, setCartLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [bar, setBar] = useState(false);

  const navigate = useNavigate();

  const [zoom, setZoom] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e) => {
    const { left, width, top, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoom({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setZoom((prev) => ({ ...prev, active: false }));
  };

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    getOneproduct(id)
      .then((data) => {
        if (data) {
          setProduct(data);
          if (data.imagesUrl?.length) {
            setMainImage(data.imagesUrl[0]);
          }
        } else {
          setError("Product not found");
        }
      })
      .catch(() => setError("Failed to fetch product"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      showMessage("Please login first to add product", () =>
        navigate("/login")
      );
      return;
    }

    if (!selectedSize) {
      showMessage("Please select a size before adding to cart");
      return;
    }

    try {
      setCartLoading(true);

      const res = await addToCart(product._id, {
        size: selectedSize,
        quantity: 1,
      });

      const successMessage = res?.message || "Product added to cart";
      showMessage(successMessage);

      setTimeout(() => navigate("/cart"), 2000);
    } catch (err) {
      console.error("Add to cart error:", err);

      const errMsg =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to add product to cart";

      showMessage(errMsg);
    } finally {
      setCartLoading(false);
    }
  };

  const showMessage = (msg, callback = null) => {
    setMessage(msg);
    setBar(true);

    setTimeout(() => {
      setMessage("");
      setBar(false);
      if (callback) callback();
    }, 2000);
  };

  return (
    <section>
      <MessageBar message={message} showBar={bar} />
      {loading && <Loader />}

      <div className="container">
        <div className="py-[51px]">
          <div className="flex flex-wrap mx-[-12px] items-center">
            
            <div className="sm:w-6/12 w-full px-3">
              <div className="flex sm:flex-row flex-col items-center gap-2">
                {product?.imagesUrl?.length > 1 && (
                  <div className="flex sm:flex-col flex-row gap-2 max-sm:overflow-x-scroll">
                    {product.imagesUrl.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`thumb-${idx}`}
                        onClick={() => setMainImage(img)}
                        className={`w-24 h-24 object-cover rounded-md cursor-pointer border ${
                          mainImage === img ? "border-black" : "border-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}

                <div
                  className="w-full sm:h-[600px] border rounded-xl overflow-hidden relative cursor-zoom-in"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={mainImage}
                    alt={product?.name}
                    className={`w-full sm:h-full object-cover rounded-xl transition-transform duration-200 ${
                      zoom.active ? "scale-150" : "scale-100"
                    }`}
                    style={{ transformOrigin: `${zoom.x}% ${zoom.y}%` }}
                  />
                </div>
              </div>
            </div>

            
            <div className="sm:w-6/12 w-full px-3 sm:pt-0 pt-8">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : product ? (
                <>
                  <h6 className="text-[#3D3D3D] font-medium font-outfit text-[24px] pb-3">
                    {product.title}
                  </h6>
                  <div className=" flex gap-2 items-center pb-[20px]">
                    <div className="flex gap-[5px]">
                      <Start />
                      <Start />
                      <Start />
                      <Start />
                      <LightStart />
                    </div>
                    <p className=" font-outfit text-[#3D3D3D]">(122)</p>
                  </div>

                  <p className="font-outfit text-[32px] text-[#2A2A2A] pb-[20px]">
                    ₹{product.price}
                  </p>
                  <div
                    className="font-outfit w-[80%]"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></div>

                  <h5 className="font-outfit text-[#656565] font-bold pt-[20px]">
                    Select Size
                  </h5>

                  <div className="py-4 flex gap-2">
                    {["s", "m", "l", "xl", "2xl"].map((size) => (
                      <label
                        key={size}
                        className={`cursor-pointer uppercase bg-[#FBFBFB] border rounded-md w-[60px] h-[60px] flex items-center justify-center ${
                          selectedSize === size
                            ? "border-black font-bold"
                            : "border-[#EBEBEB]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="size"
                          value={size}
                          checked={selectedSize === size}
                          onChange={(e) => setSelectedSize(e.target.value)}
                          className="hidden"
                        />
                        <span className="text-[#1D1D1D]">{size}</span>
                      </label>
                    ))}
                  </div>

                  
                  <div className="flex gap-4 flex-wrap">
                    <Mybuttion
                      name={cartLoading ? "ADDING..." : "ADD TO CART"}
                      onClick={handleAddToCart}
                      disabled={cartLoading}
                    />

                    <button
                      onClick={() => {
                        if (!selectedSize) {
                          showMessage("Please select a size before buying");
                          return;
                        }
                        const token = localStorage.getItem("token");
                        if (!token) {
                          showMessage("Please login first");
                          return;
                        }
                        navigate("/deliveryInformation", {
                          state: {
                            product,
                            selectedSize,
                            quantity: 1,
                            id: product._id,
                          },
                        });
                      }}
                      className="bg-black text-white font-outfit sm:font-bold font-medium sm:py-4 py-2 sm:px-10 px-6 rounded-md transition"
                    >
                      Buy Now
                    </button>
                  </div>

                  <h6 className="font-outfit text-[#555555] pt-3 border-t mt-3 max-w-[300px]">
                    100% Original product. Cash on delivery is available on this
                    product. Easy return and exchange policy within 7 days.
                  </h6>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className=" sm:pb-60 pb-40">
          <div className="flex items-center">
            <div className="py-6 px-8  border border-solid border-[#55555]">
              <h5 className="font-outfit  font-bold text-[#393939]">
                Description
              </h5>
            </div>
            <div className="py-6 px-8   border border-solid border-[#55555] bg-[#FBFBFB]">
              <h5 className="font-outfit  font-bold text-[#898989]">
                Reviews (122)
              </h5>
            </div>
          </div>

          <div className="sm:py-[60px] sm:px-12 py-[40px] px-8 border border-solid border-[#55555]">
            <p className=" font-outfit text-[#555555] leading-[28px]">
              {" "}
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <p className=" font-outfit text-[#555555] leading-[28px]">
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productdetails;

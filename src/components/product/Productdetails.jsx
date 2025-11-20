import React, { useEffect, useState } from "react";
import { UseMyContext } from "../../context/Mycontext";
import { useNavigate, useParams } from "react-router-dom";
import Mybuttion from "../common/Mybuttion";

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
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoom({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setZoom((prev) => ({ ...prev, active: false }));
  };

  // Fetch product
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

  // Add to cart
  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      showMessage("Please login first to add products to cart", () => navigate("/login"));
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

      console.log("Cart Response:", res);

      const successMessage = res?.message || "Product added to cart";
      showMessage(successMessage);
      setTimeout(() => {
        navigate('/cart')
        
      }, 2000);

    } catch (err) {
      console.error("Add to cart error:", err);
      const errMsg = err?.response?.data?.message || "Failed to add product to cart";
      showMessage(errMsg);
    } finally {
      setCartLoading(false);
    }
  };

  // Auto message helper
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
    <section className="relative">
      {message && (
        <div className="absolute top-10 left-[50%] translate-x-[-50%] z-10 bg-black flex flex-col gap-1 rounded-lg px-4 py-2">
          <h2 className="text-white">{message}</h2>
          {bar && (
            <span className="w-full inline-block h-1 bg-white rounded-full animate-progress ease-linear"></span>
          )}
        </div>
      )}

      <div className="container">
        <div className="py-[51px]">
          <div className="flex flex-wrap mx-[-12px] items-center">

            {/* IMAGE SECTION */}
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

            {/* PRODUCT DETAILS */}
            <div className="sm:w-6/12 w-full px-3">

              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : product ? (
                <>
                  <h6 className="text-[#3D3D3D] font-medium font-outfit text-[34px] pb-[20px]">
                    {product.name}
                  </h6>

                  <p className="font-outfit text-[32px] text-[#2A2A2A] pb-[20px]">
                    ₹{product.price}
                  </p>

                  <p className="font-outfit text-[#555555] text-[16px]">
                    {product.description}
                  </p>

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

                  <Mybuttion
                    name={cartLoading ? "ADDING..." : "ADD TO CART"}
                    onClick={handleAddToCart}
                    disabled={cartLoading}
                  />

                  <h6 className="font-outfit text-[#555555] pt-3 border-t mt-3">
                    100% Original product.
                  </h6>
                </>
              ) : null}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productdetails;

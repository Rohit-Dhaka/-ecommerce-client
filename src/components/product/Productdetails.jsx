import React, { useEffect, useState } from "react"
import { UseMyContext } from "../../context/Mycontext"
import { useParams } from "react-router-dom"
import Mybuttion from "../common/Mybuttion"

const Productdetails = () => {
  const { getOneproduct, addToCart } = UseMyContext()
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedSize, setSelectedSize] = useState("")
  const [mainImage, setMainImage] = useState("")
  const [cartLoading, setCartLoading] = useState(false)
    

   const [zoom, setZoom] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoom({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setZoom({ ...zoom, active: false });
  };


  // ✅ Fetch product details
  useEffect(() => {
    if (id) {
      setLoading(true)
      getOneproduct(id)
        .then((data) => {
          if (data) {
            setProduct(data)
            if (data.imagesUrl && data.imagesUrl.length > 0) {
              setMainImage(data.imagesUrl[0])
            }
          } else {
            setError("Product not found")
          }
        })
        .catch(() => setError("Failed to fetch product"))
        .finally(() => setLoading(false))
    }
  }, [id])

  // ✅ Handle Add to Cart
  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart")
      return
    }

    try {
      setCartLoading(true)

      const res = await addToCart(product._id, {
        size: selectedSize,
        quantity: 1,
      })

      console.log("Cart Response:", res)

      if (res?.message) {
        alert(`✅ ${res.message}`)
      } else {
        alert("✅ Product added to cart")
      }
    } catch (err) {
      console.error("Add to cart error:", err.response?.data || err.message)
      alert(err.response?.data?.message || "❌ Failed to add product to cart")
    } finally {
      setCartLoading(false)
    }
  }

  return (
    <section>
      <div className="container">
        <div className="pt-[51px]">
          <div className="flex flex-wrap flex-row mx-[-12px]">
            <div className="sm:w-6/12 w-full px-3">
      <div
        className="w-full h-[400px] border rounded-xl overflow-hidden relative cursor-zoom-in"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={mainImage}
          alt={product?.name}
          className={`w-full h-full object-cover rounded-xl transition-transform duration-200 ${
            zoom.active ? "scale-150" : "scale-100"
          }`}
          style={{
            transformOrigin: `${zoom.x}% ${zoom.y}%`,
          }}
        />
      </div>

      {/* Thumbnails */}
      {product?.imagesUrl?.length > 1 && (
        <div className="flex gap-2 mt-4">
          {product.imagesUrl.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              className={`w-24 h-24 object-cover rounded-md cursor-pointer border ${
                mainImage === img ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      )}
    </div>
            
            {/* Left side - Images */}
            

            {/* Right side - Product Details */}
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
                    ${product.price}
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
                        className={`cursor-pointer   uppercase bg-[#FBFBFB] border-[1px] border-solid rounded-md w-[60px] h-[60px] flex items-center justify-center ${
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
                        <span className="text-[#1D1D1D] font-outfit">
                          {size}
                        </span>
                      </label>
                    ))}
                  </div>

                  <Mybuttion
                    name={cartLoading ? "ADDING..." : "ADD TO CART"}
                    onClick={handleAddToCart}
                    disabled={!selectedSize || cartLoading}
                  />

                  <h6 className="font-outfit text-[#555555] pt-3 border-t-[1px] border-solid border-[#ADADAD] mt-3">
                    100% Original product.
                  </h6>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Productdetails

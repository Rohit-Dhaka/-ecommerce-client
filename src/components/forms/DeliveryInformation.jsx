import React, { useState } from "react";
import { UseMyContext } from "../../context/Mycontext";
import { useNavigate } from "react-router-dom";

const DeliveryInformation = () => {
  const { createaddress } = UseMyContext(); // function from context

  // form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    streetAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const  navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddAddress = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Call context function to save address
      const res = await createaddress(formData);
      setMessage(res.message || "✅ Address saved successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        streetAddress: "",
      });
      navigate('/payment')
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to save address");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="flex justify-center">
          <div className="lg:w-6/12 w-full px-3 pb-20">
            <div className="flex items-center gap-3 pt-[89px] pb-3">
              <h3 className="font-medium text-[30px] text-uppercase">
                Delivery Information
              </h3>
              <span className="h-[2px] w-[50px] bg-black inline-block"></span>
            </div>

            {message && (
              <div className="mb-4 text-center text-black font-medium">
                {message}
              </div>
            )}

            <form className="pt-4" onSubmit={handleAddAddress}>
              <div className="flex gap-[15px]">
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={formData.firstName}
                  className="w-full font-outfit text-[18px] text-[#8B8B8B] outline-none border border-[#C5C5C5] py-2 px-4 rounded-sm"
                  placeholder="First name"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  value={formData.lastName}
                  className="w-full font-outfit text-[18px] text-[#8B8B8B] outline-none border border-[#C5C5C5] py-2 px-4 rounded-sm"
                  placeholder="Last name"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="my-4 w-full font-outfit text-[18px] text-[#8B8B8B] outline-none border border-[#C5C5C5] py-2 px-4 rounded-sm"
                placeholder="Email address"
                required
              />

              <input
                type="text"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                className="mb-4 w-full font-outfit text-[18px] text-[#8B8B8B] outline-none border border-[#C5C5C5] py-2 px-4 rounded-sm"
                placeholder="Phone number"
                required
              />

              <div className="flex gap-[15px]">
                <input
                  type="text"
                  name="city"
                  onChange={handleChange}
                  value={formData.city}
                  className="w-full font-outfit text-[18px] text-[#8B8B8B] outline-none border border-[#C5C5C5] py-2 px-4 rounded-sm"
                  placeholder="City"
                  required
                />
                <input
                  type="text"
                  name="state"
                  onChange={handleChange}
                  value={formData.state}
                  className="w-full font-outfit text-[18px] text-[#8B8B8B] outline-none border border-[#C5C5C5] py-2 px-4 rounded-sm"
                  placeholder="State"
                  required
                />
              </div>

              <div className="flex gap-[15px] mt-4">
                <input
                  type="text"
                  name="zip"
                  onChange={handleChange}
                  value={formData.zip}
                  className="w-full font-outfit text-[18px] text-[#8B8B8B] outline-none border border-[#C5C5C5] py-2 px-4 rounded-sm"
                  placeholder="Zip code"
                  required
                />
                <input
                  type="text"
                  name="country"
                  onChange={handleChange}
                  value={formData.country}
                  className="w-full font-outfit text-[18px] text-[#8B8B8B] outline-none border border-[#C5C5C5] py-2 px-4 rounded-sm"
                  placeholder="Country"
                  required
                />
              </div>

              <input
                type="text"
                name="streetAddress"
                onChange={handleChange}
                value={formData.streetAddress}
                className="mt-4 w-full font-outfit text-[18px] text-[#8B8B8B] outline-none border border-[#C5C5C5] py-2 px-4 rounded-sm"
                placeholder="Street Address"
                required
              />

              <button
                type="submit"
                className={`bg-black text-white py-2 px-3 w-full mt-4 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Saving..." : "Add Address"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInformation;

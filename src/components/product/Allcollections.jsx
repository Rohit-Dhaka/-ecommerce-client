import React, { useEffect, useState } from "react";
import { assets } from "../../assets/webp/assets.js";
import Title from "../../components/common/Title";
import { UseMyContext } from "../../context/Mycontext.js";
import { Link } from "react-router-dom";
import Loader from "../common/Loader.jsx";

const Allcollections = () => {
  const { getallproduct, products, search, showSearch } = UseMyContext();

 
  
      
  
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevent");
  const [loading, setLoading] = useState(true);


   useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getallproduct();
      setLoading(false);
    };

    fetchData();
  }, []);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const togglesubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

const applyFilter = () => {
  let productCopy = products.slice();

  if (showSearch && search) {
    productCopy = productCopy.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  
  if (category.length > 0) {
    productCopy = productCopy.filter((item) =>
      item.category.some((cat) => category.includes(cat))
    );
  }

  
  if (subCategory.length > 0) {
    productCopy = productCopy.filter((item) =>
      item.subcategory.some((sub) => subCategory.includes(sub))
    );
  }

  setFilterProduct(productCopy);
};


  const sortProduct = () => {
    let fpCopy = filterProduct.slice();
    switch (sortType) {
      case "low-high":
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProduct(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
   <section className=" relative">
    {loading && <Loader />}
    
    <div className="container">
       <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter options  */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>
        {/* Category filter  */}
        <div
          className={`border border-gray-500 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                id="men"
                onChange={toggleCategory}
              />{" "}
              
              <label for="men" className=" cursor-pointer" >Men</label>
            </p>
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                id="Women"
                onChange={toggleCategory}
              />{" "}
              <label for="Women" className=" cursor-pointer">Women</label>
              
            </p>
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                id="Kids"
                onChange={toggleCategory}
              />{" "}
              
              <label for="Kids" className=" cursor-pointer">Kids</label>

            </p>
          </div>
        </div>

        {/* Subcategory filter  */}
        <div
          className={`border border-gray-500 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                id="Topwear"
                onChange={togglesubCategory}
              />{" "}
              <label for="Topwear" className=" cursor-pointer">Topwear</label>
              
            </p>
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                id="Bottemwear"
                onChange={togglesubCategory}
              />{" "}
              <label for="Bottemwear" className=" cursor-pointer">Bottemwear</label>
              
            </p>
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                id="Winterwear"
                onChange={togglesubCategory}
              />{" "}
              <label for="Winterwear" className=" cursor-pointer">Winterwear</label>
              
            </p>
          </div>
        </div>
      </div>

      {/* Right side  */}
      <div className="flex-1">
        <div className="flex  sm:flex-row flex-col justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* product sort  */}
          <select
            className="border-2 border-gray-300 px-2 text-sm "
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map product  */}
      <div className="flex flex-row flex-wrap mx-[-12px] sm:pb-[120px] pb-[80px]">
  {filterProduct.map((item, index) => (
    <Link to={`/productdetails/${item._id}`}
      key={index}
      className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-full px-3 pt-4 h-100 "
    >
      <div className=" rounded-xl overflow-hidden cursor-pointer group">
        <div className="overflow-hidden h-64">
          <img
            src={item.imagesUrl[0]}
            alt={item.name}
            className="w-full  object-cover  mb-2 group-hover:scale-110 duration-300 h-full  "
          />
        </div>
        <h3 className="font-medium text-gray-800   line-clamp-1 py-1 ">{item.title}</h3>
        <p className="text-gray-600 text-sm">₹{item.price}</p>
        
      </div>
    </Link>
  ))}
  
</div>


      </div>
    </div>
    </div>
   </section>
  );
};

export default Allcollections;

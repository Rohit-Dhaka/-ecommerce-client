import React, { useEffect } from "react";
import { UseMyContext } from "../../context/Mycontext";
import { Link } from "react-router-dom";

const LatestCollections = () => {
    const {getallproduct , products } = UseMyContext();

    useEffect(() =>{
        getallproduct();

    },[])


  return (
    <section>
      <div className="container">
        <div className=" flex flex-col items-center">
          <div className="flex items-center gap-3 pt-[89px] pb-3">
            <h3 className=" font-normal text-[30px] text-[#707070]">LATEST <span className=" font-medium text-black">COLLECTIONS</span> </h3>
            <span className="h-[2px] w-[50px] bg-black  inline-block"></span>
          </div>
          <p className="text-[#868686] font-outfit  text-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
        </div>
        <div className="flex flex-row flex-wrap mx-[-12px] pt-[47px]" >
            
            {products.map((pro , i) => (
                <Link to={`/productdetails/${pro._id}`}  key={i} className="w-3/12 px-3">
                    
                    <div >
                        <img src={pro.imagesUrl && pro.imagesUrl[0]} alt=""  className="h-[300px] w-full"/>
                        <h5  className="text-[#494949] font-outfit font-medium text-[14px] pt-[21px] pb-[6px]">{pro.title}</h5>
                        <h6 className="text-[#494949] font-outfit font-medium text-[16px]">{pro.price}</h6>
                    </div>
                </Link>

            ))}

        </div>
      </div>
    </section>
  );
};

export default LatestCollections;

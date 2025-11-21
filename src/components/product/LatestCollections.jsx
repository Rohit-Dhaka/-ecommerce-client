import React, { useEffect } from "react";
import { UseMyContext } from "../../context/Mycontext";
import { Link } from "react-router-dom";
import Title from "../common/Title";

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
            <Title text1={"LATEST"}  text2={"COLLECTIONS"}  />        
          </div>
          <p className="text-[#868686] font-outfit  text-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
        </div>
        <div className="flex flex-row flex-wrap mx-[-12px] pt-[47px] sm:pb-[120px] pb-[60px]" >
            
            {products.slice(0,12).map((pro , i) => (
                <Link to={`/productdetails/${pro._id}`}  key={i} className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-full px-3 lg:pt-5 pt-10">
                    
                    <div >
                      <div className=" group overflow-hidden">

                        <img src={pro.imagesUrl && pro.imagesUrl[0]} alt=""  className="h-[300px] w-full group-hover:scale-105 duration-300 "/>
                      </div>
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

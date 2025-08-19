import React from "react";
import Contactimg from "../../assets/webp/contact_img.png";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center gap-4 justify-center pb-[38px]">
          <h2 className=" font-outfit font-normal text-[30px] leading-[120px] text-[#414141]">
            CONTACT <span className="text-black">US</span>
          </h2>
          <span className="bg-[#484848] h-[2px] w-[43px]"></span>
        </div>
        <div className="flex flex-row flex-wrap mx-[-12px] items-center pb-[100px]">
          <div className="lg:w-6/12 w-full px-3">
            <img src={Contactimg} alt="" />
          </div>
          <div className="lg:w-6/12 w-full px-3 lg:pt-0 pt-10">
            <div className="">
              <h5 className="font-outfit font-semibold text-[#4E4E4E] text-[24px] leading-[100%]">
                Our Store
              </h5>
              <p className="font-outfit text-[#6D6D6D] text-[18px] font-normal max-w-[220px] py-[21px]">
                54709 Willms Station Suite 350, Washington, USA
              </p>
              <a
                href="tel:+415 555‑0132"
                className="text-[#6D6D6D] font-outfit text-[18px] leading-[180%]"
              >
                Tel: (415) 555‑0132
              </a>
              <a
                href="mailto:greatstackdev@gmail.com"
                className="text-[#6D6D6D] font-outfit text-[18px] leading-[180%]"
              >
                {" "}
                Email: greatstackdev@gmail.com
              </a>
              <h5 className="font-outfit font-semibold text-[#4E4E4E] text-[24px] leading-[100%] pt-[48px] pb-[21px]">
                Careers at Forever
              </h5>
              <p className="text-[#6D6D6D] font-outfit text-[18px] leading-[180%] pb-[31px]">
                Learn more about our teams and job openings.
              </p>
              <button className="font-outfit font-normal text-[16px]  border-[1px] border-solid border-[#000000] py-[21px] px-10">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

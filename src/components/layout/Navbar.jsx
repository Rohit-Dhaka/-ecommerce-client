import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Cart,  Profile, Search } from "../../icon";
import { UseMyContext } from "../../context/Mycontext";
import { LogIn, LogOut, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  const { isLogin, logout, cartCount, cartLength } = UseMyContext();
  const [show, setShow] = useState(false); 
  const [open, setOpen] = useState(false);
  const downclickRef = useRef(null);

  
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [show]);

  
  useEffect(() => {
    cartLength();
    const handleClickOutside = (e) => {
      if (downclickRef.current && !downclickRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className="container">
        <div className="sm:pt-[29px] pt-[19px] pb-[19px] border-b-[1px] border-solid border-[#ADADAD] flex justify-between items-center">
          <Link to="/"  className="z-20 text-[32px] uppercase font-semibold">
            
            Shopora
          </Link>

          
          <ul
            className={`${
              show ? "show" : "hide"
            } flex lg:gap-[22px] max-lg:absolute  max-lg:w-full max-lg:h-screen max-lg:top-0 duration-300 ease-linear z-10 max-lg:pt-[81px] max-lg:flex-col  max-lg:bg-gray-50`}
          >
            {["Home", "Collection", "About", "Contact"].map((navlink, i) => (
              <li
                key={i}
                className="text-[#2A2A2A] font-outfit font-medium leading-[100%] text-[16px]"
              >
                <NavLink
                
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      setShow(!show);
                    }
                  }}
                  to={`${navlink.toLowerCase()}`}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "lg:after:absolute lg:after:w-full lg:after:bottom-[-4px] lg:after:right-0 lg:after:h-[2px] lg:after:bg-[#303030] lg:after:rounded-full max-lg:bg-black max-lg:text-white "
                        : ""
                    } relative after:duration-300 after:ease-linear  max-lg:py-4 max-lg:inline-block max-lg:border-b-[1px] max-lg:border-black max-lg:border-solid  max-lg:w-full max-lg:px-3 `
                  }
                >
                  {navlink.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>

       
           
          <div className="flex sm:gap-8 gap-4">
            {/* <Link to="">
              <Search />
            </Link> */}

            {/* Profile Dropdown */}
            <div
              className="relative group cursor-pointer"
              ref={downclickRef}
              onClick={() => setOpen(!open)}
            >
              <Profile />

              {open && (
                <div className="absolute flex top-full right-0 p-4 bg-gray-200 flex-col rounded w-[200px] gap-2 shadow-lg z-10">
                  {isLogin ? (
                    <>
                      <div className="flex gap-2">
                        <User size={24} className="text-black cursor-pointer" />
                        <Link
                          to="/profile"
                          className="text-[#5B5B5B] hover:text-blue-600"
                        >
                          My Profile
                        </Link>
                      </div>
                      <div className="flex gap-2">
                        <ShoppingCart
                          size={24}
                          className="text-black cursor-pointer"
                        />
                        <Link
                          to="/orders"
                          className="text-[#5B5B5B] hover:text-blue-600"
                        >
                          Orders
                        </Link>
                      </div>

                      <div className="flex gap-2">
                        <LogOut
                          size={24}
                          className="text-black cursor-pointer"
                        />
                        <button
                          onClick={logout}
                          className="text-[#5B5B5B] text-left hover:text-red-600"
                        >
                          Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    <Link to="/login" className="flex gap-2">
                      <LogIn size={24} className="text-black cursor-pointer" />

                      <h6
                        
                        className="text-[#5B5B5B] hover:text-blue-600"
                      >
                        Login
                      </h6>
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart">
              <div className="relative">
                <Cart />
                <div className="absolute bottom-[-6px] right-[-8px] font-outfit text-[13px] leading-[100%] text-white bg-black w-[18px] h-[18px] rounded-full flex items-center justify-center">
                  {cartCount}
                </div>
              </div>
            </Link>
              <div
            className="menuicon flex flex-col gap-[6px] items-end lg:hidden z-10 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <span
              className={`${
                show ? "rotate-45 translate-y-[9px]" : ""
              } duration-300 ease-linear h-[3px] w-[30px] bg-black rounded-full inline-block`}
            ></span>
            <span
              className={`${
                show ? "opacity-0" : ""
              } h-[3px] w-[25px] bg-black rounded-full duration-300 ease-linear inline-block `}
            ></span>
            <span
              className={`${
                show ? "-rotate-45 translate-y-[-9px] w-[30px]" : "w-[15px]"
              } duration-500 h-[3px] bg-black rounded-full inline-block `}
            ></span>
          </div>
          </div>

        
        
       </div>
        
      </div>
    </nav>
  );
};

export default Navbar;

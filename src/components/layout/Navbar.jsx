import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Cart, Logo, Profile, Search } from "../../icon";
import { UseMyContext } from "../../context/Mycontext";

const Navbar = () => {
  const { isLogin, logout } = UseMyContext();
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="pt-[29px] pb-[19px] border-b-[1px] border-solid border-[#ADADAD] flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>

          <ul
            className={` ${
              show ? "show" : "hide"
            }   flex gap-[22px] max-lg:absolute  max-lg:bg-gray-400 max-lg:w-full max-lg:h-screen max-lg:top-0 duration-300 ease-linear z-10 max-lg:items-center max-lg:justify-center max-lg:flex-col `}
          >
            {["Home", "Collection", "About", "Contact"].map((navlink, i) => (
              <li
                key={i}
                className="text-[#2A2A2A] font-outfit font-medium leading-[100%] text-[16px]"
              >
                <NavLink
                  to={`${navlink.toLowerCase()}`}
                  className={({ isActive }) =>
                    ` ${
                      isActive
                        ? " after:absolute after:w-full after:bottom-[-4px] after:right-0 after:h-[2px] after:bg-[#303030] after:rounded-full"
                        : ""
                    } relative after:duration-300 after:ease-linear`
                  }
                >
                  {navlink.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex gap-8 ">
            <Link to="">
              <Search />
            </Link>

            <div className="relative group">
              <Profile />

              <div className="absolute hidden group-hover:block top-full right-0 p-4 bg-gray-200  flex-col rounded w-[200px] gap-2 shadow-lg">
                {isLogin ? (
                  <>
                    <Link
                      to="/profile"
                      className="text-[#5B5B5B] hover:text-blue-600"
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="text-[#5B5B5B] hover:text-blue-600"
                    >
                      Orders
                    </Link>
                    <button
                      onClick={logout}
                      className="text-[#5B5B5B] text-left hover:text-red-600"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="text-[#5B5B5B] hover:text-blue-600"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>

            <Link to="">
              <div className=" relative">
                <Cart />
                <div className=" absolute bottom-[-6px] right-[-8px]  font-outfit text-[13px] leading-[100%] text-white bg-black w-[18px] h-[18px] rounded-full flex items-center justify-center ">
                  2
                </div>
              </div>
            </Link>
          </div>
          <div
            className="menuicon flex flex-col items-end lg:hidden  z-10"
            onClick={() => setShow(!show)}
          >
            <span
              className={` ${
                show ? " rotate-45 translate-y-[12px]" : ""
              }   duration-300 ease-linear    h-[3px]  w-[37px] bg-black rounded-full inline-block`}
            ></span>
            <span
              className={`  ${
                show ? " opacity-0" : ""
              }  h-[3px]  w-[30px] bg-black rounded-full duration-300 ease-linear inline-block my-[9px]`}
            ></span>
            <span
              className={`  ${
                show ? "-rotate-45 translate-y-[-12px] w-[37px] " : "w-[20px]"
              } duration-500  h-[3px]   bg-black rounded-full inline-block`}
            ></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import chat from "../assets/images/chat.jpg";
import { useDispatch } from "react-redux";
import { userLogout } from "../Reduxstore/Userslice";
import { useNavigate,Link } from "react-router-dom";


function Usernavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handlelogout = () => {
    localStorage.removeItem("userAccessToken");
    localStorage.removeItem("userRefreshToken");
    dispatch(userLogout());
    console.log('******************************************************')
    navigate("/User/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav>
      <div className="h-20 flex flex-wrap items-center justify-between mx-auto bg-black">
        <a href="#" className="flex items-center">
          <img
            src="https://www.svgrepo.com/show/499962/music.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Landwind Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            VIRASAT
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>
          <img
            src={chat}
            className="h-6 mr-8 sm:h-9 rounded-md cursor-pointer"
          />
          <button
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 "onClick={handlelogout}
          >
            Logout
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                HOME
              </Link>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                SHOP
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                CONTACT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                DETAILS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Usernavbar;

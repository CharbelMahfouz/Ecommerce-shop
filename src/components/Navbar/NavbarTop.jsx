import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/auth";
import SearchBar from "./Search Bar/SearchBar";

const NavbarTop = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);
  return (
    <div
      id="nav-top"
      className=" h-14 bg-navbarBackground flex items-center justify-between px-3.5"
    >
      <div id="nav-left" className="flex items-center mr-4">
        <div id="nav-logo" className="w-24 mr-4">
          <Link to="/" className="w-full">
            <img
              src="images/amazon-logo.png"
              className="w-full object-contain "
              alt="amazon-logo"
            />
          </Link>
        </div>
      </div>
      <div id="nav-center" className=" hidden sm:flex mr-4 flex-1 ">
        <SearchBar />
      </div>
      <div
        id="nav-right"
        className="flex items-center text-xs space-x-2 md:space-x-6 whitespace-nowrap"
      >
        <div id="signin-user">
          {user ? (
            <div className="flex flex-col">
              <span className="text-gray-300 leading-none">
                Hello, {user.displayName}
              </span>
              <span
                className="text-white font-extrabold leading-none md:text-sm cursor-pointer"
                onClick={() => dispatch(logout())}
              >
                Logout
              </span>
            </div>
          ) : (
            <Link to="/signin" className="flex flex-col">
              <span className="text-gray-300  leading-none">
                Hello, sign in
              </span>
              <span className="text-white font-extrabold md:text-sm leading-none">
                Account & lists
              </span>
            </Link>
          )}
        </div>
        <div id="summary" className="flex flex-col">
          <span className="text-gray-300  leading-none">Returns</span>
          <span className="text-white font-extrabold leading-none md:text-sm">
            & Orders
          </span>
        </div>
        <div id="navbar-cart" className=" text-sm self-end ">
          <Link to="/cart" className="flex items-center">
            <span className="text-lg text-white mr-2">
              <RiShoppingCartLine style={{ fontSize: "30px" }} />
            </span>

            <span className=" hidden md:text-sm md:inline text-white font-extrabold leading-none">
              Cart
            </span>
            <span className="md:text-sm text-white font-extrabold leading-none">
              ({cart ? cart.total_items : 0})
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;

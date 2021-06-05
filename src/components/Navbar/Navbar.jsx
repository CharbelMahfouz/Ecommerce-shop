import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../redux/actions/cart";
import { logout } from "../../redux/actions/auth";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  return (
    <header>
      <div className="flex flex-col" id="navbar-container">
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
          <div id="nav-center" className="flex mr-4 flex-1">
            <div
              id="search-bar-container"
              className="flex items-center h-full w-full"
            >
              <input
                type="search"
                id="search-input"
                className="flex-grow flex-1 p-1.5 rounded-l-md"
              />
              <button
                id="search-btn"
                className="h-full py-1.5 px-2 bg-amazonYellow text-2xl rounded-r-md"
              >
                <AiOutlineSearch />
              </button>
            </div>
          </div>
          <div id="nav-right" className="flex items-center">
            <div id="signin-user">
              {user ? (
                <div className="flex flex-col">
                  <span className="text-gray-300 text-sm leading-none">
                    Hello, {user.displayName}
                  </span>
                  <span
                    className="text-white font-semibold leading-none cursor-pointer"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </span>
                </div>
              ) : (
                <Link to="/signin" className="flex flex-col">
                  <span className="text-gray-300 text-sm leading-none">
                    Hello, sign in
                  </span>
                  <span className="text-white font-semibold leading-none">
                    Account & lists
                  </span>
                </Link>
              )}
            </div>
            <div id="summary" className=" mx-5">
              <Link to="/account-summary" className="flex flex-col">
                <span className="text-gray-300 text-sm leading-none">
                  Returns
                </span>
                <span className="text-white font-semibold leading-none">
                  & Orders
                </span>
              </Link>
            </div>
            <div id="navbar-cart" className=" text-sm self-end">
              <Link to="/cart" className="flex items-center">
                <span className="text-lg text-white mr-2">
                  <RiShoppingCartLine style={{ fontSize: "30px" }} />
                </span>

                <span className="text-lg text-white font-semibold leading-none">
                  Cart ({cart.total_items})
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

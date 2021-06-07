import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../redux/actions/cart";
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  return (
    <header className="sticky top-0 z-50">
      <div className="flex flex-col" id="navbar-container">
        <NavbarTop />
        <NavbarBottom />
      </div>
    </header>
  );
};

export default Navbar;

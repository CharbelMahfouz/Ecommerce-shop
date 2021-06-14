import React from "react";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/products";
import Category from "./Category";

const NavbarBottom = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div
      id="nav-bottom"
      className="flex items-center bg-amazonBlue text-white md:text-sm text-xs space-x-3 p-2 pl-6"
    >
      <button
        onClick={() => dispatch(fetchProducts())}
        className="flex items-center cursor-pointer"
      >
        {" "}
        <FiMenu className=" mr-1" /> All
      </button>
      {categories &&
        categories.map((category) => (
          <Category key={category.name} category={category} />
        ))}
    </div>
  );
};

export default NavbarBottom;

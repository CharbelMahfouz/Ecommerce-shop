import React from "react";
import { useDispatch } from "react-redux";
import { fetchCategoryProducts } from "../../redux/actions/products";

const Category = ({ category }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(e) => dispatch(fetchCategoryProducts(category.slug))}
      className="cursor-pointer font-semibold"
    >
      {category.name}
    </button>
  );
};

export default Category;

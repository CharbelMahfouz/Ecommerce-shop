import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/actions/cart";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div id="card" className="bg-white flex flex-col py-5 px-7 relative">
      <div id="card-head" className="h-52 mb-3">
        <div id="card-media" className="h-full">
          <img
            src={product.media.source}
            alt={product.name}
            id="product-img"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <div id="card-body" className="mb-2">
        <div id="card-content" className="flex justify-between">
          <Link to={`/product/${product.id}`}>
            <h5 id="product-name" className="font-bold mb-3">
              {product.name}
            </h5>
          </Link>

          <h5 id="product-price">{product.price.formatted_with_symbol}</h5>
        </div>
        <h5
          dangerouslySetInnerHTML={{ __html: product.description }}
          id="product-description"
          className="text-gray-600 line-clamp-2"
        ></h5>
      </div>
      <div id="card-footer" className=" mt-auto">
        <button
          onClick={() => dispatch(addToCart(product.id, 1))}
          id="add-to-cart-btn"
          className="flex items-center p-2 bg-amazonYellow outline-none focus:outline-none w-full hover:bg-yellow-500 transition "
        >
          <FaShoppingCart className="mr-3" />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

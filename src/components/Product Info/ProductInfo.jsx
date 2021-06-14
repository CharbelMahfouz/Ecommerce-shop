import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductInfo } from "../../redux/actions/products";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { addToCart } from "../../redux/actions/cart";
import { FaShoppingCart } from "react-icons/fa";

const ProductInfo = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductInfo(id));
  }, [dispatch, id]);
  console.log(id);
  return (
    <>
      <Navbar />
      <div className="container mx-auto grid place-items-center h-screen">
        <div className="flex flex-col flex-wrap md:flex-row md:flex-nowrap">
          <div className="max-h-72 max-w-xs">
            <img
              alt={product && product.name}
              src={product && product.assets[0].url}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col max-w-xs overflow-auto">
            <h1 className="font-bold text-sm md:text-xl mb-3">
              {product && product.name}
            </h1>
            <p
              className="text-lg mb-3"
              dangerouslySetInnerHTML={{
                __html: product && product.description,
              }}
            ></p>
            <p>{product && product.price.formatted_with_symbol}</p>
            <button
              onClick={() => dispatch(addToCart(product.id, 1))}
              id="add-to-cart-btn"
              className="flex items-center p-2 bg-amazonYellow outline-none focus:outline-none hover:bg-yellow-500 transition mt-auto text-center"
            >
              <FaShoppingCart className="mr-3" />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;

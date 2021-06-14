import React, { useCallback, useEffect, useState } from "react";
import CartItem from "./CartItem/CartItem";
import CartAction from "./CartAction/CartAction";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [isEmpty, setIsEmpty] = useState(true);

  const checkIfCartEmpty = useCallback(() => {
    if (cart.line_items) {
      if (cart.line_items.length) {
        setIsEmpty(false);
      } else {
        setIsEmpty(true);
      }
    }
  }, [cart]);

  useEffect(() => {
    checkIfCartEmpty();
  }, [cart, checkIfCartEmpty]);

  const EmptyCart = () => {
    return (
      <>
        <div className="container mx-auto grid place-content-center h-screen">
          <div id="empty-cart-screen" className="bg-white flex p-12 ">
            <div id="empty-cart-logo" className="w-72 mr-10">
              <img
                src="images/empty-cart.svg"
                alt="empty-cart-logo"
                className="w-full"
              />
            </div>
            <div id="empty-cart-text">
              <h2 className="text-2xl font-bold leading-loose">
                Your Cart Is Empty
              </h2>
              <Link to="/" className="text-blue-700">
                Shop Items
              </Link>
              <div
                id="empty-cart-action-btns"
                className="flex items-center my-5"
              >
                {!user && (
                  <>
                    <Link
                      to="/signin"
                      className="bg-btnBackgroundYellow py-1 px-3 rounded-lg text-base text-amazonText leading-6 mr-4 shadow-lg hover:bg-btnHoverYellow transition"
                    >
                      Sign In To Your Account
                    </Link>
                    <Link
                      to="/signup"
                      className="shadow-lg bg-btnBackgroundGray py-1 px-2 rounded-lg border-amazonBorder border-solid border-t border-r border-l border-b hover:bg-btnHoverGray transition"
                    >
                      Sign Up Now
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <div id="cart-items" className="w-full md:w-3/4  bg-white py-3 px-3 ">
          <div id="cart-items-top" className="flex justify-between pb-3">
            <h3 id="cart-heading" className="font-bold">
              Shopping Cart
            </h3>
            <span>Price</span>
          </div>
          <div
            id="cart-items-container"
            className="flex flex-col overflow-auto"
          >
            {cart.line_items &&
              cart.line_items.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
          </div>
          <div id="cart-items-subtotal" className="p-3 w-full">
            <p className="float-right">
              Subtotal ({cart.total_items} items):{" "}
              <span className="text-red-800">
                {cart.subtotal.formatted_with_symbol}
              </span>
            </p>
          </div>
        </div>
        <CartAction cart={cart} />
      </>
    );
  };
  return (
    <>
      <Navbar />
      <section
        id="cart-section"
        className="flex flex-col w-full md:flex-row h-full"
      >
        {isEmpty ? <EmptyCart /> : <FilledCart />}
      </section>
    </>
  );
};

export default Cart;

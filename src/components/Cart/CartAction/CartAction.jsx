import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const CartAction = ({ cart }) => {
  const user = useSelector((state) => state.auth);
  const history = useHistory();
  const goToCheckout = () => {
    history.push("/checkout");
  };
  return (
    <div
      id="cart-info"
      className="w-full  md:w-1/5 mx-auto bg-white h-32 p-3 mt-2 flex flex-col justify-between"
    >
      <p>
        Subtotal ({cart.total_items}) items:{" "}
        <span className="text-red-800">
          {cart.subtotal.formatted_with_symbol}
        </span>
      </p>
      <button
        id="checkout-btn"
        className={` py-2 rounded-md ${
          !user
            ? "bg-gradient-to-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed"
            : "bg-amazonYellow"
        } `}
        disabled={!user}
        onClick={goToCheckout}
      >
        {user ? "Proceed To Checkout" : "Login To Checkout"}
      </button>
    </div>
  );
};

export default CartAction;

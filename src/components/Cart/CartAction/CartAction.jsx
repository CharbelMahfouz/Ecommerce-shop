import React from "react";
import { useHistory } from "react-router-dom";

const CartAction = ({ cart }) => {
  const history = useHistory();
  const goToCheckout = () => {
    history.push("/checkout");
  };
  return (
    <div
      id="cart-info"
      className="w-full md:w-1/5 mx-auto bg-white h-32 p-3 mt-2 flex flex-col justify-between"
    >
      <p>
        Subtotal ({cart.total_items}) items:{" "}
        <span className="text-red-800">
          {cart.subtotal.formatted_with_symbol}
        </span>
      </p>
      <button
        id="checkout-btn"
        className="bg-amazonYellow py-2 rounded-md"
        onClick={goToCheckout}
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartAction;

import React from "react";
import { updateQty, removeFromCart } from "../../../redux/actions/cart";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div id="cart-item" className="flex p-2 border-t-2 border-b-2">
      <div id="cart-item-img" className="h-52 w-1/5 mr-3">
        <img
          src={item.media.source}
          alt={item.name}
          className="h-full w-full object-contain"
        />
      </div>
      <div id="cart-item-info" className="w-4/5">
        <div className="flex justify-between">
          <h3 id="cart-item-name" className="text-blue-600 font-bold">
            {item.name}
          </h3>
          <p id="cart-item-price" className="text-red-800">
            {item.line_total.formatted_with_symbol}
          </p>
        </div>
        <p
          id="cart-item-validity"
          className={item.is_valid ? "text-green-700" : "text-red-700"}
        >
          {item.is_valid ? "In Stock" : "Out Of Stock"}
        </p>
        <div id="cart-item-actions" className="flex">
          <div id="quantity-controller" className="mr-4 ">
            <button
              id="decrement-quantity"
              className="p-2 hover:bg-btnHoverGray transition focus:outline-none"
              onClick={() => dispatch(updateQty(item.id, item.quantity - 1))}
            >
              -
            </button>
            <span id="item-quantity" className="mx-1.5">
              {item.quantity}
            </span>
            <button
              id="increment-quantity"
              className="p-2 hover:bg-btnHoverGray transition focus:outline-none"
              onClick={() => dispatch(updateQty(item.id, item.quantity + 1))}
            >
              +
            </button>
          </div>
          <button
            id="remove-item-btn"
            className="text-sm text-blue-600"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import {
  ADD_TO_CART,
  EMPTY_CART,
  GET_CART_ITEMS,
  REMOVE_ITEM_FROM_CART,
  UPDATE_CART_QUANTITY,
} from "../actions/constants/actionTypes";

const cartReducer = (cart = {}, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
    case ADD_TO_CART:
    case UPDATE_CART_QUANTITY:
    case REMOVE_ITEM_FROM_CART:
    case EMPTY_CART:
      return action.payload;
    default:
      return cart;
  }
};

export default cartReducer;

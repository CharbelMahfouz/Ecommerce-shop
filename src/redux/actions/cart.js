import {
  GET_CART_ITEMS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  EMPTY_CART,
  REFRESH_CART,
} from "./constants/actionTypes";
import { commerce } from "../../lib/commerce";

export const fetchCart = () => async (dispatch) => {
  try {
    const cart = await commerce.cart.retrieve();
    dispatch({ type: GET_CART_ITEMS, payload: cart });
  } catch (error) {
    console.log(error.message);
  }
};

export const addToCart = (productId, quantity) => async (dispatch) => {
  try {
    const { cart } = await commerce.cart.add(productId, quantity);
    dispatch({ type: ADD_TO_CART, payload: cart });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateQty = (productId, quantity) => async (dispatch) => {
  try {
    const { cart } = await commerce.cart.update(productId, { quantity });
    dispatch({ type: UPDATE_CART_QUANTITY, payload: cart });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeFromCart = (productId) => async (dispatch) => {
  try {
    const { cart } = await commerce.cart.remove(productId);
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload: cart });
  } catch (error) {
    console.log(error.message);
  }
};

export const emptyCart = () => async (dispatch) => {
  try {
    const { cart } = await commerce.cart.empty();
    dispatch({ type: EMPTY_CART, payload: cart });
  } catch (error) {
    console.log(error.message);
  }
};

export const refreshCart = () => async (dispatch) => {
  try {
    const newCart = await commerce.cart.refresh();
    dispatch({ type: REFRESH_CART, payload: newCart });
  } catch (error) {
    console.log(error);
  }
};

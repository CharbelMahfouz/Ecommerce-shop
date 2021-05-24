import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";

export const reducers = combineReducers({
  products,
  cart,
});

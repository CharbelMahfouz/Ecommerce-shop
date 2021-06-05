import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";
import auth from "./auth";
import checkout from "./checkout";

export const reducers = combineReducers({
  products,
  cart,
  auth,
  checkout,
});

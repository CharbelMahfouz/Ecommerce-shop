import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";
import auth from "./auth";
import checkout from "./checkout";
import categories from "./categories";

export const reducers = combineReducers({
  products,
  cart,
  auth,
  checkout,
  categories,
});

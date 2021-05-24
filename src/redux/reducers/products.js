import { GET_ALL_PRODUCTS } from "../actions/constants/actionTypes";

const productsReducer = (products = [], action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.payload;
    default:
      return products;
  }
};

export default productsReducer;

import {
  FETCH_CATEGORY_PRODUCTS,
  FETCH_PRODUCT,
  GET_ALL_PRODUCTS,
} from "../actions/constants/actionTypes";

const initialState = {
  products: null,
  product: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
    case FETCH_CATEGORY_PRODUCTS:
      return { ...state, products: action.payload };
    case FETCH_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

export default productsReducer;

import {
  FETCH_CATEGORY_PRODUCTS,
  FETCH_PRODUCT,
  GET_ALL_PRODUCTS,
} from "./constants/actionTypes";
import { commerce } from "../../lib/commerce";

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await commerce.products.list();
    dispatch({ type: GET_ALL_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoryProducts = (categorySlug) => async (dispatch) => {
  try {
    const { data } = await commerce.products.list({
      category_slug: [categorySlug],
    });
    dispatch({ type: FETCH_CATEGORY_PRODUCTS, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductInfo = (productId) => async (dispatch) => {
  try {
    const { product } = await commerce.products.retrieve(productId);
    dispatch({ type: FETCH_PRODUCT, payload: product });
  } catch (error) {
    console.log(error);
  }
};

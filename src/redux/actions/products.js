import { GET_ALL_PRODUCTS } from "./constants/actionTypes";
import { commerce } from "../../lib/commerce";

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await commerce.products.list();
    dispatch({ type: GET_ALL_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

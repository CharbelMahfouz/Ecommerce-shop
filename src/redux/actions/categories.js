import { commerce } from "../../lib/commerce";
import { FETCH_ALL_CATEGORIES } from "./constants/actionTypes";

export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await commerce.categories.list();
    dispatch({ type: FETCH_ALL_CATEGORIES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

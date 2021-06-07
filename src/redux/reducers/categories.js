import { FETCH_ALL_CATEGORIES } from "../actions/constants/actionTypes";

const categoriesReducer = (categories = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      return action.payload;
    default:
      return categories;
  }
};

export default categoriesReducer;

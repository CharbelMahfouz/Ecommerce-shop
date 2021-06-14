import {
  FETCH_CUSTOMER,
  FETCH_CUSTOMER_ORDERS,
} from "../actions/constants/actionTypes";

const initialState = {
  customer: null,
  customerOrders: null,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMER:
      return { ...state, customer: action.payload };
      break;
    case FETCH_CUSTOMER_ORDERS:
      return { ...state, customerOrders: action.payload };
    default:
      return state;
  }
};

export default customerReducer;

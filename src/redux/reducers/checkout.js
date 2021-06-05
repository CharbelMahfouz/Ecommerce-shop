import {
  CAPTURE_CHECKOUT,
  CREATE_CHECKOUT_TOKEN,
  DECREMENT_FORM_STEP,
  INCREMENT_FORM_STEP,
  SET_SHIPPING_DATA,
} from "../actions/constants/actionTypes";

const initialState = {
  token: null,
  shippingData: {},
  activeStep: 0,
  order: null,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CHECKOUT_TOKEN:
      return { ...state, token: action.payload };
    case SET_SHIPPING_DATA:
      return { ...state, shippingData: action.payload };
    case INCREMENT_FORM_STEP:
      return { ...state, activeStep: state.activeStep + 1 };
    case DECREMENT_FORM_STEP:
      return { ...state, activeStep: state.activeStep - 1 };
    case CAPTURE_CHECKOUT:
      return { ...state, order: action.payload };
    default:
      return state;
  }
};

export default checkoutReducer;

import { commerce } from "../../lib/commerce";
import {
  CAPTURE_CHECKOUT,
  CREATE_CHECKOUT_TOKEN,
} from "./constants/actionTypes";
import { refreshCart } from "./cart";

export const generateCheckoutToken = (cartId) => async (dispatch) => {
  try {
    const token = await commerce.checkout.generateToken(cartId, {
      type: "cart",
    });
    dispatch({ type: CREATE_CHECKOUT_TOKEN, payload: token });
  } catch (error) {
    console.log(error);
  }
};

export const handleCaptureCheckout =
  (chekcoutTokenId, newOrder) => async (dispatch) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        chekcoutTokenId,
        newOrder
      );
      dispatch({ type: CAPTURE_CHECKOUT, payload: incomingOrder });
      dispatch(refreshCart());
    } catch (error) {
      console.log(error);
    }
  };

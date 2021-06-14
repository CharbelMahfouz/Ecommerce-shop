import { FETCH_CUSTOMER, FETCH_CUSTOMER_ORDERS } from "./constants/actionTypes";
import { commerce } from "../../lib/commerce";

export const fetchCustomer = () => async (dispatch) => {
  try {
    const customer = await commerce.customer.about();
    dispatch({ type: FETCH_CUSTOMER, payload: customer });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCustomerOrders = (customerId) => async (dispatch) => {
  try {
    const orders = await commerce.customers.getOrders(customerId);
    dispatch({ type: FETCH_CUSTOMER_ORDERS, payload: orders });
  } catch (error) {
    console.log(error);
  }
};

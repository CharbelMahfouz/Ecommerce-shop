import { commerce } from "../../lib/commerce";

export const loginUser = (email, url) => async (dispatch) => {
  try {
    const response = await commerce.customer.login(email, url);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};
